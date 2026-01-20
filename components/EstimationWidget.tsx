"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const baseRanges: Record<string, [number, number]> = {
  "Nettoyage voiture": [40, 120],
  "Nettoyage terrasse": [80, 220],
  "Nettoyage canapé & tissus": [70, 200],
  Jardinage: [60, 180]
};

const sizeMultiplier: Record<string, number> = {
  "Petit (1 à 20 m²)": 1,
  "Moyen (20 à 50 m²)": 1.4,
  "Grand (50 m² et +)": 1.9
};

export default function EstimationWidget() {
  const [service, setService] = useState("Nettoyage terrasse");
  const [size, setSize] = useState("Moyen (20 à 50 m²)");

  const estimate = useMemo(() => {
    const base = baseRanges[service] ?? [60, 150];
    const multiplier = sizeMultiplier[size] ?? 1;
    return {
      min: Math.round(base[0] * multiplier),
      max: Math.round(base[1] * multiplier)
    };
  }, [service, size]);

  return (
    <div className="card p-6">
      <h3 className="text-xl font-semibold text-night">Estimation rapide</h3>
      <p className="mt-2 text-sm text-slate-600">
        Fourchette indicative et non contractuelle. Pour un prix précis, demandez un devis.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="service">Service</label>
          <select id="service" value={service} onChange={(event) => setService(event.target.value)}>
            {Object.keys(baseRanges).map((label) => (
              <option key={label}>{label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="size">Taille / surface</label>
          <select id="size" value={size} onChange={(event) => setSize(event.target.value)}>
            {Object.keys(sizeMultiplier).map((label) => (
              <option key={label}>{label}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4 rounded-xl bg-ice p-4 text-sm">
        <p className="text-slate-600">Estimation : </p>
        <p className="text-2xl font-semibold text-night">
          {estimate.min} € à {estimate.max} € TTC
        </p>
      </div>
      <Link href="/devis" className="btn btn-primary mt-4 w-full" onClick={() => console.log("CTA: Devis estimation")}
      >
        Devis précis
      </Link>
    </div>
  );
}
