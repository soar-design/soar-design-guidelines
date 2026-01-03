"use client";

import { Textarea, Button } from "@soar-design/soar-react-components";

export default function TextareaWithButton() {
  return (
    <div className="space-y-2">
      <Textarea placeholder="Type your comment..." className="min-h-[100px]" />
      <div className="flex justify-end">
        <Button>Post Comment</Button>
      </div>
    </div>
  );
}
