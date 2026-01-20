import type { Metadata } from "next";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Zone d'intervention | LES PORTES D'AZUR",
  description:
    "Nous intervenons autour de votre secteur. Dites-nous votre ville pour confirmer rapidement."
};

export default function ZoneInterventionPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-4xl font-semibold text-night">Zone d&apos;intervention</h1>
        <p className="mt-4 text-lg text-slate-600">
          Nous intervenons autour de votre secteur. Indiquez votre ville pour confirmer la
          disponibilité.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-night">Secteurs couverts</h2>
            <p className="mt-3 text-sm text-slate-600">
              Nous couvrons les zones résidentielles et périurbaines autour de votre secteur.
              Nettoyage voiture, terrasse, canapé et jardinage selon vos besoins.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-4 text-sm text-slate-600">
              <li>Centres-villes et quartiers résidentiels.</li>
              <li>Périphérie et zones pavillonnaires.</li>
              <li>Petits pros et syndics sur demande.</li>
            </ul>
          </div>
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-night">Demande locale rapide</h2>
            <p className="mt-3 text-sm text-slate-600">Dites-nous votre ville et votre besoin.</p>
            <form className="mt-4 grid gap-4">
              <div>
                <label htmlFor="city">Ville / secteur</label>
                <input id="city" placeholder="Votre ville" />
              </div>
              <div>
                <label htmlFor="need">Besoin</label>
                <input id="need" placeholder="Nettoyage terrasse, jardinage..." />
              </div>
              <button type="button" className="btn btn-primary" onClick={() => console.log("CTA: Zone intervention")}
              >
                Vérifier la zone
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8">
          <CTAButtons primaryLabel="Appeler" secondaryLabel="Demander un devis" />
        </div>
      </div>
    </section>
  );
}
