import { Avatar, AvatarFallback, AvatarImage } from "@soar-design/soar-react-components";
import { Button } from "@soar-design/soar-react-components";

export default function AvatarDemo() {
  return (
    <div className="flex -space-x-2">
      <Avatar>
        <AvatarImage src="https://randomuser.me/api/portraits/women/32.jpg" alt="@reui" className="border-2 border-background hover:z-10" />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://randomuser.me/api/portraits/women/68.jpg" alt="@reui" className="border-2 border-background hover:z-10" />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://randomuser.me/api/portraits/men/51.jpg" alt="@reui" className="border-2 border-background hover:z-10" />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://randomuser.me/api/portraits/men/33.jpg" alt="@reui" className="border-2 border-background hover:z-10" />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <Button
        variant="secondary"
        mode="icon"
        radius="full"
        className="relative size-10 border-2 border-background hover:z-10"
      >
        +7
      </Button>
    </div>
  );
}
