"use client";

import { useEffect, useRef, ReactNode } from "react";
import "./footer-mascot.css";

const STEP_INTERVAL_MS = 460;
// Keep in sync with `transition: left` duration in footer-mascot.css.
const WALK_MS = 7000;

interface FooterMascotProps {
  message: ReactNode;
  /** The mascot's own <svg>...</svg>, with leg groups tagged
   *  id="mascot-leg-back" / id="mascot-leg-front" so the walk cycle can
   *  animate them — see footer-mascot.css. */
  children: ReactNode;
}

// Walk engine shared by every footer mascot (turtle on the home page, and
// whichever Gran Chaco animal each other page uses) — species only changes
// the SVG art and the message passed in, never this logic.
function FooterMascot({ message, children }: FooterMascotProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const lane = wrap?.parentElement;
    if (!wrap || !lane) return;

    let walking = false;
    let arrived = false;
    let stepInterval: ReturnType<typeof setInterval> | null = null;
    let walkTimeout: ReturnType<typeof setTimeout> | null = null;

    const laneWidth = () => Math.max(0, lane.clientWidth - wrap.offsetWidth);

    const reducedMotion = () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const startLegs = () => {
      if (stepInterval) return;
      stepInterval = setInterval(() => {
        wrap.classList.toggle("step-a");
        wrap.classList.toggle("step-b");
      }, STEP_INTERVAL_MS);
    };

    const stopLegs = () => {
      if (stepInterval) {
        clearInterval(stepInterval);
        stepInterval = null;
      }
      wrap.classList.remove("step-a", "step-b");
    };

    // Walk from the left edge to the right edge, animating legs along the way.
    const walk = () => {
      if (walking || arrived) return;
      walking = true;
      // Snap to the start with no transition, force a reflow, then let the
      // CSS `transition: left` carry it across so the walk is always visible.
      wrap.style.transition = "none";
      wrap.style.left = "0px";
      void wrap.offsetWidth;
      wrap.style.transition = "";
      // Under reduced-motion the CSS makes the move instant; don't animate legs.
      if (!reducedMotion()) startLegs();
      requestAnimationFrame(() => {
        wrap.style.left = `${laneWidth()}px`;
      });
      walkTimeout = setTimeout(() => {
        stopLegs();
        walking = false;
        arrived = true;
      }, WALK_MS + 100);
    };

    // When the user scrolls back up, reset so the walk can play again next time.
    const reset = () => {
      if (walkTimeout) {
        clearTimeout(walkTimeout);
        walkTimeout = null;
      }
      stopLegs();
      walking = false;
      arrived = false;
      wrap.style.transition = "none";
      wrap.style.left = "0px";
      void wrap.offsetWidth;
      wrap.style.transition = "";
    };

    const onResize = () => {
      if (walking || arrived) wrap.style.left = `${laneWidth()}px`;
    };

    const hop = () => {
      wrap.animate(
        [
          { transform: "translate(0, -78%) scale(1)" },
          { transform: "translate(0, -110%) scale(1.08)" },
          { transform: "translate(0, -78%) scale(1)" },
        ],
        { duration: 480, easing: "cubic-bezier(.34,1.56,.64,1)" },
      );
    };

    const onDocumentClick = (e: MouseEvent) => {
      if (!walking && !arrived) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest("button, a")) hop();
    };

    wrap.style.left = "0px";

    // Trigger the walk when the mascot's lane scrolls into view (reliable and
    // it never fires during initial layout). Replays each time it re-enters.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) walk();
          else reset();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(lane);

    window.addEventListener("resize", onResize);
    document.addEventListener("click", onDocumentClick);

    return () => {
      io.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", onDocumentClick);
      if (stepInterval) clearInterval(stepInterval);
      if (walkTimeout) clearTimeout(walkTimeout);
    };
  }, []);

  return (
    <div className="footer-mascot">
      <p className="footer-mascot-message">{message}</p>
      <div className="footer-mascot-lane">
        <div className="footer-mascot-track" />
        <div className="footer-mascot-wrap" ref={wrapRef}>
          <div className="footer-mascot-shadow" />
          {children}
        </div>
      </div>
    </div>
  );
}

export default FooterMascot;
