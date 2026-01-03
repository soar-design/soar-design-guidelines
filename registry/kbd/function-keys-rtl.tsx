import { Kbd, KbdGroup } from "@soar-design/soar-react-components";

export default function KbdFunctionKeys() {
  return (
    <div className="space-y-4" dir="rtl">
      <div>
        <p className="text-sm font-medium mb-2">مفاتيح الوظائف</p>
        <div className="flex flex-wrap gap-2">
          <Kbd>F1</Kbd>
          <Kbd>F2</Kbd>
          <Kbd>F3</Kbd>
          <Kbd>F4</Kbd>
          <Kbd>F5</Kbd>
          <Kbd>F6</Kbd>
          <Kbd>F7</Kbd>
          <Kbd>F8</Kbd>
          <Kbd>F9</Kbd>
          <Kbd>F10</Kbd>
          <Kbd>F11</Kbd>
          <Kbd>F12</Kbd>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium mb-2">مفاتيح الأرقام</p>
        <div className="flex flex-wrap gap-2">
          <Kbd>1</Kbd>
          <Kbd>2</Kbd>
          <Kbd>3</Kbd>
          <Kbd>4</Kbd>
          <Kbd>5</Kbd>
          <Kbd>6</Kbd>
          <Kbd>7</Kbd>
          <Kbd>8</Kbd>
          <Kbd>9</Kbd>
          <Kbd>0</Kbd>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium mb-2">مع مفاتيح التعديل</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground w-32">
              تحديث:
            </span>
            <KbdGroup>
              <Kbd>F5</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground w-32">
              تحديث قسري:
            </span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>⇧</Kbd>
              <Kbd>R</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground w-32">
              أدوات المطور:
            </span>
            <KbdGroup>
              <Kbd>F12</Kbd>
            </KbdGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

