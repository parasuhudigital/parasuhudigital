import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Stars({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${rating} dari 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-3.5 w-3.5",
            i < rating ? "fill-hitam-gold text-hitam-gold" : "text-white/20",
          )}
        />
      ))}
    </div>
  );
}
