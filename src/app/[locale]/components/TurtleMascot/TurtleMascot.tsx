"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import "./turtle-mascot.css";

const BOTTOM_THRESHOLD_PX = 4;
const STEP_INTERVAL_MS = 460;

function TurtleMascot() {
  const t = useTranslations("Footer");
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const lane = wrap?.parentElement;
    if (!wrap || !lane) return;

    let hasWoken = false;
    let stepInterval: ReturnType<typeof setInterval> | null = null;

    const laneWidth = () => lane.clientWidth - wrap.offsetWidth;

    const isAtBottom = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      return scrollHeight <= 0 || scrollTop >= scrollHeight - BOTTOM_THRESHOLD_PX;
    };

    const wakeUpAndWalk = () => {
      if (hasWoken) return;
      hasWoken = true;
      stepInterval = setInterval(() => {
        wrap.classList.toggle("step-a");
        wrap.classList.toggle("step-b");
      }, STEP_INTERVAL_MS);
      wrap.style.left = `${laneWidth()}px`;
    };

    const onScroll = () => {
      if (!hasWoken && isAtBottom()) wakeUpAndWalk();
    };

    const onResize = () => {
      if (hasWoken) wrap.style.left = `${laneWidth()}px`;
      onScroll();
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
      if (!hasWoken) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest("button, a")) hop();
    };

    wrap.style.left = "0px";
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("click", onDocumentClick);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", onDocumentClick);
      if (stepInterval) clearInterval(stepInterval);
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
