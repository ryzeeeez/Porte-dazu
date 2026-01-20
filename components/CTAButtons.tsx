import Link from "next/link";
import { phoneLink, smsLink } from "./data";

type CTAButtonsProps = {
  primaryLabel?: string;
  secondaryLabel?: string;
  service?: string;
};

export default function CTAButtons({
  primaryLabel = "Appeler",
  secondaryLabel = "Demander un devis",
  service
}: CTAButtonsProps) {
  const smsBody = service
    ? `Bonjour, je souhaite un devis pour ${service} à [ville].`
    : "Bonjour, je souhaite un devis pour [service] à [ville].";
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={phoneLink}
        onClick={() => console.log("CTA: Appeler")}
        className="btn btn-primary"
      >
        {primaryLabel}
      </a>
      <Link
        href="/devis"
        onClick={() => console.log("CTA: Devis")}
        className="btn btn-secondary"
      >
        {secondaryLabel}
      </Link>
      <a
        href={smsLink + encodeURIComponent(smsBody)}
        onClick={() => console.log("CTA: SMS")}
        className="btn btn-ghost"
      >
        Envoyer un SMS
      </a>
    </div>
  );
}
