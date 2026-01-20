import { beforeAfterImages } from "./data";

export default function BeforeAfterGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {beforeAfterImages.map((item) => (
        <div key={item.id} className="card p-4">
          <div className="flex h-36 items-center justify-center rounded-lg bg-ice text-sm font-medium text-night">
            {item.label}
          </div>
          <p className="mt-3 text-xs text-slate-500">Photo placeholder — vos réalisations.</p>
        </div>
      ))}
    </div>
  );
}
