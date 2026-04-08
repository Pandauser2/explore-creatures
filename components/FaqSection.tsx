"use client";

import { useMemo, useState } from "react";

type FaqItem = {
  category: "Travel & Regulations" | "Safety & Comfort" | "Crates & Preparation" | "Pricing & Process";
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    category: "Travel & Regulations",
    question: "What documents are usually required for international pet travel?",
    answer:
      "Most routes require vaccination records, microchip details, health certificates, and country-specific import permits."
  },
  {
    category: "Travel & Regulations",
    question: "Do breed restrictions vary by country and airline?",
    answer:
      "Yes. Many airlines and destinations have specific restrictions for snub-nosed or high-risk breeds, so route planning depends on breed details."
  },
  {
    category: "Travel & Regulations",
    question: "How early should I start planning my pet's journey?",
    answer:
      "For international moves, we recommend starting 4-8 weeks in advance so approvals, vaccinations, and bookings can be handled smoothly."
  },
  {
    category: "Safety & Comfort",
    question: "Is sedation recommended during travel?",
    answer:
      "In most cases, sedation is not advised unless prescribed by a vet for a specific need, as it can affect breathing and balance during transit."
  },
  {
    category: "Safety & Comfort",
    question: "How do you keep pets safe in transit?",
    answer:
      "We align each booking with airline rules, climate windows, and crate standards to reduce stress and keep every travel step compliant."
  },
  {
    category: "Safety & Comfort",
    question: "Can anxious pets still travel safely?",
    answer:
      "Yes. We help with acclimatization steps, crate familiarization, and travel timing so nervous pets are better prepared before departure."
  },
  {
    category: "Crates & Preparation",
    question: "How do I know the right crate size?",
    answer:
      "Your pet should be able to stand, turn, and lie down comfortably. We guide sizing based on airline and IATA standards."
  },
  {
    category: "Crates & Preparation",
    question: "Do you provide crate and pre-travel checklist support?",
    answer:
      "Yes. We share a preparation checklist including crate setup, feeding windows, hydration, and airport timing recommendations."
  },
  {
    category: "Crates & Preparation",
    question: "What if my pet's crate is not airline compliant?",
    answer:
      "We review the crate specs in advance and recommend corrections so there are no surprises at check-in."
  },
  {
    category: "Pricing & Process",
    question: "What factors affect final pricing?",
    answer:
      "Route, season, airline availability, crate requirements, and destination paperwork all influence final costs."
  },
  {
    category: "Pricing & Process",
    question: "How fast do I get a detailed quote after sharing details?",
    answer:
      "Most detailed quotes are shared quickly once we review your pet profile, route, and preferred travel date."
  },
  {
    category: "Pricing & Process",
    question: "What happens after I approve the quote?",
    answer:
      "We confirm the route plan, start document support, and guide you step-by-step through airline and departure readiness."
  }
];

export function FaqSection() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(() => new Set([0, 1, 2]));

  const groupedFaqs = useMemo(() => {
    const groups = new Map<FaqItem["category"], Array<{ item: FaqItem; index: number }>>();
    faqs.forEach((item, index) => {
      const existing = groups.get(item.category) ?? [];
      existing.push({ item, index });
      groups.set(item.category, existing);
    });
    return Array.from(groups.entries());
  }, []);

  const toggleOpen = (idx: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          FAQ
        </h2>
        <p className="mt-3 text-gray-600">
          Everything you need to know before booking your pet&apos;s journey
        </p>
        <div className="mt-5">
          {groupedFaqs.map(([category, items]) => (
            <div key={category} className="mb-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">{category}</p>
              {items.map(({ item, index }) => {
                const isOpen = openIndexes.has(index);
                return (
                  <div
                    key={item.question}
                    className="mb-4 overflow-hidden rounded-xl border border-gray-100 bg-white"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-xl bg-white px-5 py-4 text-left shadow-sm transition hover:shadow-md"
                      onClick={() => toggleOpen(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="break-words pr-4 font-medium text-gray-900">{item.question}</span>
                      <span className="ml-2 flex-shrink-0 text-slate-500">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen ? (
                      <div className="break-words px-5 pb-4 leading-relaxed text-gray-600">{item.answer}</div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ))}
          <a
            href="https://wa.me/917003930780"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5a]"
          >
            Still have questions? Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
