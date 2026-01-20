import type { Metadata } from "next";
import { phoneLink, phoneNumber, smsLink } from "@/components/data";

export const metadata: Metadata = {
  title: "Contact | LES PORTES D'AZUR",
  description:
    "Contactez LES PORTES D'AZUR pour un devis rapide. Appel, SMS ou formulaire."
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="text-4xl font-semibold text-night">Contact</h1>
          <p className="mt-4 text-lg text-slate-600">
            Besoin d&apos;un devis ou d&apos;une information ? Nous répondons rapidement.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={phoneLink} className="btn btn-primary" onClick={() => console.log("CTA: Appel contact")}
            >
              Appeler {phoneNumber}
            </a>
            <a
              href={smsLink + encodeURIComponent("Bonjour, je souhaite un devis pour [service] à [ville].")}
              className="btn btn-secondary"
              onClick={() => console.log("CTA: SMS contact")}
            >
              Envoyer un SMS
            </a>
          </div>
          <form className="mt-8 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="contact-name">Nom</label>
                <input id="contact-name" placeholder="Votre nom" />
              </div>
              <div>
                <label htmlFor="contact-phone">Téléphone</label>
                <input id="contact-phone" placeholder="06 00 00 00 00" />
              </div>
            </div>
            <div>
              <label htmlFor="contact-city">Ville / secteur</label>
              <input id="contact-city" placeholder="Votre ville" />
            </div>
            <div>
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" rows={4} placeholder="Expliquez votre besoin" />
            </div>
            <button type="button" className="btn btn-primary" onClick={() => console.log("CTA: Form contact")}
            >
              Envoyer
            </button>
            <p className="text-xs text-slate-500">
              Horaires : du lundi au samedi (plages à confirmer) • Délai de réponse sous 24h ouvrées.
            </p>
          </form>
        </div>
        <aside className="space-y-6">
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-night">Nos horaires</h2>
            <p className="mt-3 text-sm text-slate-600">Lundi - Samedi : 8h00 - 19h00 (à confirmer).</p>
            <p className="mt-2 text-sm text-slate-600">Dimanche : sur demande.</p>
          </div>
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-night">Zone d&apos;intervention</h2>
            <p className="mt-3 text-sm text-slate-600">
              Nous intervenons autour de votre secteur. Dites-nous votre ville pour confirmer.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
