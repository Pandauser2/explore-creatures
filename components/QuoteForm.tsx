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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [petType, setPetType] = useState<PetType>("dog");
  const [breed, setBreed] = useState("");
  const [petAge, setPetAge] = useState("");
  const [weight, setWeight] = useState("");
  const [loading, setLoading] = useState(false);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number } | null>(
    null
  );
  const [email, setEmail] = useState("");
  const [openSections, setOpenSections] = useState<Set<string>>(() => new Set());

  const toggleSection = (section: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(section)) next.delete(section);
      else next.add(section);
      return next;
    });
  };

  const handleQuoteSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const base = 200 + (origin.trim() !== destination.trim() ? 300 : 0);
    const parsedWeight = Number.parseFloat(weight);
    const safeWeight = Number.isFinite(parsedWeight) ? Math.max(0, parsedWeight) : 0;
    const weightMultiplier = safeWeight * 2;
    const price = (base + weightMultiplier) * petMultipliers[petType];
    const min = Math.round(price * 0.8);
    const max = Math.round(price * 1.2);

    setPriceRange({ min, max });
    setLoading(false);
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
              <div className="overflow-hidden rounded-xl border border-gray-100">
                <button
                  type="button"
                  onClick={() => toggleSection("pet")}
                  className="flex w-full items-center justify-between px-4 py-3 text-left"
                  aria-expanded={openSections.has("pet")}
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">Pet Details</span>
                  <span className="text-gray-500">{openSections.has("pet") ? "−" : "+"}</span>
                </button>
                {openSections.has("pet") ? (
                  <div className="space-y-3 px-4 pb-4">
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
                    <label className="block text-sm font-medium text-gray-700">Breed</label>
                    <input
                      required
                      type="text"
                      value={breed}
                      onChange={(e) => setBreed(e.target.value)}
                      placeholder="e.g., Labrador, Persian Cat"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                    <p className="text-xs text-gray-500">
                      Some airlines restrict specific breeds — this helps us give an accurate quote.
                    </p>
                    <label className="block text-sm font-medium text-gray-700">Pet Age</label>
                    <input
                      type="text"
                      value={petAge}
                      onChange={(e) => setPetAge(e.target.value)}
                      placeholder="e.g., 3 years"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                    <label className="block text-sm font-medium text-gray-700">Pet weight (kg) (optional)</label>
                    <input
                      min={0}
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                ) : null}
              </div>

              <div className="overflow-hidden rounded-xl border border-gray-100">
                <button
                  type="button"
                  onClick={() => toggleSection("travel")}
                  className="flex w-full items-center justify-between px-4 py-3 text-left"
                  aria-expanded={openSections.has("travel")}
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">Travel Details</span>
                  <span className="text-gray-500">{openSections.has("travel") ? "−" : "+"}</span>
                </button>
                {openSections.has("travel") ? (
                  <div className="space-y-3 px-4 pb-4">
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
                    <label className="block text-sm font-medium text-gray-700">Date of Journey</label>
                    <input
                      required
                      type="date"
                      value={journeyDate}
                      onChange={(e) => setJourneyDate(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                    <p className="text-xs text-gray-500">Prices vary based on availability and season</p>
                  </div>
                ) : null}
              </div>

              <div className="overflow-hidden rounded-xl border border-gray-100">
                <button
                  type="button"
                  onClick={() => toggleSection("contact")}
                  className="flex w-full items-center justify-between px-4 py-3 text-left"
                  aria-expanded={openSections.has("contact")}
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">Contact Details</span>
                  <span className="text-gray-500">{openSections.has("contact") ? "−" : "+"}</span>
                </button>
                {openSections.has("contact") ? (
                  <div className="space-y-3 px-4 pb-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                    <label className="block text-sm font-medium text-gray-700">Phone (WhatsApp preferred)</label>
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                ) : null}
              </div>

              <div className="overflow-hidden rounded-xl border border-gray-100">
                <div className="px-4 py-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">Review & Submit</span>
                </div>
                <div className="px-4 pb-4">
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
              </div>
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
            <div className="mt-4 rounded-2xl bg-green-50 p-4 text-center">
              <p className="font-medium text-green-800">
                Thanks for your inquiry. Someone from the team will reach out to you soon.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
