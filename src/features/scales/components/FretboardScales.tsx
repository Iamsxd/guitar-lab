import { useText } from "@shared/i18n/I18nProvider";
import { Fretboard, FretboardMarker } from "@shared/music/Fretboard";
import { NORMAL_COLORS } from "@shared/music/fretboardConstants";
import type { NotePosition, Tuning } from "@shared/types/music";

type FretboardScalesProps = {
  tuning: Tuning;
  width: number;
  height: number;
  onFretClick: (stringIndex: number, fretIndex: number) => void;
  chordPositions: NotePosition[];
  easyMode: boolean;
};

export function FretboardScales({
  tuning,
  width,
  height,
  onFretClick,
  chordPositions,
  easyMode,
}: FretboardScalesProps) {
  const text = useText();
  return (
    <div className="relative w-full overflow-x-auto">
      <Fretboard tuning={tuning} width={width} height={height}>
        {chordPositions.map(({ string, fret, note }) => {
          const fill = easyMode
            ? (NORMAL_COLORS[note] ?? "transparent")
            : "transparent";
          return (
            <FretboardMarker
              key={`scale-${string}-${fret}`}
              string={string}
              fret={fret}
              fill={fill}
              label={easyMode ? note : undefined}
              onClick={() => onFretClick(string, fret)}
              ariaLabel={text("String {string}, Fret {fret}, Note {note}", {
                string: string + 1,
                fret,
                note,
              })}
            />
          );
        })}
      </Fretboard>
    </div>
  );
}
