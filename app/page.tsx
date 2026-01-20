import type { Metadata } from "next";
import CTAButtons from "@/components/CTAButtons";
import ServiceCard from "@/components/ServiceCard";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import FAQAccordion from "@/components/FAQAccordion";
import TestimonialCard from "@/components/TestimonialCard";
import EstimationWidget from "@/components/EstimationWidget";
import { faqs, phoneNumber, quickFaqs, services, testimonials } from "@/components/data";

export const metadata: Metadata = {
  title: "Nettoyage & jardinage autour de vous | LES PORTES D'AZUR",
  description:
    "Entreprise de nettoyage et jardinage. Devis gratuit, matériel fourni, équipe ponctuelle. Nettoyage voiture, terrasse, canapé, jardinage."
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "LES PORTES D'AZUR",
  description: "Nettoyage et jardinage pour particuliers et petits pros.",
  telephone: "+33 6 75 42 49 08",
  areaServed: "Autour de votre secteur",
  url: "https://lesportesdazur.fr",
  serviceType: ["Nettoyage", "Jardinage"]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: quickFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="section bg-white">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="badge">Étudiants disponibles • matériel fourni</span>
            <h1 className="mt-4 text-4xl font-semibold text-night md:text-5xl">
              Nettoyage & jardinage qui rassure, résultats visibles dès la première visite.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              LES PORTES D&apos;AZUR intervient chez vous avec sérieux, ponctualité et respect des lieux.
              Devis gratuit et réponse rapide par téléphone ou SMS.
            </p>
            <div className="mt-6">
              <CTAButtons />
            </div>
            <div className="mt-4">
              <a href="/realisations" className="btn btn-secondary" onClick={() => console.log("CTA: Realisations hero")}>
                Voir nos réalisations
              </a>
              <a
                href="#estimation"
                className="btn btn-ghost ml-3"
                onClick={() => console.log("CTA: Estimer mon besoin")}
              >
                Estimer mon besoin
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge">Devis gratuit</span>
              <span className="badge">Matériel fourni</span>
              <span className="badge">Ponctuels</span>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Appel direct : {phoneNumber}
            </p>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-night">Besoin d&apos;un devis rapide ?</h2>
            <p className="mt-3 text-sm text-slate-600">
              Indiquez votre service, nous vous rappelons rapidement avec une proposition claire.
            </p>
            <form className="mt-6 grid gap-4">
              <div>
                <label htmlFor="service-hero">Service souhaité</label>
                <select id="service-hero" name="service">
                  {services.map((service) => (
                    <option key={service.slug}>{service.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="city-hero">Ville / secteur</label>
                <input id="city-hero" name="city" placeholder="Votre ville" />
              </div>
              <div>
                <label htmlFor="contact-hero">Téléphone ou email</label>
                <input id="contact-hero" name="contact" placeholder="06 00 00 00 00" />
              </div>
              <button type="button" className="btn btn-primary" onClick={() => console.log("CTA: Devis hero")}
              >
                Demander un devis
              </button>
              <p className="text-xs text-slate-500">
                Réponse rapide • Devis gratuit • Respect des lieux
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Services en un coup d&apos;œil</h2>
          <p className="section-subtitle">Nettoyage en profondeur : poussières, taches, mousse, salissures incrustées, résidus, fientes d&apos;oiseaux ou salissures d&apos;animaux.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.name}
                description={service.short}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white" id="estimation">
        <div className="container">
          <h2 className="section-title">Pourquoi nous choisir ?</h2>
          <p className="section-subtitle">Un service fiable, professionnel et chaleureux.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              "Ponctualité et respect des horaires",
              "Matériel fourni et adapté",
              "Résultats visibles et durables",
              "Respect total des lieux",
              "Équipe flexible, réponse rapide"
            ].map((reason) => (
              <div key={reason} className="card p-5 text-sm text-slate-600">
                <p className="font-semibold text-night">✓</p>
                <p className="mt-3">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="card p-8">
            <h2 className="text-2xl font-semibold text-night">Qui sommes-nous ?</h2>
            <p className="mt-4 text-sm text-slate-600">
              Bonjour, nous sommes deux auto-entrepreneurs et avons fondé Les Portes d&apos;Azur, une
              entreprise locale de nettoyage. Nous intervenons chez les particuliers avec sérieux,
              ponctualité et un travail soigné, pour redonner propreté et éclat à vos espaces. Notre
              promesse : des résultats visibles, dans le respect total des lieux. Matériel fourni et
              équipe flexible.
            </p>
            <div className="mt-6">
              <CTAButtons primaryLabel="Appeler" secondaryLabel="Demander un devis" />
            </div>
          </div>
          <div className="card p-8">
            <h3 className="text-lg font-semibold text-night">Petits pros & syndics</h3>
            <p className="mt-3 text-sm text-slate-600">
              Nous accompagnons également les petits professionnels, syndics et commerces de proximité
              pour des interventions ponctuelles ou régulières.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-slate-600">
              <li>Interventions tôt le matin ou en fin de journée.</li>
              <li>Devis détaillé et planification claire.</li>
              <li>Suivi simple par SMS ou téléphone.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Avant / Après</h2>
          <p className="section-subtitle">Quelques exemples de résultats (placeholders).</p>
          <div className="mt-8">
            <BeforeAfterGrid />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Comment ça marche</h2>
          <p className="section-subtitle">Simple, rapide, efficace.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "1. Contact rapide",
                text: "Appel, SMS ou formulaire. Nous confirmons votre besoin et votre secteur."
              },
              {
                title: "2. Intervention soignée",
                text: "Nous arrivons équipés, respectons vos espaces et travaillons proprement."
              },
              {
                title: "3. Résultat visible",
                text: "Vous validez le résultat et recevez des conseils pour entretenir."
              }
            ].map((step) => (
              <div key={step.title} className="card p-6">
                <h3 className="text-lg font-semibold text-night">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Tarifs indicatifs</h2>
          <p className="section-subtitle">Toujours “à partir de”. Le prix final dépend de la surface, de l&apos;état et des options.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: "Nettoyage voiture", price: "à partir de 40 €" },
              { title: "Nettoyage terrasse", price: "à partir de 80 €" },
              { title: "Nettoyage canapé", price: "à partir de 70 €" }
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <p className="text-sm text-slate-500">{item.title}</p>
                <p className="mt-2 text-2xl font-semibold text-night">{item.price}</p>
                <p className="mt-2 text-xs text-slate-500">Estimation indicative, devis gratuit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="section-title">FAQ rapide</h2>
              <p className="section-subtitle">Les réponses aux questions les plus courantes.</p>
              <div className="mt-6">
                <FAQAccordion items={quickFaqs} />
              </div>
            </div>
            <EstimationWidget />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Avis clients</h2>
          <p className="section-subtitle">Avis (exemples) pour projection.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-night">Nos engagements</h2>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-slate-600">
              <li>Ponctualité et respect des lieux.</li>
              <li>Matériel fourni, produits adaptés.</li>
              <li>Interventions sécurisées et propres.</li>
              <li>Résultats visibles et conseils d&apos;entretien.</li>
            </ul>
          </div>
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-night">Ce que nous ne faisons pas</h2>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-slate-600">
              <li>Pas de produits dangereux sur demande.</li>
              <li>Pas d&apos;intervention en zone risquée sans accès sécurisé.</li>
              <li>Pas d&apos;engagement sans validation claire du besoin.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-night text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-semibold">Prêt à retrouver un espace propre et net ?</h2>
          <p className="mt-3 text-lg text-ice">
            Appelez-nous au {phoneNumber} ou envoyez un SMS pour un devis gratuit.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CTAButtons primaryLabel="Appeler" secondaryLabel="Demander un devis" />
          </div>
          <p className="mt-4 text-xs text-ice/80">Réponse rapide • Matériel fourni • Équipe flexible</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Questions fréquentes</h2>
          <div className="mt-6">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
