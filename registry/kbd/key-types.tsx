import { Kbd } from "@soar-design/soar-react-components";

export default function KbdKeyTypes() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium mb-2">Modifier Keys</p>
        <div className="flex flex-wrap gap-2">
          <Kbd>⌘</Kbd>
          <Kbd>Ctrl</Kbd>
          <Kbd>Alt</Kbd>
          <Kbd>⌥</Kbd>
          <Kbd>Shift</Kbd>
          <Kbd>⇧</Kbd>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium mb-2">Letter Keys</p>
        <div className="flex flex-wrap gap-2">
          <Kbd>A</Kbd>
          <Kbd>B</Kbd>
          <Kbd>C</Kbd>
          <Kbd>Z</Kbd>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium mb-2">Special Keys</p>
        <div className="flex flex-wrap gap-2">
          <Kbd>Enter</Kbd>
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>Space</Kbd>
          <Kbd>Delete</Kbd>
          <Kbd>Backspace</Kbd>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium mb-2">Arrow Keys</p>
        <div className="flex flex-wrap gap-2">
          <Kbd>↑</Kbd>
          <Kbd>↓</Kbd>
          <Kbd>←</Kbd>
          <Kbd>→</Kbd>
        </div>
      </div>
    </div>
  );
}

