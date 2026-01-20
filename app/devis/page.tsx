import type { Metadata } from "next";
import DevisForm from "@/components/DevisForm";

export const metadata: Metadata = {
  title: "Demander un devis | LES PORTES D'AZUR",
  description:
    "Demandez un devis gratuit pour nettoyage voiture, terrasse, canapé ou jardinage. Réponse rapide par téléphone ou SMS."
};

export default function DevisPage() {
  return (
    <section className="section">
      <DevisForm />
    </section>
  );
}
