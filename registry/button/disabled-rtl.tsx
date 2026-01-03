import { Button } from "@soar-design/soar-react-components";

export default function ButtonDemo() {
  return (
    <div className="flex items-center gap-4">
      <Button disabled>أساسي</Button>
      <Button variant="outline" disabled>
        حدودي
      </Button>
      <Button mode="link" disabled>
        رابط
      </Button>
    </div>
  );
}

