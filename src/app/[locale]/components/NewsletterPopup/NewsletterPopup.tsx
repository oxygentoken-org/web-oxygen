"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { InputWithLabel } from "../ui/InputWithLabel";
import { Button } from "../ui/Button2";
import "./newsletter-popup.css";

const STORAGE_KEY = "oxygen_newsletter_popup_dismissed";
const SHOW_DELAY_MS = 4000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterPopup() {
  const t = useTranslations("NewsletterPopup");
  const locale = useLocale();

  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot — un humano nunca lo completa
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), locale, source: "popup", company }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("done");
      localStorage.setItem(STORAGE_KEY, "1");
      setTimeout(dismiss, 2500);
    } catch {
      setStatus("error");
    }
  };

  if (!visible) return null;

  return (
    <div className="newsletterPopupBackdrop" onClick={dismiss}>
      <div className="newsletterPopupCard" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="newsletterPopupClose"
          onClick={dismiss}
          aria-label={t("close")}
        >
          ×
        </button>

        {status === "done" ? (
          <p className="newsletterPopupThanks">{t("thanks")}</p>
        ) : (
          <>
            <h3 className="newsletterPopupTitle">{t("title")}</h3>
            <p className="newsletterPopupBody">{t("body")}</p>
            <form className="newsletterPopupForm" onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              />
              <InputWithLabel
                variant="large"
                rounded="full"
                className="grow"
                label=""
                aria-label={t("placeholder")}
                id="newsletterPopupMail"
                type="email"
                placeholder={t("placeholder")}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
              />
              <Button variant="large" rounded="full" type="submit" disabled={status === "loading"}>
                {status === "loading" ? t("sending") : t("cta")}
              </Button>
            </form>
            {status === "error" && <p className="newsletterPopupError">{t("error")}</p>}
          </>
        )}
      </div>
    </div>
  );
}
