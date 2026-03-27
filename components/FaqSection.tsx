"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How quickly can I get an exact quote?",
    answer: "After you submit your details, our team can usually respond within one business day."
  },
  {
    question: "Do you support international pet travel?",
    answer:
      "Yes. We help with route planning, airline constraints, and destination-specific requirements."
  },
  {
    question: "What documents are usually needed?",
    answer:
      "Common requirements include vaccination records, health certificates, and destination permits."
  },
  {
    question: "Can you help with crate guidance?",
    answer:
      "Yes. We help choose an appropriate crate size and type based on airline and safety standards."
  },
  {
    question: "Is this estimate final pricing?",
    answer:
      "No. The estimate is a quick range. Final pricing depends on your route, dates, and paperwork."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
      <div className="mt-5 space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={faq.question} className="rounded-xl border border-slate-200 bg-white">
              <button
                className="flex w-full items-center justify-between px-4 py-3 text-left font-medium text-slate-900"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                {faq.question}
                <span className="ml-4 text-slate-500">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen ? <p className="px-4 pb-4 text-sm text-slate-700">{faq.answer}</p> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
