import type { Metadata } from "next";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Entretenir sa voiture | LES PORTES D'AZUR",
  description:
    "Conseils pour entretenir l'intérieur et l'extérieur de votre voiture."
};

export default function BlogVoiturePage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-4xl font-semibold text-night">Entretenir sa voiture</h1>
        <p className="mt-4 text-lg text-slate-600">
          Gardez un véhicule propre et confortable au quotidien.
        </p>
        <div className="mt-6 space-y-6 text-sm text-slate-600">
          <p>
            Aspirez régulièrement l&apos;habitacle pour limiter les poussières et préserver les tissus.
          </p>
          <p>
            Nettoyez les surfaces plastiques avec un chiffon doux et un produit adapté pour éviter les
            traces.
          </p>
          <p>
            Un lavage extérieur régulier protège la carrosserie et améliore la visibilité.
          </p>
        </div>
        <div className="mt-8 card p-6">
          <h2 className="text-lg font-semibold text-night">Besoin d&apos;un nettoyage complet ?</h2>
          <p className="mt-3 text-sm text-slate-600">Nous intervenons autour de votre secteur.</p>
          <CTAButtons primaryLabel="Appeler" secondaryLabel="Demander un devis" />
        </div>
      </div>
    </section>
  );
}
