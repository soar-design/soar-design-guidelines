import { Button } from "@soar-design/soar-react-components";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@soar-design/soar-react-components";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button mode="link">@username</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex gap-4">
          <Avatar className="size-10">
            <AvatarImage src="https://randomuser.me/api/portraits/men/51.jpg" alt="@username" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@username</h4>
            <p className="text-sm">
              Full-stack developer and designer. Passionate about creating
              beautiful and functional user experiences.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
