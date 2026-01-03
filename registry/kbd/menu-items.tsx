import { Kbd, KbdGroup, Card } from "@soar-design/soar-react-components";

export default function KbdMenuItems() {
  const menuItems = [
    { label: "New File", shortcut: ["⌘", "N"] },
    { label: "Open File", shortcut: ["⌘", "O"] },
    { label: "Save", shortcut: ["⌘", "S"] },
    { label: "Save As...", shortcut: ["⌘", "⇧", "S"] },
    { label: "Close", shortcut: ["⌘", "W"] },
    { label: "Quit", shortcut: ["⌘", "Q"] },
  ];

  return (
    <Card className="w-64">
      <div className="p-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-muted cursor-pointer"
          >
            <span className="text-sm">{item.label}</span>
            <KbdGroup>
              {item.shortcut.map((key, keyIndex) => (
                <Kbd key={keyIndex}>{key}</Kbd>
              ))}
            </KbdGroup>
          </div>
        ))}
      </div>
    </Card>
  );
}

