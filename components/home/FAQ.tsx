"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = [
    { question: t("faq.1.q"), answer: t("faq.1.a") },
    { question: t("faq.2.q"), answer: t("faq.2.a") },
    { question: t("faq.3.q"), answer: t("faq.3.a") },
    { question: t("faq.4.q"), answer: t("faq.4.a") },
    { question: t("faq.5.q"), answer: t("faq.5.a") },
    { question: t("faq.6.q"), answer: t("faq.6.a") },
    { question: t("faq.7.q"), answer: t("faq.7.a") },
    { question: t("faq.8.q"), answer: t("faq.8.a") },
    { question: t("faq.9.q"), answer: t("faq.9.a") },
    { question: t("faq.10.q"), answer: t("faq.10.a") },
  ];

  return (
    <section className="pt-16 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <img 
              src="/D69772A5-9DCA-4D89-8EA3-9009CB69634A_1_105_c.jpeg" 
              alt="Taskey Logo" 
              className="h-16 w-auto mx-auto"
            />
          </div>
          <h2 data-scrollline-faq className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-xl text-gray-500">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-500">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
