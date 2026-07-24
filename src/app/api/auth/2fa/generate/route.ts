import { NextResponse } from "next/server";
import { getBackendUrl } from "../../../../../utils/backendConfig";

export async function POST(req: Request) {
  try {
    const cookies = req.headers.get("cookie") || "";
    const cookieMap = Object.fromEntries(
      cookies.split("; ").map((c) => c.split("="))
    );

    const body = await req.json();
    const { email } = body;

    if (!email) {
      console.error("❌ Missing email");
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const backendUrl = getBackendUrl("/auth/2fa/generate");

    const generateResponse = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(cookieMap.jwt && { "Cookie": `jwt=${cookieMap.jwt}` }),
      },
      body: JSON.stringify({
        email,
      }),
    });

    if (!generateResponse.ok) {
      const errorData = await generateResponse.json().catch(() => ({}));
      console.error("❌ Backend error generating 2FA:", generateResponse.status);
      return NextResponse.json(
        { error: errorData.error || "Failed to generate 2FA code", success: false },
        { status: generateResponse.status }
      );
    }

    const generateData = await generateResponse.json();

    return NextResponse.json({
      success: true,
      message: generateData.message || "2FA code sent to your email",
    });
  } catch (error) {
    console.error("❌ Error generating 2FA:", error);
    if (error instanceof Error) {
      console.error("❌ Error details:", error.message, error.stack);
    }
    return NextResponse.json(
      { error: "Internal server error", success: false },
      { status: 500 }
    );
  }
}

