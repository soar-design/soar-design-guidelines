import { Kbd, KbdGroup, Card } from "@soar-design/soar-react-components";

export default function KbdShortcuts() {
  const shortcuts = [
    { description: "نسخ", keys: ["⌘", "C"] },
    { description: "لصق", keys: ["⌘", "V"] },
    { description: "قص", keys: ["⌘", "X"] },
    { description: "تراجع", keys: ["⌘", "Z"] },
    { description: "إعادة", keys: ["⌘", "⇧", "Z"] },
    { description: "بحث", keys: ["⌘", "F"] },
    { description: "استبدال", keys: ["⌘", "⌥", "F"] },
    { description: "إغلاق علامة التبويب", keys: ["⌘", "W"] },
  ];

  return (
    <Card className="p-4" dir="rtl">
      <h3 className="text-sm font-semibold mb-4">اختصارات لوحة المفاتيح</h3>
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

