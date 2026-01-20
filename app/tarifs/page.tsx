import type { Metadata } from "next";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Tarifs indicatifs | LES PORTES D'AZUR",
  description:
    "Tarifs indicatifs pour le nettoyage voiture, terrasse, canapé et jardinage. Devis gratuit et personnalisé."
};

export default function TarifsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-4xl font-semibold text-night">Tarifs indicatifs</h1>
        <p className="mt-4 text-lg text-slate-600">
          Tous nos prix sont “à partir de”. Le tarif final dépend de la surface, de l&apos;état et des options.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Nettoyage voiture", price: "à partir de 40 €" },
            { title: "Nettoyage terrasse", price: "à partir de 80 €" },
            { title: "Nettoyage canapé", price: "à partir de 70 €" },
            { title: "Jardinage", price: "à partir de 60 €" }
          ].map((item) => (
            <div key={item.title} className="card p-6">
              <p className="text-sm text-slate-500">{item.title}</p>
              <p className="mt-2 text-2xl font-semibold text-night">{item.price}</p>
              <p className="mt-2 text-xs text-slate-500">Estimation indicative, devis gratuit.</p>
            </div>
          ))}
        </div>
        <div className="mt-10 card p-6">
          <h2 className="text-xl font-semibold text-night">Ce qui est inclus</h2>
          <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-slate-600">
            <li>Matériel fourni.</li>
            <li>Nettoyage en profondeur : poussières, taches, mousse, salissures incrustées.</li>
            <li>Conseils pour entretenir vos surfaces.</li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">
            *Tarifs indicatifs non contractuels. Un devis personnalisé vous sera proposé après échange.
          </p>
        </div>
        <div className="mt-8">
          <CTAButtons primaryLabel="Appeler" secondaryLabel="Demander un devis" />
        </div>
      </div>
    </section>
  );
}
