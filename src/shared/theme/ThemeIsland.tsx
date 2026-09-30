import { I18nProvider } from "@shared/i18n/I18nProvider";
import type { Locale, Messages } from "@shared/types/i18n";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";

export function ThemeIsland({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages;
}) {
  return (
    <I18nProvider locale={locale} messages={messages}>
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    </I18nProvider>
  );
}
