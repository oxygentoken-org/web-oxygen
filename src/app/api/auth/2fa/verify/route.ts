import { NextResponse } from "next/server";
import { getBackendUrl } from "../../../../../utils/backendConfig";

export async function POST(req: Request) {
  try {
    const cookies = req.headers.get("cookie") || "";
    const cookieMap = Object.fromEntries(
      cookies.split("; ").map((c) => c.split("="))
    );

    const body = await req.json();
    const { email, code } = body;

    if (!email || !code) {
      console.error("❌ Missing email or code");
      return NextResponse.json(
        { error: "Email and code are required" },
        { status: 400 }
      );
    }

    if (code.length !== 6 || !/^\d{6}$/.test(code)) {
      console.error("❌ Invalid code format");
      return NextResponse.json(
        { error: "Code must be 6 digits" },
        { status: 400 }
      );
    }

    const backendUrl = getBackendUrl("/auth/2fa/verify");

    const verifyResponse = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(cookieMap.jwt && { "Cookie": `jwt=${cookieMap.jwt}` }),
      },
      body: JSON.stringify({
        email,
        code,
      }),
    });

    if (!verifyResponse.ok) {
      const errorData = await verifyResponse.json().catch(() => ({}));
      console.error("❌ Backend error verifying 2FA:", verifyResponse.status);

      if (verifyResponse.status === 401) {
        return NextResponse.json(
          { error: "Código inválido", success: false },
          { status: 401 }
        );
      }

      if (verifyResponse.status === 400) {
        return NextResponse.json(
          { error: "Código expirado o no encontrado", success: false },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: errorData.error || "Failed to verify 2FA code", success: false },
        { status: verifyResponse.status }
      );
    }

    const verifyData = await verifyResponse.json();

    const response = NextResponse.json({
      success: true,
      status: verifyData.status || "logged",
      user: verifyData.user || verifyData,
    });

    const setCookieHeaders = verifyResponse.headers.getSetCookie();
    setCookieHeaders.forEach((cookie) => {
      const [nameValue] = cookie.split(";");
      const [name, value] = nameValue.split("=");
      if (name && value) {
        response.cookies.set(name, value, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
        });
      }
    });

    return response;
  } catch (error) {
    console.error("❌ Error verifying 2FA:", error);
    return NextResponse.json(
      { error: "Internal server error", success: false },
      { status: 500 }
    );
  }
}
