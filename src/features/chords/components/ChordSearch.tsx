import { useText } from "@shared/i18n/I18nProvider";
import type { ChangeEvent } from "react";
import { Input } from "@shared/ui/Input";

type ChordSearchProps = {
  searchTerm: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function ChordSearch({ searchTerm, onSearchChange }: ChordSearchProps) {
  const text = useText();
  return (
    <Input
      type="text"
      value={searchTerm}
      onChange={onSearchChange}
      placeholder={text("Search chords...")}
      className="w-full"
    />
  );
}
