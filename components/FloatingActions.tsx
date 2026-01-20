import { phoneLink, smsLink } from "./data";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-2 md:hidden">
      <a
        href={phoneLink}
        onClick={() => console.log("CTA: Floating Appel")}
        className="btn btn-primary shadow-soft"
      >
        Appeler
      </a>
      <a
        href={smsLink + encodeURIComponent("Bonjour, je souhaite un devis pour [service] à [ville].")}
        onClick={() => console.log("CTA: Floating SMS")}
        className="btn btn-secondary shadow-soft"
      >
        SMS
      </a>
    </div>
  );
}
