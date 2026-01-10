import { ArrowUpIcon } from "lucide-react";

import { Button } from "@soar-design/soar-react-components";

export function ButtonRoundedDocs() {
  return (
    <div className="flex flex-col gap-8">
      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
  );
}
