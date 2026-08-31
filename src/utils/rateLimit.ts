// Rate limiter en memoria, best-effort. NO es un rate limit distribuido: cada
// instancia de la función serverless tiene su propio Map, así que un cold
// start o el autoscaling a otra instancia lo resetean. Sirve para frenar un
// script simple pegándole al endpoint en loop dentro de la misma instancia
// caliente, no para garantizar un límite duro a escala. Si el newsletter
// crece y hace falta algo a prueba de balas, esto debería migrar a Vercel KV
// / Upstash Redis (requiere provisionar esa infra en el dashboard de Vercel).
type Bucket = { count: number; windowStart: number };

const buckets = new Map<string, Bucket>();

// Limpieza periódica para no acumular entradas viejas indefinidamente en la
// misma instancia mientras esté caliente.
const MAX_BUCKETS = 5000;

export function checkRateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number }
): boolean {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || now - existing.windowStart > windowMs) {
    buckets.set(key, { count: 1, windowStart: now });
  } else {
    existing.count += 1;
    if (existing.count > limit) return false;
  }

  if (buckets.size > MAX_BUCKETS) {
    Array.from(buckets.entries()).forEach(([k, v]) => {
      if (now - v.windowStart > windowMs) buckets.delete(k);
    });
  }

  return true;
}
