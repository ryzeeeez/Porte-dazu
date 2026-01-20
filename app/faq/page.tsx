import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/components/data";

export const metadata: Metadata = {
  title: "FAQ | LES PORTES D'AZUR",
  description:
    "Questions fréquentes sur nos services de nettoyage et jardinage. Devis gratuit et réponse rapide."
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export default function FAQPage() {
  return (
    <section className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container">
        <h1 className="text-4xl font-semibold text-night">Questions fréquentes</h1>
        <p className="mt-4 text-lg text-slate-600">
          Retrouvez ici les réponses aux questions les plus fréquentes sur nos prestations.
        </p>
        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
