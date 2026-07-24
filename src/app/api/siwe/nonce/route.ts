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

    const backendUrl = getBackendUrl("/wallet/nonce");

    const nonceResponse = await fetch(backendUrl, {
      method: "GET",
      headers: {
        "Cookie": `jwt=${cookieMap.jwt}`,
        "Content-Type": "application/json",
      },
    });

    if (!nonceResponse.ok) {
      const errorData = await nonceResponse.json().catch(() => ({}));
      console.error("❌ Backend error generating nonce:", nonceResponse.status);
      return NextResponse.json(
        { error: errorData.error || "Failed to generate nonce" },
        { status: nonceResponse.status }
      );
    }

    const nonceData = await nonceResponse.json();
    return NextResponse.json({ nonce: nonceData.nonce }, { status: 200 });
  } catch (error) {
    console.error("❌ Error generating nonce:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
