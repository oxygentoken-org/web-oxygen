"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Token_Chip from "./Token_Chip";

export default function Wallet_Tokens_Panel() {
  const t = useTranslations("Dashboard.burn");
  return (
    <div className="h-full flex flex-col gap-3">
      <h2 className="text-white font-semibold text-sm sm:text-base">{t("walletTokens")}</h2>

      <div className="flex items-end gap-3">
        <div className="flex items-center justify-center flex-shrink-0">
          <Image
            src="/assets/images/icons/Wallet_icon.svg"
            alt="Wallet"
            width={64}
            height={64}
            className="w-16 h-16"
          />
        </div>
        <div className="text-white text-lg sm:text-xl">
          <span className="font-bold">0</span> <span className="font-normal">{t("tokens")}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 flex-1">
        <Token_Chip
          title={t("tokenOM")}
          value="0"
          subtitle="0 m²"
          icon="/assets/images/icons/OM_icon.svg"
        />

        <Token_Chip
          title={t("tokenOC")}
          value="0"
          subtitle={`0 ${t("co2Absorbed")}`}
          icon="/assets/images/icons/OC_icon.svg"
        />

        <Token_Chip
          title={t("burnedTokens")}
          value="0"
          icon="/assets/images/icons/BurnsToken_icon.svg"
        />
      </div>
    </div>
  );
}

