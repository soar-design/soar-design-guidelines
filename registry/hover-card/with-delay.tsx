"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Button,
} from "@soar-design/soar-react-components";

export default function HoverCardWithDelay() {
  return (
    <div className="flex flex-wrap gap-4">
      <HoverCard openDelay={100}>
        <HoverCardTrigger asChild>
          <Button variant="outline">Fast (100ms)</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-64">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Quick Response</h4>
            <p className="text-sm text-muted-foreground">
              Opens after 100ms delay.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard openDelay={500}>
        <HoverCardTrigger asChild>
          <Button variant="outline">Normal (500ms)</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-64">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Normal Response</h4>
            <p className="text-sm text-muted-foreground">
              Opens after 500ms delay.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard openDelay={1000}>
        <HoverCardTrigger asChild>
          <Button variant="outline">Slow (1000ms)</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-64">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Delayed Response</h4>
            <p className="text-sm text-muted-foreground">
              Opens after 1000ms delay.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

