import {
  Crosshair,
  TrendingUp,
  Megaphone,
  Link2,
  Zap,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Crosshair,
  TrendingUp,
  Megaphone,
  Link2,
  Zap,
  GraduationCap,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = MAP[name] ?? Zap;
  return <Icon className={className} />;
}
