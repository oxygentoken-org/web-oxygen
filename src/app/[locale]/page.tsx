import "./globals.css";
import type { Metadata } from "next";
import MainPage from "./components/MainPage/MainPage";

export const metadata: Metadata = {
  title: { absolute: "Oxygen Token — Tokenized carbon credits for real forest conservation" },
  description:
    "Oxygen turns verified forest conservation into on-chain carbon credits. Offset your footprint and fund the protection of native forests in Argentina.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Oxygen Token — Tokenized carbon credits for real forest conservation",
    description:
      "Oxygen turns verified forest conservation into on-chain carbon credits. Offset your footprint and fund the protection of native forests in Argentina.",
    url: "/",
    siteName: "Oxygen Token",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <main>
        <MainPage />
      </main>
    </>
  );
}
