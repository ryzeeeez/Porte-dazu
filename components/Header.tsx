import Link from "next/link";
import { phoneLink, phoneNumber, smsLink } from "./data";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/devis", label: "Devis" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ice bg-white/90 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-night text-white font-bold">LP</div>
          <div>
            <p className="text-sm font-semibold text-night">LES PORTES D&apos;AZUR</p>
            <p className="text-xs text-slate-500">Nettoyage • Jardinage</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-night">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={phoneLink}
            onClick={() => console.log("CTA: Appeler (header)")}
            className="hidden items-center gap-2 rounded-full border border-ice px-4 py-2 text-sm font-semibold text-night hover:bg-ice md:inline-flex"
          >
            {phoneNumber}
          </a>
          <a
            href={smsLink + encodeURIComponent("Bonjour, je souhaite un devis.")}
            onClick={() => console.log("CTA: SMS (header)")}
            className="hidden items-center gap-2 rounded-full border border-ice px-4 py-2 text-sm font-semibold text-night hover:bg-ice md:inline-flex"
          >
            SMS
          </a>
          <Link href="/devis" className="btn btn-primary">
            Demander un devis
          </Link>
        </div>
      </div>
    </header>
  );
}
