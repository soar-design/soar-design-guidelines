"use client";

import { Button } from "@soar-design/soar-react-components";
import { toast } from "@soar-design/soar-react-components";

export default function ToasterPromise() {
  const promise = () =>
    new Promise((resolve) => setTimeout(() => resolve({ name: "John Doe" }), 2000));

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.promise(promise, {
          loading: "Loading...",
          success: (data: any) => {
            return `${data.name} has been added`;
          },
          error: "Error",
        });
      }}
    >
      Show Promise Toast
    </Button>
  );
}
