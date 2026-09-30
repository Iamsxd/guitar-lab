import { useText } from "@shared/i18n/I18nProvider";
import { Music } from "lucide-react";
import { Alert, AlertDescription } from "@shared/ui/Alert";

export function Instructions() {
  const text = useText();
  return (
    <Alert>
      <Music className="size-4" />
      <AlertDescription className="space-y-2">
        <p>
          <strong>{text("How to compose:")}</strong>{" "}
          {text(
            "Click on the staff to place notes. Select different durations from the dropdown. The playback will respect note durations and tempo settings.",
          )}
        </p>
        <p className="text-sm text-[var(--color-fg-muted)]">
          <strong>{text("Tips:")}</strong>{" "}
          {text(
            "• Shift+Click on a note to set it as the playback start point",
          )}{" "}
          {text("• Use the Start Point controls to navigate through notes")}{" "}
          {text("• The tempo slider changes playback speed in real-time")}{" "}
          {text("• A red line shows the current playback position")}
        </p>
      </AlertDescription>
    </Alert>
  );
}
