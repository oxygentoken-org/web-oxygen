"use client";

import { useTranslations } from "next-intl";
import FooterMascot from "../FooterMascot/FooterMascot";

function AnteaterMascot() {
  const t = useTranslations("Footer");

  return (
    <FooterMascot
      message={t.rich("anteater-message", {
        strong: (chunks) => <strong>{chunks}</strong>,
        em: (chunks) => <em>{chunks}</em>,
      })}
    >
      <svg width="112" height="62" viewBox="0 0 128 72" shapeRendering="crispEdges">
        {/* tail — huge and bushy, dragging low behind the body; this silhouette
            (not the snout) is what actually reads as "anteater" at a glance */}
        <g>
          <rect x="36" y="28" width="8" height="20" fill="#5c574c" />
          <rect x="36" y="28" width="8" height="4" fill="#8a8478" />
          <rect x="28" y="32" width="8" height="16" fill="#4a453c" />
          <rect x="28" y="32" width="8" height="4" fill="#6b655a" />
          <rect x="20" y="34" width="8" height="14" fill="#5c574c" />
          <rect x="20" y="34" width="8" height="4" fill="#8a8478" />
          <rect x="12" y="38" width="8" height="10" fill="#4a453c" />
          <rect x="12" y="38" width="8" height="4" fill="#6b655a" />
          <rect x="4" y="40" width="8" height="8" fill="#5c574c" />
          <rect x="4" y="40" width="8" height="4" fill="#8a8478" />
          <rect x="0" y="42" width="4" height="6" fill="#3a352c" />
        </g>

        <g id="mascot-leg-back">
          <rect x="48" y="48" width="12" height="16" fill="#4a453c" />
          <rect x="48" y="48" width="12" height="4" fill="#6b655a" />
          <rect x="48" y="60" width="12" height="4" fill="#241f18" />
        </g>
        <g id="mascot-leg-front">
          <rect x="76" y="48" width="12" height="16" fill="#4a453c" />
          <rect x="76" y="48" width="12" height="4" fill="#6b655a" />
          <rect x="76" y="60" width="12" height="4" fill="#241f18" />
        </g>

        {/* body */}
        <g>
          <rect x="44" y="32" width="48" height="16" fill="#8a8478" />
          <rect x="44" y="32" width="48" height="4" fill="#a8a296" />
          <rect x="44" y="44" width="48" height="4" fill="#5c574c" />
        </g>

        {/* diagonal shoulder stripe — the field mark that IDs the species */}
        <g>
          <rect x="72" y="32" width="8" height="4" fill="#1c1a16" />
          <rect x="76" y="32" width="4" height="4" fill="#e8e2d0" />
          <rect x="68" y="36" width="8" height="4" fill="#1c1a16" />
          <rect x="64" y="36" width="4" height="4" fill="#e8e2d0" />
          <rect x="64" y="40" width="8" height="4" fill="#1c1a16" />
          <rect x="60" y="40" width="4" height="4" fill="#e8e2d0" />
          <rect x="60" y="44" width="8" height="4" fill="#1c1a16" />
          <rect x="56" y="44" width="4" height="4" fill="#e8e2d0" />
        </g>

        {/* head + elongated snout */}
        <g>
          <rect x="84" y="28" width="8" height="8" fill="#8a8478" />
          <rect x="88" y="20" width="8" height="12" fill="#8a8478" />
          <rect x="88" y="18" width="4" height="4" fill="#6b655a" />
          <rect x="96" y="24" width="12" height="4" fill="#8a8478" />
          <rect x="100" y="28" width="16" height="4" fill="#8a8478" />
          <rect x="112" y="28" width="8" height="4" fill="#4a453c" />
          <rect x="90" y="22" width="4" height="4" fill="#1c1a16" />
        </g>
      </svg>
    </FooterMascot>
  );
}

export default AnteaterMascot;
