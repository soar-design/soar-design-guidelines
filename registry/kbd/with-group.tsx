import { Kbd, KbdGroup } from "@soar-design/soar-react-components";

export default function KbdWithGroup() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">Command palette:</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm">Save file:</span>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>S</Kbd>
        </KbdGroup>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm">Select all:</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>A</Kbd>
        </KbdGroup>
      </div>
    </div>
  );
}

