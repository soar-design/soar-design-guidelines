"use client";

import { Button } from "@soar-design/soar-react-components";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@soar-design/soar-react-components";
import { useState } from "react";

export default function PopoverControlled() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Open"} Popover
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpen(false)}
          disabled={!open}
        >
          Force Close
        </Button>
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline">Toggle</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Controlled Popover</h4>
            <p className="text-sm text-muted-foreground">
              This popover's open state is controlled externally.
            </p>
            <Button
              size="sm"
              onClick={() => setOpen(false)}
              className="w-full"
            >
              Close from inside
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

