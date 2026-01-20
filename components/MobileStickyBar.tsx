import { phoneLink, smsLink } from "./data";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-2 border-t border-ice bg-white p-3 md:hidden">
      <a
        href={phoneLink}
        onClick={() => console.log("CTA: Sticky Appel")}
        className="btn btn-primary flex-1"
      >
        Appeler
      </a>
      <a
        href={smsLink + encodeURIComponent("Bonjour, je souhaite un devis pour [service] à [ville].")}
        onClick={() => console.log("CTA: Sticky SMS")}
        className="btn btn-secondary flex-1"
      >
        SMS
      </a>
    </div>
  );
}
