"use client";
import { useTranslations } from "next-intl";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import Animated_Page from "../../components/ui/Animated_Page";

export default function IntercambiarPage() {
  const t = useTranslations("Dashboard.exchange");
  return (
    <DashboardLayout>
      <Animated_Page>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {t("pageTitle")}
            </h1>
            <p className="text-white/70 text-lg">
              {t("inDevelopment")}
            </p>
          </div>
        </div>
      </Animated_Page>
    </DashboardLayout>
  );
} 