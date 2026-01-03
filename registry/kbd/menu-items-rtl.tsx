import { Kbd, KbdGroup, Card } from "@soar-design/soar-react-components";

export default function KbdMenuItems() {
  const menuItems = [
    { label: "ملف جديد", shortcut: ["⌘", "N"] },
    { label: "فتح ملف", shortcut: ["⌘", "O"] },
    { label: "حفظ", shortcut: ["⌘", "S"] },
    { label: "حفظ باسم...", shortcut: ["⌘", "⇧", "S"] },
    { label: "إغلاق", shortcut: ["⌘", "W"] },
    { label: "خروج", shortcut: ["⌘", "Q"] },
  ];

  return (
    <Card className="w-64" dir="rtl">
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

