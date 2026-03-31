"use client";

import { FormEvent, useState } from "react";

import { IconCircle64, SvgPaw } from "@/components/PastelIcons";

const petMultipliers = {
  dog: 1.2,
  cat: 1,
  other: 1.5
} as const;

type PetType = keyof typeof petMultipliers;

function leadFailureMessage(status: number, serverError?: string): string {
  if (status === 400 || serverError === "Invalid input") {
    return "Please check your route details and pet weight, then try again.";
  }
  if (serverError === "LEAD_WEBHOOK_NOT_CONFIGURED") {
    return "The server doesn't have your Apps Script /exec URL. Set LEAD_WEB_APP_URL, APPS_SCRIPT_LEAD_URL, or NEXT_PUBLIC_APPS_SCRIPT_LEAD_URL in the host (Vercel: Production + redeploy). See .env.example.";
  }
  if (
    status === 502 ||
    (serverError?.includes("Upstream") ?? false) ||
    serverError === "Apps Script rejected the payload"
  ) {
    return "We couldn't save your request just now. Please try again in a few minutes.";
  }
  if (status >= 500) {
    return "Quote signup is temporarily unavailable. Please try again later or contact us directly.";
  }
  return "Something went wrong. Please try again shortly.";
}

export function QuoteForm() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [petType, setPetType] = useState<PetType>("dog");
  const [weight, setWeight] = useState(10);
  const [loading, setLoading] = useState(false);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number } | null>(
    null
  );
  const [email, setEmail] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleQuoteSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const base = 200 + (origin.trim() !== destination.trim() ? 300 : 0);
    const weightMultiplier = Math.max(0, weight) * 2;
    const price = (base + weightMultiplier) * petMultipliers[petType];
    const min = Math.round(price * 0.8);
    const max = Math.round(price * 1.2);

    setPriceRange({ min, max });
    setLoading(false);
  };

  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setEmailMessage("");
    setEmailLoading(true);

    const leadUrl =
      typeof window !== "undefined"
        ? new URL("/api/lead", window.location.origin).toString()
        : "/api/lead";

    const directUrl =
      process.env.NEXT_PUBLIC_APPS_SCRIPT_LEAD_URL?.trim() ||
      process.env.NEXT_PUBLIC_LEAD_WEB_APP_URL?.trim();

    const postLead = async (url: string) => {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          origin,
          destination,
          pet_type: petType,
          weight
        }),
        credentials: "omit"
      });
      const raw = await response.text();
      let data: { ok?: boolean; error?: string } = {};
      if (raw) {
        try {
          data = JSON.parse(raw) as { ok?: boolean; error?: string };
        } catch {
          /* Apps Script often returns plain text, not JSON */
        }
      }
      return { response, data, raw };
    };

    const shouldTryDirectAfterProxy = (
      status: number,
      alreadySucceeded: boolean
    ) => {
      if (!directUrl || alreadySucceeded) return false;
      if (status === 400) return false;
      return status === 404 || status === 500 || status === 502 || status === 503;
    };

    const isLeadSuccess = (proxyOk: boolean, data: { ok?: boolean }, raw: string) => {
      if (!proxyOk) return false;
      if (data.ok === false) return false;
      if (data.ok === true) return true;
      /* Direct Apps Script: 200 + non-JSON body */
      return raw.length === 0 || !raw.trim().startsWith("Exception");
    };

    try {
      let { response, data, raw } = await postLead(leadUrl);

      if (shouldTryDirectAfterProxy(response.status, isLeadSuccess(response.ok, data, raw))) {
        ({ response, data, raw } = await postLead(directUrl!));
      }

      if (!isLeadSuccess(response.ok, data, raw)) {
        console.error("lead_submit_failed", response.status, data.error, raw.slice(0, 200));
        setEmailMessage(leadFailureMessage(response.status, data.error));
        return;
      }

      setIsSubmitted(true);
      setEmailMessage("We'll contact you shortly");
    } catch (error) {
      if (directUrl) {
        try {
          const { response, data, raw } = await postLead(directUrl);
          if (isLeadSuccess(response.ok, data, raw)) {
            setIsSubmitted(true);
            setEmailMessage("We'll contact you shortly");
            return;
          }
        } catch {
          /* fall through */
        }
      }
      console.error("lead_submit_failed", error);
      setEmailMessage("Something went wrong. Please try again shortly.");
    } finally {
      setEmailLoading(false);
    }
  };

  return (
    <div id="quote-form" className="w-full">
      <div className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-xl">
        <h3 className="mb-4 flex flex-wrap items-center gap-3 text-xl font-extrabold tracking-tight">
          <IconCircle64 tone="mint">
            <SvgPaw />
          </IconCircle64>
          Get your pet travel estimate
        </h3>
        <div className="relative min-h-[340px]">
          <form
            onSubmit={handleQuoteSubmit}
            className={loading ? "pointer-events-none opacity-[0.35]" : ""}
            aria-busy={loading}
          >
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Where is your pet traveling from?
              </label>
              <input
                required
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <label className="block text-sm font-medium text-gray-700">Where is your pet going?</label>
              <input
                required
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <label className="block text-sm font-medium text-gray-700">What type of pet?</label>
              <select
                value={petType}
                onChange={(e) => setPetType(e.target.value as PetType)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              >
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="other">Other</option>
              </select>
              <label className="block text-sm font-medium text-gray-700">Pet weight (kg)</label>
              <input
                required
                min={0}
                type="number"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full text-lg disabled:opacity-70"
              >
                {loading ? "Working…" : "Calculate estimate"}
              </button>
              {!loading ? (
                <p className="mt-2 text-center text-sm text-gray-500">
                  Takes less than 30 seconds • No commitment
                </p>
              ) : null}
            </div>
          </form>

          {loading ? (
            <div
              className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-white/93 px-4 backdrop-blur-sm"
              role="status"
              aria-live="polite"
            >
              <div className="flex flex-col items-center justify-center py-6">
                <img
                  src="/images/loading-pet.gif"
                  alt="Preparing your pet travel plan"
                  className="mb-4 h-20 w-20 object-contain"
                />
                <p className="text-sm text-gray-600">
                  Preparing your pet&apos;s travel plan 🐾...
                </p>
              </div>
            </div>
          ) : null}
        </div>

        {priceRange && !loading ? (
          <div className="mt-4 rounded-2xl bg-gray-50 p-5">
            <p className="text-sm text-slate-700">Estimated price range</p>
            <p className="text-2xl font-bold text-slate-900">
              ${priceRange.min} - ${priceRange.max}
            </p>
            <p className="mt-2 text-xs text-slate-600">
              Final pricing depends on route, airline rules, crate type, and paperwork.
            </p>
            {!isSubmitted ? (
              <>
                <p className="mb-2 text-sm text-gray-600">Want an exact quote? Enter your email:</p>
                <form onSubmit={handleEmailSubmit} className="mt-3 flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                  <button
                    type="submit"
                    disabled={emailLoading}
                    className="btn-primary disabled:opacity-70"
                  >
                    {emailLoading ? "Sending..." : "Get exact quote"}
                  </button>
                </form>
                {emailMessage ? <p className="mt-2 text-xs text-slate-700">{emailMessage}</p> : null}
              </>
            ) : (
              <div className="mt-4 rounded-2xl bg-green-50 p-4 text-center">
                <p className="font-medium text-green-800">
                  You&apos;re all set! We&apos;ll reach out shortly.
                </p>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
