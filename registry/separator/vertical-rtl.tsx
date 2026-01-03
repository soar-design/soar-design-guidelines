import { Separator } from "@soar-design/soar-react-components";

export default function SeparatorVertical() {
  return (
    <div className="flex h-20 items-center space-x-4 rtl:space-x-reverse" dir="rtl">
      <div className="flex flex-col items-center justify-center space-y-1">
        <div className="text-2xl font-bold">12</div>
        <div className="text-xs text-muted-foreground">منشورات</div>
      </div>
      <Separator orientation="vertical" />
      <div className="flex flex-col items-center justify-center space-y-1">
        <div className="text-2xl font-bold">1.2k</div>
        <div className="text-xs text-muted-foreground">متابعون</div>
      </div>
      <Separator orientation="vertical" />
      <div className="flex flex-col items-center justify-center space-y-1">
        <div className="text-2xl font-bold">345</div>
        <div className="text-xs text-muted-foreground">يتابع</div>
      </div>
    </div>
  );
}

