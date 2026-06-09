import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  intro,
  center,
  className,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  intro?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn("max-w-2xl", center && "mx-auto text-center", className)}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-hitam-blood",
            center && "flex justify-center",
          )}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        {title}{" "}
        {highlight && <span className="text-gradient-blood">{highlight}</span>}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}
