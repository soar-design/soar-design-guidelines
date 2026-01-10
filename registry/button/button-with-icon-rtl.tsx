import { GitBranch } from "lucide-react";

import { Button } from "@soar-design/soar-react-components";

export function ButtonWithIconDocsRTL() {
  return (
    <Button variant="outline" size="sm">
      <GitBranch /> فرع جديد
    </Button>
  );
}
