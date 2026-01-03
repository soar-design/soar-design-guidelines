import { Label } from "@soar-design/soar-react-components";
import { Switch } from "@soar-design/soar-react-components";

export default function SwitchDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-10" dir="rtl">
      <div className="flex gap-6">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Switch id="size-sm" size="sm" />
          <Label htmlFor="size-sm">صغير</Label>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Switch id="size-md" />
          <Label htmlFor="size-md">متوسط</Label>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Switch id="size-lg" size="lg" />
          <Label htmlFor="size-lg">كبير</Label>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Switch id="size-lg" size="xl" />
          <Label htmlFor="size-lg">كبير جدًا</Label>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Switch id="compact-size-sm" size="sm" shape="square" />
          <Label htmlFor="compact-size-sm">صغير</Label>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Switch id="compact-size-md" shape="square" />
          <Label htmlFor="compact-size-md">متوسط</Label>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Switch id="compact-size-lg" size="lg" shape="square" />
          <Label htmlFor="compact-size-lg">كبير</Label>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Switch id="compact-size-lg" size="xl" shape="square" />
          <Label htmlFor="compact-size-lg">كبير جدًا</Label>
        </div>
      </div>
    </div>
  );
}

