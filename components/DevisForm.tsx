"use client";

import { useMemo, useState } from "react";
import { phoneLink, phoneNumber, services, smsLink } from "./data";

const serviceOptions = services.map((service) => service.name);

export default function DevisForm() {
  const [service, setService] = useState(serviceOptions[0]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [surface, setSurface] = useState("");
  const [message, setMessage] = useState("");
  const [confirmation, setConfirmation] = useState<string | null>(null);

  const summary = useMemo(() => {
    return `Service : ${service}\nVille : ${city || "à préciser"}\nSurface : ${surface || "à préciser"}\nMessage : ${message || "-"}`;
  }, [service, city, surface, message]);

  const smsBody = `Bonjour, je souhaite un devis pour ${service} à ${city || "[ville]"}.`;
  const mailto = `mailto:contact@lesportesdazur.fr?subject=Demande%20de%20devis&body=${encodeURIComponent(
    summary
  )}`;

  const handleSubmit = () => {
    if (!name || !city) {
      setConfirmation("Merci de renseigner votre nom et votre ville.");
      return;
    }
    setConfirmation("Merci ! Votre demande est bien prise en compte. Nous vous répondons rapidement.");
    console.log("CTA: Envoi devis", { service, name, city, surface, message });
  };

  return (
    <div className="container grid gap-10 lg:grid-cols-[2fr_1fr]">
      <div>
        <h1 className="text-4xl font-semibold text-night">Demander un devis</h1>
        <p className="mt-4 text-lg text-slate-600">
          Devis gratuit et réponse rapide. Indiquez votre besoin, nous vous recontactons.
        </p>

        <form className="mt-8 grid gap-4" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label htmlFor="service">Service</label>
            <select id="service" value={service} onChange={(event) => setService(event.target.value)}>
              {serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name">Nom</label>
              <input id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Votre nom" />
            </div>
            <div>
              <label htmlFor="city">Ville / secteur</label>
              <input id="city" value={city} onChange={(event) => setCity(event.target.value)} placeholder="Votre ville" />
            </div>
          </div>
          <div>
            <label htmlFor="surface">Surface / taille approximative</label>
            <input
              id="surface"
              value={surface}
              onChange={(event) => setSurface(event.target.value)}
              placeholder="Ex : 20 m², voiture citadine..."
            />
          </div>
          {service === "Nettoyage voiture" && (
            <div>
              <label htmlFor="vehicle">Type de véhicule</label>
              <input id="vehicle" placeholder="Citadine, SUV, utilitaire..." />
            </div>
          )}
          {service === "Nettoyage terrasse" && (
            <div>
              <label htmlFor="material">Type de sol</label>
              <input id="material" placeholder="Dalles, pierre, bois..." />
            </div>
          )}
          {service === "Nettoyage canapé & tissus" && (
            <div>
              <label htmlFor="fabric">Type de tissu</label>
              <input id="fabric" placeholder="Tissu, velours, microfibre..." />
            </div>
          )}
          {service === "Jardinage" && (
            <div>
              <label htmlFor="garden">Détails jardin</label>
              <input id="garden" placeholder="Tonte, taille, désherbage..." />
            </div>
          )}
          <div>
            <label htmlFor="message">Message complémentaire</label>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Précisez vos attentes, urgence, contraintes d'accès..."
              rows={4}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>
            Envoyer la demande
          </button>
          <p className="text-xs text-slate-500">
            Vos données sont utilisées uniquement pour répondre à votre demande. Devis gratuit, sans engagement.
          </p>
        </form>

        {confirmation && (
          <div className="mt-6 rounded-xl bg-ice p-4 text-sm text-night">{confirmation}</div>
        )}
      </div>

      <aside className="space-y-6">
        <div className="card p-6">
          <p className="text-sm font-semibold text-night">Récapitulatif</p>
          <pre className="mt-3 whitespace-pre-wrap text-sm text-slate-600">{summary}</pre>
        </div>
        <div className="card p-6">
          <p className="text-sm font-semibold text-night">Contact direct</p>
          <p className="mt-2 text-sm text-slate-600">Appel ou SMS pour un devis rapide.</p>
          <div className="mt-4 flex flex-col gap-2">
            <a href={phoneLink} className="btn btn-primary" onClick={() => console.log("CTA: Appel devis")}
            >
              Appeler {phoneNumber}
            </a>
            <a
              href={smsLink + encodeURIComponent(smsBody)}
              className="btn btn-secondary"
              onClick={() => console.log("CTA: SMS devis")}
            >
              Envoyer un SMS
            </a>
            <a href={mailto} className="btn btn-ghost">
              Envoyer par email
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
