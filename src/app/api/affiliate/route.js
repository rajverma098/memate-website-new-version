import { NextResponse } from 'next/server';

const API_BASE_URL =
  process.env.API_BASE_URL || "https://app.memate.com.au/api/v1";

export async function POST(request) {
  try {
    const body = await request.json();
    const endpoint = `${API_BASE_URL}/referrals/public/applications/`;

    console.log("=== AFFILIATE PROXY ===");
    console.log("Endpoint:", endpoint);
    console.log("Payload:", body);

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Origin": "https://memate.com.au",
        "Referer": "https://memate.com.au/",
      },
      body: JSON.stringify(body),
    });

    const responseText = await response.text();
    console.log("Backend status:", response.status);
    console.log("Backend body:", responseText);

    if (!response.ok) {
      // 🔍 Return the EXACT backend error so we can see it in the browser
      return NextResponse.json(
        {
          debug: true,
          backendStatus: response.status,
          backendBody: responseText,
          endpoint,
        },
        { status: response.status }
      );
    }

    return NextResponse.json(JSON.parse(responseText));
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "Server error: " + error.message },
      { status: 500 }
    );
  }
}