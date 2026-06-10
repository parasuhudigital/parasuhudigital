import { cookies } from "next/headers";
import { LOCALE_COOKIE, getDict, type Locale } from "./i18n";

/** Server-side: read the chosen locale from the cookie (default id). */
export function getLocale(): Locale {
  const v = cookies().get(LOCALE_COOKIE)?.value;
  return v === "en" ? "en" : "id";
}

/** Server-side: locale + dictionary in one call. */
export function getServerT() {
  const locale = getLocale();
  return { locale, t: getDict(locale) };
}
