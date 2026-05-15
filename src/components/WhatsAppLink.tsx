"use client";

import { trackLead } from "@/lib/analytics";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
  /** Content name for tracking (e.g. "contact_page_sidebar", "service_detail_suhu-website"). */
  leadSource: string;
  leadCategory?: string;
};

/**
 * Wrap a WhatsApp deep link so a click fires a Meta Pixel "Lead" event.
 * Drop-in replacement for plain <a target="_blank"> WhatsApp links.
 */
export default function WhatsAppLink({
  href,
  className,
  children,
  leadSource,
  leadCategory = "whatsapp_click",
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        trackLead({
          content_name: leadSource,
          content_category: leadCategory,
        });
      }}
    >
      {children}
    </a>
  );
}
