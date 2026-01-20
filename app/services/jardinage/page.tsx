import type { Metadata } from "next";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import { services } from "@/components/data";

const service = services.find((item) => item.slug === "jardinage");

export const metadata: Metadata = {
  title: "Jardinage tonte, taille, désherbage | LES PORTES D'AZUR",
  description:
    "Jardinage : tonte, taille, désherbage. Matériel fourni, intervention ponctuelle ou régulière."
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Jardinage",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "LES PORTES D'AZUR"
  },
  areaServed: "Autour de votre secteur",
  serviceType: "Jardinage tonte taille désherbage"
};

export default function JardinagePage() {
  if (!service) {
    return null;
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <h1 className="text-4xl font-semibold text-night">{service.heroTitle}</h1>
            <p className="mt-4 text-lg text-slate-600">{service.heroSubtitle}</p>
            <div className="mt-6">
              <CTAButtons service={service.name} />
            </div>
            <p className="mt-4 text-sm text-slate-500">Matériel fourni • Travail propre • Résultat visible</p>
          </div>
          <div className="card p-6">
            <p className="text-sm font-semibold text-night">Ce qui est inclus</p>
            <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-slate-600">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-3">
          <div className="card p-6">
            <p className="text-sm font-semibold text-night">Résultats typiques</p>
            <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-slate-600">
              {service.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <p className="text-sm font-semibold text-night">Options possibles</p>
            <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-slate-600">
              {service.options.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <p className="text-sm font-semibold text-night">Conseil pro</p>
            <p className="mt-3 text-sm text-slate-600">{service.tip}</p>
          </div>
        </div>
        <div className="container mt-8">
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-night">Nettoyage en profondeur</h2>
            <p className="mt-3 text-sm text-slate-600">
              Désherbage, résidus végétaux, salissures incrustées ou feuilles sont retirés proprement.
              Nous respectons vos plantes et la biodiversité locale.
            </p>
            <Link href="/devis" className="btn btn-primary mt-4">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
