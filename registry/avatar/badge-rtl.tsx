import { Avatar, AvatarFallback, AvatarImage, AvatarIndicator } from "@soar-design/soar-react-components";
import { Badge } from "@soar-design/soar-react-components";

export default function AvatarDemo() {
  return (
    <div className="flex flex-wrap gap-6">
      <Avatar>
        <AvatarImage className="rounded-lg" src="https://randomuser.me/api/portraits/women/44.jpg" alt="@reui" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-start-2 -top-2">
          <Badge variant="primary" size="xs" shape="circle" className="border border-background">
            6
          </Badge>
        </AvatarIndicator>
      </Avatar>

      <Avatar>
        <AvatarImage className="rounded-lg" src="https://randomuser.me/api/portraits/women/45.jpg" alt="@reui" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-start-2 -bottom-2">
          <Badge variant="destructive" size="xs" shape="circle" className="border border-background">
            3
          </Badge>
        </AvatarIndicator>
      </Avatar>
    </div>
  );
}
