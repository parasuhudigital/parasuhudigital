import { cn } from "@/lib/utils";
import {
  ORDER_STATUS_LABEL,
  DOMAIN_STATUS_LABEL,
} from "@/lib/constants";

const ORDER_STYLES: Record<string, string> = {
  pending: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  confirmed: "bg-sky-500/15 text-sky-400 border-sky-500/30",
  in_progress: "bg-hitam-blood/15 text-hitam-blood-light border-hitam-blood/30",
  review: "bg-violet-500/15 text-violet-400 border-violet-500/30",
  completed: "bg-suhu-emerald/15 text-suhu-emerald border-suhu-emerald/30",
  cancelled: "bg-white/10 text-white/50 border-white/15",
};

const DOMAIN_STYLES: Record<string, string> = {
  available: "bg-suhu-emerald/15 text-suhu-emerald border-suhu-emerald/30",
  reserved: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  sold: "bg-white/10 text-white/40 border-white/15",
};

export default function StatusBadge({
  status,
  kind = "order",
  className,
}: {
  status: string;
  kind?: "order" | "domain";
  className?: string;
}) {
  const styles = kind === "domain" ? DOMAIN_STYLES : ORDER_STYLES;
  const labels = kind === "domain" ? DOMAIN_STATUS_LABEL : ORDER_STATUS_LABEL;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium",
        styles[status] ?? "bg-white/10 text-white/60 border-white/15",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {labels[status] ?? status}
    </span>
  );
}
