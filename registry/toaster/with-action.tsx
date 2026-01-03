"use client";

import { Button } from "@soar-design/soar-react-components";
import { toast } from "@soar-design/soar-react-components";

export default function ToasterWithAction() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast("Event has been created", {
          action: {
            label: "Undo",
            onClick: () => toast.success("Undo successful"),
          },
        });
      }}
    >
      Show Toast
    </Button>
  );
}
