import Link from "next/link";
import { Badge, BadgeDot } from "@soar-design/soar-react-components";

export default function BadgeDemo() {
  return (
    <Badge asChild appearance="light" shape="circle">
      <Link href="#">
        <BadgeDot className="bg-primary" />
        شارة
      </Link>
    </Badge>
  );
}

