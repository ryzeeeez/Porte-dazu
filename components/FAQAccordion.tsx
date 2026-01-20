"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQ[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="card overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-night"
            >
              <span>{item.question}</span>
              <span className="text-azure">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div className="border-t border-ice px-5 py-4 text-sm text-slate-600">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
