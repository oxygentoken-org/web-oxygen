"use client";
import { useTranslations } from "next-intl";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import Dashboard_Main from "../components/Dashboard/Dashboard_Main/Dashboard_Main";
import Animated_Page from "../components/ui/Animated_Page";
import AuthLoading from "../components/ui/Auth_Loading";
import { useAuth } from "../context/Auth_Context";

export default function DashboardPage() {
  const t = useTranslations("Dashboard");
  const { user } = useAuth();

  const dashboardData = {
    metrics: [
      {
        title: t("metrics.carbonCredits"),
        value: String(user?.omBalance ?? 0),
        icon: "/assets/images/imgTrees.jpg",
        description: t("metrics.carbonCreditsDesc")
      },
      {
        title: t("metrics.co2Absorbed"),
        value: String(user?.carbonCredits ?? 0),
        icon: "/assets/images/forest.jpg",
        description: t("metrics.co2AbsorbedDesc")
      },
      {
        title: t("metrics.areaSaved"),
        value: "0",
        icon: "/assets/images/imgTrees.jpg",
        description: t("metrics.areaSavedDesc")
      }
    ],
    projects: [
      {
        id: "1",
        name: "La Florencia",
        location: "Formosa",
        price: "$0.00 / tnCO2",
        image: "/assets/images/araucariasBuy.png",
        status: "active" as const
      },
      {
        id: "2",
        name: t("projects.saltaProject"),
        location: "Misiones",
        price: "$0.00 / tnCO2",
        image: "/assets/images/proyectoSalta.png",
        status: "active" as const
      }
    ],
    earnings: {
      total: "0",
      chartData: [
        { month: t("months.jan"), value: 0 },
        { month: t("months.feb"), value: 0 },
        { month: t("months.mar"), value: 0 },
        { month: t("months.apr"), value: 0 },
        { month: t("months.may"), value: 0 },
        { month: t("months.jun"), value: 0 },
        { month: t("months.jul"), value: 0 },
        { month: t("months.aug"), value: 0 },
        { month: t("months.sep"), value: 0 },
        { month: t("months.oct"), value: 0 },
        { month: t("months.nov"), value: 0 },
        { month: t("months.dec"), value: 0 }
      ]
    },
    footprint: {
      value: "0,00",
      unit: t("footprint.unit"),
      period: t("footprint.period")
    },
    social: {
      certificateValue: "0 M²",
      socialPlatforms: [
        {
          name: "Instagram",
          icon: "instagram",
          action: t("social.instagramAction")
        },
        {
          name: "LinkedIn",
          icon: "linkedin",
          action: t("social.linkedinAction")
        }
      ]
    }
  };

  return (
    <AuthLoading requireAuth={true}>
      <DashboardLayout>
        <Animated_Page>
          <Dashboard_Main {...dashboardData} />
        </Animated_Page>
      </DashboardLayout>
    </AuthLoading>
  );
} 