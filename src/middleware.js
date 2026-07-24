import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["es", "en"],
  defaultLocale: "es",
});

// Lightweight client-side gate: the token's signature is validated server-side
// (via /api/auth/session against the backend). Here we only reject a token that
// is missing, malformed, or expired, so a garbage `jwt=x` cookie no longer
// passes the dashboard gate. This is a UX guard, not the security boundary.
function isJwtStructurallyValid(token) {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  try {
    const json = atob(parts[1].replace(/-/g, "+").replace(/_/g, "/"));
    const payload = JSON.parse(json);
    if (payload.exp && Date.now() >= payload.exp * 1000) return false;
    return true;
  } catch {
    return false;
  }
}

export default async function middleware(request) {
  const pathname = request.nextUrl.pathname;

  if (pathname.includes("/dashboard")) {
    const env = process.env.NEXT_PUBLIC_ENV;
    const bypassAuth = process.env.NEXT_PUBLIC_BYPASS_AUTH;
    const nodeEnv = process.env.NODE_ENV;

    const isProduction = nodeEnv === "production" || env === "production";
    const isDevMode = !isProduction
      && env === "development"
      && bypassAuth === "true";

    if (!isDevMode) {
      // Split each cookie on the first "=" only, so token values are preserved.
      const cookies = request.headers.get("cookie") || "";
      const cookieMap = Object.fromEntries(
        cookies
          .split("; ")
          .filter(Boolean)
          .map((c) => {
            const i = c.indexOf("=");
            return i === -1 ? [c, ""] : [c.slice(0, i), c.slice(i + 1)];
          })
      );

      if (!isJwtStructurallyValid(cookieMap.jwt)) {
        const locale = pathname.split("/")[1];
        const loginUrl = `/${locale}/login`;
        return NextResponse.redirect(new URL(loginUrl, request.url));
      }
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
