"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Button,
} from "@soar-design/soar-react-components";

export default function HoverCardSides() {
  return (
    <div className="flex flex-wrap gap-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Top</Button>
        </HoverCardTrigger>
        <HoverCardContent side="top" className="w-64">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Top Position</h4>
            <p className="text-sm text-muted-foreground">
              This hover card appears above the trigger.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Right</Button>
        </HoverCardTrigger>
        <HoverCardContent side="right" className="w-64">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Right Position</h4>
            <p className="text-sm text-muted-foreground">
              This hover card appears to the right of the trigger.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </HoverCardTrigger>
        <HoverCardContent side="bottom" className="w-64">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Bottom Position</h4>
            <p className="text-sm text-muted-foreground">
              This hover card appears below the trigger.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Left</Button>
        </HoverCardTrigger>
        <HoverCardContent side="left" className="w-64">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Left Position</h4>
            <p className="text-sm text-muted-foreground">
              This hover card appears to the left of the trigger.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

