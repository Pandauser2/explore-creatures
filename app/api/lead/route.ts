export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbziZsYbOjZiy4LMoUeJkROYVzabHbLtqNCKjn8n1DGI4sCEn_5p_8dakISXhC9vcm1nOw/exec";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const upstream = await fetch(WEB_APP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
      redirect: "follow",
      cache: "no-store"
    });

    const upstreamText = await upstream.text();

    if (!upstream.ok) {
      console.error("lead_upstream_error", upstream.status, upstreamText.slice(0, 500));
      return Response.json(
        { ok: false, error: `Upstream failed with ${upstream.status}` },
        { status: 502, headers: corsHeaders }
      );
    }

    if (upstreamText.includes("SyntaxError") || upstreamText.includes("is not valid JSON")) {
      console.error("lead_upstream_script_error", upstreamText.slice(0, 500));
      return Response.json(
        { ok: false, error: "Apps Script rejected the payload" },
        { status: 502, headers: corsHeaders }
      );
    }

    return Response.json({ ok: true }, { headers: corsHeaders });
  } catch (error) {
    console.error("lead_proxy_failed", error);
    return Response.json(
      { ok: false, error: "Lead submission failed" },
      { status: 500, headers: corsHeaders }
    );
  }
}
