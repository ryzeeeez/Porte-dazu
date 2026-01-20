import type { Metadata } from "next";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Entretenir sa terrasse | LES PORTES D'AZUR",
  description:
    "Conseils pour entretenir votre terrasse et éviter les mousses. Nettoyage professionnel sur demande."
};

export default function BlogTerrassePage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-4xl font-semibold text-night">Entretenir sa terrasse</h1>
        <p className="mt-4 text-lg text-slate-600">
          Des gestes simples pour garder vos dalles propres plus longtemps.
        </p>
        <div className="mt-6 space-y-6 text-sm text-slate-600">
          <p>
            Balayez régulièrement pour éviter l&apos;accumulation de feuilles et de poussières. Cela limite
            les mousses et les salissures incrustées.
          </p>
          <p>
            Utilisez de l&apos;eau tiède et un savon doux. Évitez les produits agressifs qui peuvent
            dégrader les joints.
          </p>
          <p>
            Faites un nettoyage en profondeur une à deux fois par an pour préserver la couleur des
            matériaux.
          </p>
        </div>
        <div className="mt-8 card p-6">
          <h2 className="text-lg font-semibold text-night">Besoin d&apos;un coup de main ?</h2>
          <p className="mt-3 text-sm text-slate-600">Nous intervenons autour de votre secteur.</p>
          <CTAButtons primaryLabel="Appeler" secondaryLabel="Demander un devis" />
        </div>
      </div>
    </section>
  );
}
