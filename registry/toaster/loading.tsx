"use client";

import { Button } from "@soar-design/soar-react-components";
import { toast } from "@soar-design/soar-react-components";

export default function ToasterLoading() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const id = toast.loading("Loading data...");
        setTimeout(() => {
          toast.success("Data loaded successfully!", { id });
        }, 2000);
      }}
    >
      Show Loading Toast
    </Button>
  );
}
