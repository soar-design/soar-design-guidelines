import { Button } from "@soar-design/soar-react-components";
import { ChevronRight } from "lucide-react";

export default function ButtonIconTrailing() {
  return (
    <Button radius="full">
      Continue
      <ChevronRight className="ms-2 h-4 w-4" />
    </Button>
  );
}
