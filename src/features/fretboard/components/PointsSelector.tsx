import { useText } from "@shared/i18n/I18nProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shared/ui/Select";
import { POINTS_OPTIONS, type Points } from "@shared/types/fretboard";

type PointsSelectorProps = {
  value: Points;
  onChange: (value: Points) => void;
  disabled?: boolean;
};

export function PointsSelector({
  value,
  onChange,
  disabled = false,
}: PointsSelectorProps) {
  const text = useText();
  return (
    <Select
      value={`${value}`}
      onValueChange={(v) => onChange(Number(v) as Points)}
      disabled={disabled}
    >
      <SelectTrigger className="w-full md:w-[180px]">
        <SelectValue placeholder={text("Target Points")} />
      </SelectTrigger>
      <SelectContent>
        {POINTS_OPTIONS.map((points) => (
          <SelectItem key={points} value={`${points}`}>
            {points} {text("points")}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
