import Link from "next/link";
import { phoneLink, phoneNumber, smsLink } from "./data";

export default function Footer() {
  return (
    <footer className="border-t border-ice bg-white">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-night">LES PORTES D&apos;AZUR</p>
          <p className="text-sm text-slate-600">Nettoyage • Jardinage</p>
          <p className="text-sm text-slate-600">
            Entreprise locale, équipe flexible, matériel fourni, interventions soignées.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <a href={phoneLink} className="font-semibold text-night">
              {phoneNumber}
            </a>
            <a
              href={smsLink + encodeURIComponent("Bonjour, je souhaite un devis pour [service] à [ville].")}
              className="text-slate-600"
            >
              Envoyer un SMS
            </a>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-night">Navigation</p>
          <Link href="/services">Services</Link>
          <Link href="/realisations">Réalisations</Link>
          <Link href="/tarifs">Tarifs</Link>
          <Link href="/devis">Devis</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-night">Ressources</p>
          <Link href="/faq">FAQ</Link>
          <Link href="/zone-intervention">Zone d&apos;intervention</Link>
          <Link href="/blog/entretenir-terrasse">Conseils terrasse</Link>
          <Link href="/blog/entretenir-canape">Conseils canapé</Link>
          <Link href="/blog/entretenir-voiture">Conseils voiture</Link>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-night">Légal</p>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
          <p className="text-xs text-slate-500">
            Aucune adresse précise n&apos;est publiée. Nous intervenons autour de votre secteur.
          </p>
        </div>
      </div>
      <div className="border-t border-ice py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} LES PORTES D&apos;AZUR. Tous droits réservés.
      </div>
    </footer>
  );
}
