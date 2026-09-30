import { LOCALES, type Locale } from "@shared/types/i18n";

export function localePath(pathname: string, baseUrl: string, next: Locale): string {
  const base = baseUrl.replace(/\/$/, "");
  const localPath = pathname.startsWith(`${base}/`)
    ? pathname.slice(base.length)
    : pathname;
  const localePrefix = new RegExp(`^/(${LOCALES.join("|")})(?=/|$)`);
  const stripped = localPath.replace(localePrefix, "") || "/";
  return `${base}/${next}${stripped === "/" ? "/" : stripped}`;
}
