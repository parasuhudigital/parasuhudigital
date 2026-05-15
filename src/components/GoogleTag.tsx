import Script from "next/script";
import { GOOGLE_ADS_ID } from "@/lib/analytics";

export { GOOGLE_ADS_ID };

/**
 * Google Tag (gtag.js) for Google Ads conversion tracking.
 * Mounted once in root layout. Fires base config on load.
 * Custom conversion events can be sent via the gtagEvent helper in @/lib/analytics.
 */
export default function GoogleTag() {
  return (
    <>
      <Script
        id="gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `,
        }}
      />
    </>
  );
}
