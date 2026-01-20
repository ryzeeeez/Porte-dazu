import type { Metadata } from "next";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Entretenir son canapé | LES PORTES D'AZUR",
  description:
    "Conseils pour préserver un canapé tissu et limiter les taches et odeurs."
};

export default function BlogCanapePage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-4xl font-semibold text-night">Entretenir son canapé</h1>
        <p className="mt-4 text-lg text-slate-600">
          Des conseils simples pour garder un canapé propre et confortable.
        </p>
        <div className="mt-6 space-y-6 text-sm text-slate-600">
          <p>
            Aspirez votre canapé chaque semaine pour limiter la poussière et les allergènes.
          </p>
          <p>
            En cas de tache, tamponnez rapidement avec un chiffon propre et humide. Évitez de frotter
            pour ne pas incruster la salissure.
          </p>
          <p>
            Un nettoyage professionnel une à deux fois par an ravive les tissus et neutralise les
            odeurs.
          </p>
        </div>
        <div className="mt-8 card p-6">
          <h2 className="text-lg font-semibold text-night">Un canapé comme neuf ?</h2>
          <p className="mt-3 text-sm text-slate-600">Nous disposons de tout le matériel nécessaire.</p>
          <CTAButtons primaryLabel="Appeler" secondaryLabel="Demander un devis" />
        </div>
      </div>
    </section>
  );
}
