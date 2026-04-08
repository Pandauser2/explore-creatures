export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_PET_TYPES = ["dog", "cat", "other"] as const;

export async function OPTIONS() {
  return new Response(null, { status: 204 });
}

/** Prefer runtime lookup via keys so Vercel/runtime env is not dropped at build. */
const LEAD_URL_ENV_KEYS = [
  "LEAD_WEB_APP_URL",
  "APPS_SCRIPT_LEAD_URL",
  "NEXT_PUBLIC_LEAD_WEB_APP_URL",
  "NEXT_PUBLIC_APPS_SCRIPT_LEAD_URL"
] as const;

function leadWebhookUrl(): string | undefined {
  for (const key of LEAD_URL_ENV_KEYS) {
    const v = process.env[key];
    if (typeof v === "string") {
      const t = v.trim();
      if (t) return t;
    }
  }
  return undefined;
}

/** GET — whether any lead URL env is set (does not expose the URL). */
export async function GET() {
  return Response.json({ leadWebhookConfigured: Boolean(leadWebhookUrl()) });
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
    const name = body.name;
    const phone = body.phone;
    const email = body.email;
    const origin = body.origin;
    const destination = body.destination;
    const pet_type = body.pet_type;
    const breed = body.breed;
    const pet_age = body.pet_age;
    const journey_date = body.journey_date;
    const rawWeight = body.weight;
    const weight =
      typeof rawWeight === "number"
        ? rawWeight
        : typeof rawWeight === "string"
          ? Number.parseFloat(rawWeight)
          : undefined;

    if (
      typeof email !== "string" ||
      !email.includes("@") ||
      typeof name !== "string" ||
      !name.trim() ||
      typeof phone !== "string" ||
      !phone.trim() ||
      typeof origin !== "string" ||
      !origin.trim() ||
      typeof destination !== "string" ||
      !destination.trim() ||
      typeof breed !== "string" ||
      !breed.trim() ||
      typeof journey_date !== "string" ||
      !journey_date.trim() ||
      typeof pet_type !== "string" ||
      !ALLOWED_PET_TYPES.includes(pet_type as (typeof ALLOWED_PET_TYPES)[number]) ||
      (weight !== undefined && !Number.isFinite(weight))
    ) {
      return Response.json({ ok: false, error: "Invalid input" }, { status: 400 });
    }

    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      origin: origin.trim(),
      destination: destination.trim(),
      pet_type,
      breed: breed.trim(),
      pet_age: typeof pet_age === "string" ? pet_age.trim() : "",
      journey_date: journey_date.trim(),
      ...(weight !== undefined ? { weight } : {})
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
