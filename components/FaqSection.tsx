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
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          FAQ
        </h2>
        <div className="mt-5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question} className="mb-4 overflow-hidden rounded-xl border border-gray-100 bg-white">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl bg-white px-5 py-4 text-left shadow-sm transition hover:shadow-md"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="break-words pr-4 font-medium text-gray-900">{faq.question}</span>
                  <span className="ml-2 flex-shrink-0 text-slate-500">{isOpen ? "−" : "+"}</span>
                </button>
                {openIndex === idx ? (
                  <div className="break-words px-5 pb-4 leading-relaxed text-gray-600">{faq.answer}</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
