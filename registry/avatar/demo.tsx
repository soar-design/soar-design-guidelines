import { Avatar, AvatarFallback, AvatarImage } from "@soar-design/soar-react-components";

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="@reui" />
      <AvatarFallback>CH</AvatarFallback>
    </Avatar>
  );
}
