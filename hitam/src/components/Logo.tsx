import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)}>
      <div className="relative h-9 w-9">
        <div className="absolute inset-0 rounded-lg bg-gradient-blood transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-[2px] flex items-center justify-center rounded-[6px] bg-hitam-black">
          <span className="font-display text-xl leading-none text-hitam-blood">
            S
          </span>
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold text-white">
          Para Suhu
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-hitam-blood">
          Hitam
        </span>
      </div>
    </Link>
  );
}
