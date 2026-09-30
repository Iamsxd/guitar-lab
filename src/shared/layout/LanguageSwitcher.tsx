import { makeTextTranslator } from "@shared/i18n/translate";
import { localePath } from "@shared/i18n/localePath";
import { Globe } from "lucide-react";
import { LOCALES, type Locale, type Messages } from "@shared/types/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@shared/ui/DropdownMenu";
import { Button } from "@shared/ui/Button";

const LABELS: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  pl: "Polski",
  zh: "简体中文",
};

export function LanguageSwitcher({
  locale,
  pathname,
  messages,
}: {
  locale: Locale;
  pathname: string;
  messages: Messages;
}) {
  const text = makeTextTranslator(messages);
  const switchTo = (next: Locale) => {
    window.location.assign(
      localePath(pathname, import.meta.env.BASE_URL, next),
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2"
          aria-label={text("Switch language")}
        >
          <Globe className="size-4" />
          <span className="font-medium uppercase">
            {locale === "zh" ? "中文" : locale}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-36">
        {LOCALES.map((code) => (
          <DropdownMenuItem
            key={code}
            onSelect={() => switchTo(code)}
            aria-current={code === locale}
          >
            {LABELS[code]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
