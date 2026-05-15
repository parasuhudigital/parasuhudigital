/**
 * Meta Pixel (Facebook Pixel) helper.
 * Pixel script is loaded once in layout.tsx via MetaPixel component.
 */

export const META_PIXEL_ID = "962274243079628";

type FbqArgs =
  | ["init", string]
  | ["track", string, Record<string, unknown>?]
  | ["trackCustom", string, Record<string, unknown>?]
  | [string, ...unknown[]];

declare global {
  interface Window {
    fbq?: (...args: FbqArgs) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Fire a Meta Pixel "Lead" event. Safe to call on the server (no-op). */
export function trackLead(params?: {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
}) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", "Lead", params ?? {});
}

/** Fire an arbitrary standard event. */
export function trackEvent(
  event: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, params ?? {});
}

/**
 * Fire a Google Ads conversion (gtag event).
 * Pass `sendTo` as 'AW-XXXX/CONVERSION_LABEL'. Use when you have a
 * specific conversion action created in Google Ads.
 */
export function trackGoogleAdsConversion(
  sendTo: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", { send_to: sendTo, ...(params ?? {}) });
}
