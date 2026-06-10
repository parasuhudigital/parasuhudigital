"use client";

import { useEffect } from "react";
import { fbqTrack } from "@/lib/analytics";

/** Fires a Meta Pixel event once on mount (e.g. ViewContent on detail pages). */
export default function TrackView({
  event = "ViewContent",
  params,
}: {
  event?: string;
  params?: Record<string, unknown>;
}) {
  useEffect(() => {
    fbqTrack(event, params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
