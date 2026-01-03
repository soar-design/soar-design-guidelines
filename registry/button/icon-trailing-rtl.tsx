import { Button } from "@soar-design/soar-react-components";
import { ChevronLeft } from "lucide-react";

export default function ButtonIconTrailing() {
  return (
    <Button radius="full">
      متابعة
      <ChevronLeft className="me-2 h-4 w-4" />
    </Button>
  );
}

