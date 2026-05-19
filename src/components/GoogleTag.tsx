import Script from "next/script";
import { GOOGLE_ADS_ID, GOOGLE_ANALYTICS_ID } from "@/lib/analytics";

export { GOOGLE_ADS_ID, GOOGLE_ANALYTICS_ID };

/**
 * Google Tag (gtag.js) for Google Ads conversion tracking + GA4.
 * Mounted once in root layout. Fires base config for both destinations on load.
 * Custom conversion events can be sent via helpers in @/lib/analytics.
 */
export default function GoogleTag() {
  return (
    <>
      <Script
        id="gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}');
            gtag('config', '${GOOGLE_ADS_ID}');
          `,
        }}
      />
    </>
  );
}
