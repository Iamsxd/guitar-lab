export const LOCALES = ["en", "de", "pl", "zh"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export type Messages = Record<string, unknown>;
