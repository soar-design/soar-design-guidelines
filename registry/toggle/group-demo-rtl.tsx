import { ToggleGroup, ToggleGroupItem } from "@soar-design/soar-react-components";

export default function ToggleGroupDemo() {
  return (
    <div dir="rtl">
      <ToggleGroup type="multiple" defaultValue={["1W", "1M"]}>
        <ToggleGroupItem value="1D">يوم</ToggleGroupItem>
        <ToggleGroupItem value="1W">أسبوع</ToggleGroupItem>
        <ToggleGroupItem value="1M">شهر</ToggleGroupItem>
        <ToggleGroupItem value="6M">6 أشهر</ToggleGroupItem>
        <ToggleGroupItem value="1Y">سنة</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

