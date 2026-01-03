import Link from "next/link";
import { Button } from "@soar-design/soar-react-components";

export default function ButtonDemo() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Button mode="link" underline="solid" asChild>
        <Link href="#">صلب</Link>
      </Button>
      <Button mode="link" underline="dashed">
        <Link href="#">متقطع</Link>
      </Button>
      <Button mode="link" underlined="solid">
        <Link href="#">مسطر - صلب</Link>
      </Button>
      <Button mode="link" underlined="dashed">
        <Link href="#">مسطر - متقطع</Link>
      </Button>
    </div>
  );
}
