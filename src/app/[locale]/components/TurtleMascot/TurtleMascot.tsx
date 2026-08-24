"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import "./turtle-mascot.css";

const BOTTOM_THRESHOLD_PX = 8;
const STEP_INTERVAL_MS = 460;
const WALK_MS = 7000;

function TurtleMascot() {
  const t = useTranslations("Footer");
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

    const isAtBottom = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const max = doc.scrollHeight - doc.clientHeight;
      return max > 0 && scrollTop >= max - BOTTOM_THRESHOLD_PX;
    };

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
      startLegs();
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

    const onScroll = () => {
      if (isAtBottom()) walk();
      else if (walking || arrived) reset();
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
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("click", onDocumentClick);
    // Intentionally NOT calling onScroll() on mount: that would consume the
    // walk during initial layout/scroll-restoration, before the user sees it.

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", onDocumentClick);
      if (stepInterval) clearInterval(stepInterval);
      if (walkTimeout) clearTimeout(walkTimeout);
    };
  }, []);

  return (
    <div className="turtle-mascot">
      <p className="turtle-mascot-message">
        {t.rich("turtle-message", {
          strong: (chunks) => <strong>{chunks}</strong>,
          em: (chunks) => <em>{chunks}</em>,
        })}
      </p>
      <div className="turtle-mascot-lane">
        <div className="turtle-mascot-track" />
        <div className="turtle-mascot-wrap" ref={wrapRef}>
          <div className="turtle-mascot-shadow" />
          <svg width="96" height="62" viewBox="0 0 112 72" shapeRendering="crispEdges">
            <g id="turtle-leg-back">
              <rect x="24" y="44" width="12" height="16" fill="#6b563a" />
              <rect x="24" y="44" width="12" height="4" fill="#8a7050" />
            </g>
            <g id="turtle-leg-front">
              <rect x="76" y="44" width="12" height="16" fill="#6b563a" />
              <rect x="76" y="44" width="12" height="4" fill="#8a7050" />
            </g>
            <rect x="12" y="40" width="8" height="8" fill="#6b563a" />
            <rect x="8" y="40" width="4" height="4" fill="#3a2c1c" />
            <g>
              <rect x="48" y="12" width="16" height="4" fill="#2b1810" />
              <rect x="40" y="16" width="32" height="4" fill="#2b1810" />
              <rect x="32" y="20" width="48" height="4" fill="#2b1810" />
              <rect x="28" y="24" width="56" height="4" fill="#2b1810" />
              <rect x="24" y="28" width="64" height="16" fill="#2b1810" />
              <rect x="28" y="44" width="56" height="4" fill="#2b1810" />
              <rect x="36" y="48" width="40" height="4" fill="#2b1810" />
              <rect x="52" y="16" width="8" height="4" fill="#4a3020" />
              <rect x="44" y="20" width="24" height="4" fill="#4a3020" />
              <rect x="36" y="24" width="40" height="4" fill="#4a3020" />
              <rect x="32" y="28" width="48" height="12" fill="#4a3020" />
              <rect x="36" y="40" width="40" height="4" fill="#4a3020" />
              <rect x="40" y="44" width="32" height="4" fill="#4a3020" />
              <rect x="48" y="24" width="8" height="8" fill="#c9a066" />
              <rect x="60" y="24" width="8" height="8" fill="#c9a066" />
              <rect x="40" y="32" width="8" height="8" fill="#c9a066" />
              <rect x="52" y="32" width="8" height="8" fill="#c9a066" />
              <rect x="64" y="32" width="8" height="8" fill="#c9a066" />
              <rect x="44" y="24" width="4" height="16" fill="#2b1810" />
              <rect x="56" y="24" width="4" height="16" fill="#2b1810" />
              <rect x="68" y="24" width="4" height="16" fill="#2b1810" />
              <rect x="32" y="36" width="48" height="4" fill="#2b1810" />
            </g>
            <rect x="84" y="28" width="8" height="4" fill="#8a7050" />
            <rect x="88" y="24" width="16" height="16" fill="#8a7050" />
            <rect x="88" y="24" width="16" height="4" fill="#a2895f" />
            <rect x="88" y="36" width="16" height="4" fill="#6b563a" />
            <rect x="98" y="28" width="4" height="4" fill="#170f08" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default TurtleMascot;
