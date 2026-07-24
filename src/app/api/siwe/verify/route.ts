import { NextResponse } from "next/server";
import { getBackendUrl } from "../../../../utils/backendConfig";

export async function POST(req: Request) {
  try {
    const cookies = req.headers.get("cookie") || "";
    const cookieMap = Object.fromEntries(
      cookies.split("; ").map((c) => c.split("="))
    );

    if (!cookieMap.jwt) {
      console.error("❌ No JWT token found in cookies");
      return NextResponse.json(
        { error: "Unauthorized - No JWT token" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { message, signature } = body;

    if (!message || !signature) {
      console.error("❌ Missing message or signature");
      return NextResponse.json(
        { error: "Message and signature are required" },
        { status: 400 }
      );
    }

    const backendUrl = getBackendUrl("/wallet/link");

    const linkResponse = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Cookie": `jwt=${cookieMap.jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        signature,
      }),
    });

    if (!linkResponse.ok) {
      const errorData = await linkResponse.json().catch(() => ({}));
      console.error("❌ Backend error linking wallet:", linkResponse.status);
      return NextResponse.json(
        {
          error: errorData.error || "Failed to link wallet",
          details: errorData,
        },
        { status: linkResponse.status }
      );
    }

    const linkData = await linkResponse.json();
    return NextResponse.json({
      success: true,
      walletAddress: linkData.walletAddress || linkData.wallet_address,
      message: "Wallet linked successfully",
      ...linkData,
    });
  } catch (error) {
    console.error("❌ Error verifying SIWE:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
