import { ToggleGroup, ToggleGroupItem } from "@soar-design/soar-react-components";

export default function ToggleGroupSize() {
  return (
    <div className="flex flex-col items-center gap-5" dir="rtl">
      <ToggleGroup type="multiple" variant="outline" size="sm" defaultValue={["1W", "1M"]}>
        <ToggleGroupItem value="1D">يوم</ToggleGroupItem>
        <ToggleGroupItem value="1W">أسبوع</ToggleGroupItem>
        <ToggleGroupItem value="1M">شهر</ToggleGroupItem>
        <ToggleGroupItem value="6M">6 أشهر</ToggleGroupItem>
        <ToggleGroupItem value="1Y">سنة</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="multiple" variant="outline" defaultValue={["1W", "1M"]}>
        <ToggleGroupItem value="1D">يوم</ToggleGroupItem>
        <ToggleGroupItem value="1W">أسبوع</ToggleGroupItem>
        <ToggleGroupItem value="1M">شهر</ToggleGroupItem>
        <ToggleGroupItem value="6M">6 أشهر</ToggleGroupItem>
        <ToggleGroupItem value="1Y">سنة</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="multiple" variant="outline" size="lg" defaultValue={["1W", "1M"]}>
        <ToggleGroupItem value="1D">يوم</ToggleGroupItem>
        <ToggleGroupItem value="1W">أسبوع</ToggleGroupItem>
        <ToggleGroupItem value="1M">شهر</ToggleGroupItem>
        <ToggleGroupItem value="6M">6 أشهر</ToggleGroupItem>
        <ToggleGroupItem value="1Y">سنة</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

