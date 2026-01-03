"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
} from "@soar-design/soar-react-components";
import { MapPin, Link as LinkIcon, Calendar } from "lucide-react";

export default function HoverCardUserProfile() {
  return (
    <div className="flex gap-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="ghost" className="gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://randomuser.me/api/portraits/men/51.jpg" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <span>@shadcn</span>
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="https://randomuser.me/api/portraits/men/51.jpg" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
              <div>
                <h4 className="text-sm font-semibold">shadcn</h4>
                <p className="text-xs text-muted-foreground">@shadcn</p>
              </div>
              <p className="text-sm">
                Building UI components and design systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="gap-1">
                  <MapPin className="h-3 w-3" />
                  San Francisco
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <LinkIcon className="h-3 w-3" />
                  ui.shadcn.com
                </Badge>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>Joined March 2023</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

