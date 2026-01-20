type TestimonialCardProps = {
  name: string;
  note: string;
  text: string;
};

export default function TestimonialCard({ name, note, text }: TestimonialCardProps) {
  return (
    <div className="card p-6">
      <p className="text-sm font-semibold text-night">{name}</p>
      <p className="text-xs text-slate-400">{note}</p>
      <p className="mt-3 text-sm text-slate-600">“{text}”</p>
    </div>
  );
}
