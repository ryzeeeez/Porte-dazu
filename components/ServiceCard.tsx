import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <div className="card p-6">
      <h3 className="text-xl font-semibold text-night">{title}</h3>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
      <Link href={href} className="mt-4 inline-flex text-sm font-semibold text-azure">
        En savoir plus →
      </Link>
    </div>
  );
}
