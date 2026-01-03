"use client";

import { Button } from "@soar-design/soar-react-components";
import { toast } from "@soar-design/soar-react-components";

export default function ToasterWithDescription() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast("Event has been created", {
          description: "Monday, January 3rd at 6:00pm",
        });
      }}
    >
      Show Toast
    </Button>
  );
}
