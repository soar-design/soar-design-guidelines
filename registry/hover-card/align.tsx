"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Button,
} from "@soar-design/soar-react-components";

export default function HoverCardAlign() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <p className="text-sm font-medium">Start Alignment</p>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </HoverCardTrigger>
          <HoverCardContent align="start" className="w-80">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Start Aligned</h4>
              <p className="text-sm text-muted-foreground">
                The content is aligned to the start of the trigger element.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Center Alignment</p>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </HoverCardTrigger>
          <HoverCardContent align="center" className="w-80">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Center Aligned</h4>
              <p className="text-sm text-muted-foreground">
                The content is centered relative to the trigger element.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">End Alignment</p>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </HoverCardTrigger>
          <HoverCardContent align="end" className="w-80">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">End Aligned</h4>
              <p className="text-sm text-muted-foreground">
                The content is aligned to the end of the trigger element.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}

