import type { Metadata } from "next";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Réalisations avant/après | LES PORTES D'AZUR",
  description:
    "Découvrez nos réalisations avant/après en nettoyage voiture, terrasse, canapé et jardinage."
};

export default function RealisationsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-4xl font-semibold text-night">Réalisations avant / après</h1>
        <p className="mt-4 text-lg text-slate-600">
          Exemples visuels (placeholders). Les résultats varient selon l&apos;état initial et la surface.
        </p>
        <div className="mt-8">
          <BeforeAfterGrid />
        </div>
        <div className="mt-10 card p-6">
          <h2 className="text-xl font-semibold text-night">Nos engagements</h2>
          <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-slate-600">
            <li>Ponctualité et respect des horaires.</li>
            <li>Respect des lieux et nettoyage propre.</li>
            <li>Sécurité et produits adaptés aux surfaces.</li>
            <li>Résultats visibles et conseils d&apos;entretien.</li>
          </ul>
        </div>
        <div className="mt-8">
          <CTAButtons primaryLabel="Appeler" secondaryLabel="Demander un devis" />
        </div>
      </div>
    </section>
  );
}
