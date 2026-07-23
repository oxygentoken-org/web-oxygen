import "./globals.css";

import RootLayout from "./layout-ga";
import { Transition_Provider } from "./context/Transition_Context";
import { AuthProvider } from "./context/Auth_Context";
import { DevProvider } from "./context/Dev_Context";
import { WalletProvider } from "./context/Wallet_Context";
import Navbar from "./components/Navbar/Navbar";
import dynamic from "next/dynamic";
const Back_To_Top = dynamic(() => import("./components/Back_To_Top"), { ssr: false });
import Vercel_Analytics from "./components/Vercel_Analytics/Vercel_Analytics";

const { NextIntlClientProvider } = require("next-intl");
const { notFound } = require("next/navigation");

export const metadata = {
  metadataBase: new URL("https://oxygentoken.org"),
  title: {
    default: "Oxygen Token",
    template: "%s | Oxygen Token",
  },
  description:
    "Oxygen turns verified forest conservation into on-chain carbon credits. Offset your footprint and fund the protection of native forests in Argentina.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    siteName: "Oxygen Token",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <RootLayout />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <DevProvider>
            <AuthProvider>
              <WalletProvider>
              <Transition_Provider>
                <Navbar />
                {children}
                <Back_To_Top />
              </Transition_Provider>
              </WalletProvider>
            </AuthProvider>
          </DevProvider>
        </NextIntlClientProvider>
        <Vercel_Analytics />
      </body>
    </html>
  );
}

export default LocaleLayout;
