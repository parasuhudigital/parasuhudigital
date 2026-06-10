"use client";

import { createContext, useContext } from "react";
import { messages, type Locale } from "@/lib/i18n";

type Dict = (typeof messages)["id"];

const LocaleContext = createContext<{ locale: Locale; t: Dict }>({
  locale: "id",
  t: messages.id,
});

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, t: messages[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext).locale;
}

/** Client-side translation dictionary for the active locale. */
export function useT() {
  return useContext(LocaleContext).t;
}
