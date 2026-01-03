"use client";

import { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Button,
  Switch,
} from "@soar-design/soar-react-components";

export default function HoverCardControlled() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Switch checked={open} onCheckedChange={setOpen} />
        <span className="text-sm">
          {open ? "Hover card is open" : "Hover card is closed"}
        </span>
      </div>

      <HoverCard open={open} onOpenChange={setOpen}>
        <HoverCardTrigger asChild>
          <Button variant="outline">Controlled Hover Card</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Controlled State</h4>
            <p className="text-sm text-muted-foreground">
              This hover card's open state is controlled by the switch above.
              You can toggle it on or off, or hover to trigger it.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

