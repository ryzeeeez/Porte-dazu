import type { Metadata } from "next";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/components/data";

export const metadata: Metadata = {
  title: "Nos services de nettoyage & jardinage | LES PORTES D'AZUR",
  description:
    "Nettoyage voiture, terrasse, canapé & tissus, jardinage. Matériel fourni, devis gratuit, équipe ponctuelle."
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Services de nettoyage et jardinage",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "LES PORTES D'AZUR"
  },
  areaServed: "Autour de votre secteur",
  serviceType: services.map((service) => service.name)
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <h1 className="text-4xl font-semibold text-night">Nos services</h1>
            <p className="mt-4 text-lg text-slate-600">
              Nettoyage en profondeur, matériel fourni, résultat visible. Choisissez votre service et
              demandez un devis gratuit. Nous disposons de tout le matériel nécessaire.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
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
          <aside className="lg:sticky lg:top-24">
            <div className="card p-6">
              <p className="text-sm font-semibold text-night">Besoin d&apos;un conseil ?</p>
              <p className="mt-2 text-sm text-slate-600">
                Appelez-nous pour choisir le service le plus adapté.
              </p>
              <div className="mt-4">
                <CTAButtons primaryLabel="Appeler" secondaryLabel="Demander un devis" />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Détails par service</h2>
          <div className="mt-8 space-y-10">
            {services.map((service) => (
              <div key={service.slug} id={service.slug} className="card p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-night">{service.name}</h3>
                    <p className="mt-2 text-sm text-slate-600">{service.short}</p>
                  </div>
                  <Link href={`/services/${service.slug}`} className="btn btn-secondary">
                    Voir le détail
                  </Link>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div>
                    <p className="text-sm font-semibold text-night">Inclus</p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-600">
                      {service.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-night">Résultats typiques</p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-600">
                      {service.results.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-night">Options</p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-600">
                      {service.options.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 rounded-xl bg-ice p-4 text-sm text-night">
                  <strong>Conseil pro :</strong> {service.tip}
                </div>
                <div className="mt-4">
                  <Link href="/devis" className="btn btn-primary" onClick={() => console.log("CTA: Devis service")}
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Quel service pour mon besoin ?</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Taches, odeurs, tissus",
                text: "Choisissez le nettoyage canapé & tissus pour rafraîchir et détacher."
              },
              {
                title: "Extérieurs ternes",
                text: "Le nettoyage terrasse redonne de l'éclat aux dalles et murs."
              },
              {
                title: "Entretien régulier",
                text: "Le jardinage assure un extérieur propre et bien entretenu toute l'année."
              }
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <p className="text-lg font-semibold text-night">{item.title}</p>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
