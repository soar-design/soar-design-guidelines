import { Avatar, AvatarFallback, AvatarImage, AvatarIndicator, AvatarStatus } from "@soar-design/soar-react-components";

export default function AvatarDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Avatar className="size-6">
        <AvatarImage src="https://randomuser.me/api/portraits/women/32.jpg" alt="@reui" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-start-2 -top-2">
          <AvatarStatus variant="online" className="size-2" />
        </AvatarIndicator>
      </Avatar>
      <Avatar className="size-8">
        <AvatarImage src="https://randomuser.me/api/portraits/women/32.jpg" alt="@reui" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-start-2 -top-2">
          <AvatarStatus variant="online" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>
      <Avatar className="size-10">
        <AvatarImage src="https://randomuser.me/api/portraits/women/32.jpg" alt="@reui" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-start-2 -top-2">
          <AvatarStatus variant="online" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>
      <Avatar className="size-14">
        <AvatarImage src="https://randomuser.me/api/portraits/women/32.jpg" alt="@reui" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-start-1 -top-1">
          <AvatarStatus variant="online" className="size-3" />
        </AvatarIndicator>
      </Avatar>
      <Avatar className="size-20">
        <AvatarImage src="https://randomuser.me/api/portraits/women/32.jpg" alt="@reui" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-start-px -top-px">
          <AvatarStatus variant="online" className="size-3" />
        </AvatarIndicator>
      </Avatar>
    </div>
  );
}

