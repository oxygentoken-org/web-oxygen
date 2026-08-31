"use client";

import { useTranslations } from "next-intl";
import FooterMascot from "../FooterMascot/FooterMascot";

function JaguarMascot() {
  const t = useTranslations("Footer");

  return (
    <FooterMascot
      message={t.rich("jaguar-message", {
        strong: (chunks) => <strong>{chunks}</strong>,
        em: (chunks) => <em>{chunks}</em>,
      })}
    >
      <svg width="96" height="62" viewBox="0 0 112 72" shapeRendering="crispEdges">
        {/* tail — trails behind, black rings near the tip */}
        <g>
          <rect x="32" y="34" width="8" height="10" fill="#a67a3c" />
          <rect x="24" y="36" width="8" height="8" fill="#c9a25a" />
          <rect x="16" y="36" width="8" height="8" fill="#a67a3c" />
          <rect x="8" y="38" width="8" height="6" fill="#c9a25a" />
          <rect x="8" y="38" width="8" height="4" fill="#1c1a16" />
          <rect x="2" y="38" width="6" height="6" fill="#1c1a16" />
        </g>

        <g id="mascot-leg-back">
          <rect x="48" y="48" width="12" height="16" fill="#a67a3c" />
          <rect x="48" y="48" width="12" height="4" fill="#c9a25a" />
          <rect x="48" y="58" width="12" height="4" fill="#241f18" />
        </g>
        <g id="mascot-leg-front">
          <rect x="76" y="48" width="12" height="16" fill="#a67a3c" />
          <rect x="76" y="48" width="12" height="4" fill="#c9a25a" />
          <rect x="76" y="58" width="12" height="4" fill="#241f18" />
        </g>

        {/* body — robust, muscular barrel torso */}
        <g>
          <rect x="40" y="28" width="44" height="20" fill="#c9a25a" />
          <rect x="40" y="28" width="44" height="4" fill="#dbb877" />
          <rect x="40" y="44" width="44" height="4" fill="#a67a3c" />
        </g>

        {/* spine dashes + scattered rosettes — the field mark that reads "jaguar" */}
        <g>
          <rect x="44" y="28" width="4" height="4" fill="#1c1a16" />
          <rect x="52" y="28" width="4" height="4" fill="#1c1a16" />
          <rect x="60" y="28" width="4" height="4" fill="#1c1a16" />
          <rect x="68" y="28" width="4" height="4" fill="#1c1a16" />
          <rect x="76" y="28" width="4" height="4" fill="#1c1a16" />
          <rect x="46" y="34" width="4" height="4" fill="#2b1f12" />
          <rect x="54" y="32" width="4" height="4" fill="#2b1f12" />
          <rect x="62" y="36" width="4" height="4" fill="#2b1f12" />
          <rect x="70" y="32" width="4" height="4" fill="#2b1f12" />
          <rect x="42" y="40" width="4" height="4" fill="#2b1f12" />
          <rect x="50" y="42" width="4" height="4" fill="#2b1f12" />
          <rect x="58" y="40" width="4" height="4" fill="#2b1f12" />
          <rect x="66" y="42" width="4" height="4" fill="#2b1f12" />
          <rect x="74" y="38" width="4" height="4" fill="#2b1f12" />
        </g>

        {/* head — broad and round, white muzzle, small rounded ears */}
        <g>
          <rect x="84" y="24" width="16" height="16" fill="#c9a25a" />
          <rect x="84" y="24" width="16" height="4" fill="#dbb877" />
          <rect x="86" y="20" width="4" height="4" fill="#a67a3c" />
          <rect x="96" y="20" width="4" height="4" fill="#a67a3c" />
          <rect x="86" y="26" width="4" height="4" fill="#2b1f12" />
          <rect x="88" y="36" width="10" height="6" fill="#f0e6d0" />
          <rect x="92" y="28" width="4" height="4" fill="#1c1a16" />
          <rect x="96" y="38" width="4" height="3" fill="#1c1a16" />
        </g>
      </svg>
    </FooterMascot>
  );
}

export default JaguarMascot;
