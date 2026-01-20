import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | LES PORTES D'AZUR",
  description: "Politique de confidentialité et protection des données."
};

export default function PolitiquePage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-4xl font-semibold text-night">Politique de confidentialité</h1>
        <div className="mt-6 space-y-4 text-sm text-slate-600">
          <p>
            Les données collectées via le formulaire (nom, téléphone, ville, message) sont utilisées
            uniquement pour répondre à votre demande de devis ou de contact.
          </p>
          <p>
            Aucune donnée n&apos;est vendue ou partagée avec des tiers. Vous pouvez demander la suppression
            de vos informations en nous contactant.
          </p>
          <p>
            Pour toute question, contactez-nous par téléphone ou SMS.
          </p>
        </div>
      </div>
    </section>
  );
}
