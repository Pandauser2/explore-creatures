"use client";

import { FormEvent, useState } from "react";

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

  const handleQuoteSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("quote_submitted");

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

    try {
      const response = await fetch("/api/lead", {
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

      setEmailMessage("We'll contact you shortly");
    } catch (error) {
      console.error("lead_submit_failed", error);
      setEmailMessage("Something went wrong. Please try again shortly.");
    } finally {
      setEmailLoading(false);
    }
  };

  return (
    <div
      id="quote-form"
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <h2 className="mb-4 text-lg font-semibold text-slate-900">Quick Pet Travel Estimate</h2>
      <form onSubmit={handleQuoteSubmit} className="space-y-3">
        <input
          required
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          placeholder="Origin country"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
        <input
          required
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Destination country"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
        <select
          value={petType}
          onChange={(e) => setPetType(e.target.value as PetType)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="other">Other</option>
        </select>
        <input
          required
          min={0}
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          placeholder="Weight (kg)"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-70"
        >
          {loading ? "Calculating..." : "Calculate estimate"}
        </button>
      </form>

      {priceRange && !loading ? (
        <div className="mt-4 rounded-lg bg-slate-100 p-4">
          <p className="text-sm text-slate-700">Estimated range</p>
          <p className="text-2xl font-bold text-slate-900">
            ${priceRange.min} - ${priceRange.max}
          </p>
          <p className="mt-2 text-xs text-slate-600">
            Final pricing depends on route, airline rules, crate type, and paperwork.
          </p>
          <form onSubmit={handleEmailSubmit} className="mt-3 flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
            <button
              type="submit"
              disabled={emailLoading}
              className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-300"
            >
              {emailLoading ? "Sending..." : "Get exact quote"}
            </button>
          </form>
          {emailMessage ? <p className="mt-2 text-xs text-slate-700">{emailMessage}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
