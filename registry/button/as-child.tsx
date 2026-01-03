import { Button } from "@soar-design/soar-react-components";
import Link from "next/link";

export default function ButtonAsChild() {
  return (
    <Button radius="full" asChild>
      <Link href="/docs">Go to Docs</Link>
    </Button>
  );
}
