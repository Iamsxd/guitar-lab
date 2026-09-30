import { useText } from "@shared/i18n/I18nProvider";
import type { SheetNote } from "@shared/types/sheet";
import { Badge } from "@shared/ui/Badge";
import { calculateTotalDuration } from "../utils/noteUtils";

type StatusDisplayProps = {
  notes: SheetNote[];
  playbackStartIndex: number;
};

export function StatusDisplay({
  notes,
  playbackStartIndex,
}: StatusDisplayProps) {
  const text = useText();
  const totalDuration = calculateTotalDuration(notes);

  return (
    <div className="mt-4 flex items-center justify-between">
      <Badge variant="outline" className="text-sm">
        {text(
          notes.length === 1
            ? "{count} note in composition"
            : "{count} notes in composition",
          { count: notes.length },
        )}
      </Badge>
      {notes.length > 0 && (
        <div className="flex gap-2">
          <Badge variant="secondary" className="text-sm">
            {text("Total duration:")} {totalDuration} {text("beats")}
          </Badge>
          {playbackStartIndex > 0 && (
            <Badge
              variant="outline"
              className="text-sm text-[var(--color-success)]"
            >
              {text("Playing from note")} {playbackStartIndex + 1}
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}
