"use client";

import { useTranslations } from "next-intl";
import FooterMascot from "../FooterMascot/FooterMascot";

function TurtleMascot() {
  const t = useTranslations("Footer");

  return (
    <FooterMascot
      message={t.rich("turtle-message", {
        strong: (chunks) => <strong>{chunks}</strong>,
        em: (chunks) => <em>{chunks}</em>,
      })}
    >
      <svg width="96" height="62" viewBox="0 0 112 72" shapeRendering="crispEdges">
        <g id="mascot-leg-back">
          <rect x="24" y="44" width="12" height="16" fill="#6b563a" />
          <rect x="24" y="44" width="12" height="4" fill="#8a7050" />
        </g>
        <g id="mascot-leg-front">
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
    </FooterMascot>
  );
}

export default TurtleMascot;
