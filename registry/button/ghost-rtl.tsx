import { Button } from "@soar-design/soar-react-components";

export default function ButtonDemo() {
  return (
    <div className="flex items-center gap-2.5">
      <Button variant="ghost">افتراضي</Button>
      <Button variant="primary" appearance="ghost">
        أساسي
      </Button>
      <Button variant="destructive" appearance="ghost">
        تدميري
      </Button>
    </div>
  );
}
