"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "../ui/Button2";
import { InputWithLabel } from "../ui/InputWithLabel";

const copy = {
  es: {
    placeholder: "Tu email",
    thanks: "¡Gracias por anotarte! 🌱",
    error: "Hubo un problema. Probá de nuevo.",
    invalid: "Ingresá un email válido.",
  },
  en: {
    placeholder: "Your email",
    thanks: "Thanks for signing up! 🌱",
    error: "Something went wrong. Please try again.",
    invalid: "Please enter a valid email.",
  },
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const c = copy[locale as keyof typeof copy] ?? copy.en;

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      setMessage(c.invalid);
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("done");
      setMessage(c.thanks);
      setEmail("");
    } catch {
      setStatus("error");
      setMessage(c.error);
    }
  }

  if (status === "done") {
    return (
      <p className="text-teal-300 font-medium" role="status">
        {message}
      </p>
    );
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit} noValidate>
      <div className="flex items-center gap-3">
        <InputWithLabel
          variant="large"
          rounded="full"
          className="grow"
          inputClassName="bg-white/10 backdrop-blur-md border-white/15 hover:bg-white/15 focus:bg-white/15 shadow-inner"
          label=""
          aria-label={c.placeholder}
          id="newsletterMail"
          type="email"
          placeholder={c.placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button variant="large" rounded="full" type="submit" disabled={status === "loading"}>
          {t("news-button")}
        </Button>
      </div>
      {status === "error" && (
        <p className="text-red-300 text-sm" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
