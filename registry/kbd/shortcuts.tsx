import { Kbd, KbdGroup, Card } from "@soar-design/soar-react-components";

export default function KbdShortcuts() {
  const shortcuts = [
    { description: "Copy", keys: ["⌘", "C"] },
    { description: "Paste", keys: ["⌘", "V"] },
    { description: "Cut", keys: ["⌘", "X"] },
    { description: "Undo", keys: ["⌘", "Z"] },
    { description: "Redo", keys: ["⌘", "⇧", "Z"] },
    { description: "Find", keys: ["⌘", "F"] },
    { description: "Replace", keys: ["⌘", "⌥", "F"] },
    { description: "Close tab", keys: ["⌘", "W"] },
  ];

  return (
    <Card className="p-4">
      <h3 className="text-sm font-semibold mb-4">Keyboard Shortcuts</h3>
      <div className="space-y-3">
        {shortcuts.map((shortcut) => (
          <div
            key={shortcut.description}
            className="flex items-center justify-between"
          >
            <span className="text-sm text-muted-foreground">
              {shortcut.description}
            </span>
            <KbdGroup>
              {shortcut.keys.map((key, index) => (
                <Kbd key={index}>{key}</Kbd>
              ))}
            </KbdGroup>
          </div>
        ))}
      </div>
    </Card>
  );
}

