import { Globe } from "lucide-react";
import { LOCALES, type Locale } from "@shared/types/i18n";
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
};

export function LanguageSwitcher({
  locale,
  pathname,
}: {
  locale: Locale;
  pathname: string;
}) {
  const switchTo = (next: Locale) => {
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    const localPath = pathname.startsWith(`${base}/`)
      ? pathname.slice(base.length)
      : pathname;
    const stripped = localPath.replace(/^\/(en|de|pl)(?=\/|$)/, "") || "/";
    const newPath = `${base}/${next}${stripped === "/" ? "/" : stripped}`;
    window.location.assign(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2"
          aria-label="Switch language"
        >
          <Globe className="size-4" />
          <span className="font-medium uppercase">{locale}</span>
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
