"use client";

import { FormEvent, useState } from "react";

import { IconCircle64, SvgPaw } from "@/components/PastelIcons";

const petMultipliers = {
  dog: 1.2,
  cat: 1,
  other: 1.5
} as const;

type PetType = keyof typeof petMultipliers;

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

    try {
      const response = await fetch(leadUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          origin,
          destination,
          pet_type: petType,
          weight
        })
      });

      if (!response.ok) {
        throw new Error(`Lead submit failed with status ${response.status}`);
      }

      setIsSubmitted(true);
      setEmailMessage("We'll contact you shortly");
    } catch (error) {
      console.error("lead_submit_failed", error);
      setEmailMessage("Something went wrong. Please try again shortly.");
    } finally {
      setEmailLoading(false);
    }
  };

  return (
    <div id="quote-form" className="w-full">
      <div className="relative rounded-3xl bg-white p-6 shadow-xl md:p-8">
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
              className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 rounded-2xl bg-white/93 px-4 backdrop-blur-sm"
              role="status"
              aria-live="polite"
            >
              <img
                src="/images/estimate-van.gif"
                alt=""
                width={128}
                height={80}
                className="h-20 w-auto max-w-full object-contain md:h-24"
              />
              <p className="text-center text-sm text-gray-600">
                Calculating travel plan for your pet…
              </p>
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
