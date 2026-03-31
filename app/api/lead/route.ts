export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_PET_TYPES = ["dog", "cat", "other"] as const;

export async function OPTIONS() {
  return new Response(null, { status: 204 });
}

function leadWebhookUrl(): string | undefined {
  return (
    process.env.APPS_SCRIPT_LEAD_URL?.trim() ||
    process.env.NEXT_PUBLIC_APPS_SCRIPT_LEAD_URL?.trim() ||
    undefined
  );
}

export async function POST(request: Request) {
  const WEB_APP_URL = leadWebhookUrl();
  if (!WEB_APP_URL) {
    return Response.json(
      { ok: false, error: "LEAD_WEBHOOK_NOT_CONFIGURED" },
      { status: 503 }
    );
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const email = body.email;
    const origin = body.origin;
    const destination = body.destination;
    const pet_type = body.pet_type;
    const rawWeight = body.weight;
    const weight =
      typeof rawWeight === "number"
        ? rawWeight
        : typeof rawWeight === "string"
          ? Number.parseFloat(rawWeight)
          : NaN;

    if (
      typeof email !== "string" ||
      !email.includes("@") ||
      typeof origin !== "string" ||
      !origin.trim() ||
      typeof destination !== "string" ||
      !destination.trim() ||
      typeof pet_type !== "string" ||
      !ALLOWED_PET_TYPES.includes(pet_type as (typeof ALLOWED_PET_TYPES)[number]) ||
      !Number.isFinite(weight)
    ) {
      return Response.json({ ok: false, error: "Invalid input" }, { status: 400 });
    }

    const payload = {
      email: email.trim(),
      origin: origin.trim(),
      destination: destination.trim(),
      pet_type,
      weight
    };

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
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("lead_proxy_failed", error);
    return Response.json(
      { ok: false, error: "Lead submission failed" },
      { status: 500 }
    );
  }
}
