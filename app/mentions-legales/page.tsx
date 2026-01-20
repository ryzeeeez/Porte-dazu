import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | LES PORTES D'AZUR",
  description: "Mentions légales de l'entreprise LES PORTES D'AZUR."
};

export default function MentionsLegalesPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-4xl font-semibold text-night">Mentions légales</h1>
        <div className="mt-6 space-y-4 text-sm text-slate-600">
          <p>
            LES PORTES D&apos;AZUR — Entreprise locale de nettoyage et jardinage. Coordonnées complètes
            fournies sur demande.
          </p>
          <p>
            Responsable de publication : Les Portes d&apos;Azur.
          </p>
          <p>
            Hébergeur : à compléter selon l&apos;hébergeur choisi.
          </p>
          <p>
            Ce site présente des informations générales. Les prix sont indiqués “à partir de” et
            peuvent évoluer selon la prestation.
          </p>
        </div>
      </div>
    </section>
  );
}
