import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import MobileStickyBar from "@/components/MobileStickyBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://lesportesdazur.fr"),
  title: "LES PORTES D'AZUR | Nettoyage & Jardinage",
  description:
    "Entreprise locale de nettoyage et jardinage. Devis gratuit, matériel fourni, équipe ponctuelle. Intervention autour de votre secteur.",
  openGraph: {
    title: "LES PORTES D'AZUR | Nettoyage & Jardinage",
    description:
      "Devis rapide, nettoyage voiture, terrasse, canapé, jardinage. Matériel fourni et équipe sérieuse.",
    images: ["/og-placeholder.svg"],
    locale: "fr_FR",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingActions />
        <MobileStickyBar />
      </body>
    </html>
  );
}
