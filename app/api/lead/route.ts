const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbziZsYbOjZiy4LMoUeJkROYVzabHbLtqNCKjn8n1DGI4sCEn_5p_8dakISXhC9vcm1nOw/exec";

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

    if (!upstream.ok) {
      return Response.json(
        { ok: false, error: `Upstream failed with ${upstream.status}` },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("lead_proxy_failed", error);
    return Response.json({ ok: false, error: "Lead submission failed" }, { status: 500 });
  }
}
