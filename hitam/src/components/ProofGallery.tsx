"use client";

import { useCallback, useState } from "react";

/**
 * Renders /public/proof/<dir>/01.png.. trying .png then .jpg per slot, hiding
 * any that 404. If none load (files not uploaded yet), the whole block hides
 * so the section never shows broken images.
 */
export default function ProofGallery({
  dir,
  count,
  caption,
}: {
  dir: string;
  count: number;
  caption?: string;
}) {
  const [status, setStatus] = useState<Record<number, "ok" | "fail">>({});

  const report = useCallback((n: number, ok: boolean) => {
    setStatus((s) => (s[n] ? s : { ...s, [n]: ok ? "ok" : "fail" }));
  }, []);

  const reported = Object.keys(status).length;
  const okCount = Object.values(status).filter((v) => v === "ok").length;
  if (reported >= count && okCount === 0) return null;

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {Array.from({ length: count }).map((_, i) => (
          <ProofImg key={i} dir={dir} n={i + 1} onResult={report} />
        ))}
      </div>
      {caption && okCount > 0 && (
        <p className="mt-4 text-center text-xs text-white/40">{caption}</p>
      )}
    </div>
  );
}

function ProofImg({
  dir,
  n,
  onResult,
}: {
  dir: string;
  n: number;
  onResult: (n: number, ok: boolean) => void;
}) {
  const idx = String(n).padStart(2, "0");
  const [ext, setExt] = useState<"png" | "jpg" | null>("png");
  if (ext === null) return null;
  const src = `/proof/${dir}/${idx}.${ext}`;

  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border border-hitam-border bg-hitam-void"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`Bukti hasil ${n}`}
        loading="lazy"
        onLoad={() => onResult(n, true)}
        onError={() => {
          if (ext === "png") setExt("jpg");
          else {
            setExt(null);
            onResult(n, false);
          }
        }}
        className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
      />
    </a>
  );
}
