import { Avatar, AvatarFallback, AvatarImage } from "@soar-design/soar-react-components";

export default function AvatarDemo() {
  return (
    <div className="flex items-center rounded-full p-0.5 gap-1.5 border border-border shadow-sm shadow-black/5">
      <div className="flex -space-x-1">
        <Avatar className="size-7">
          <AvatarImage src="https://randomuser.me/api/portraits/women/32.jpg" alt="@reui" className="border-2 border-background hover:z-10" />
          <AvatarFallback>CH</AvatarFallback>
        </Avatar>
        <Avatar className="size-7">
          <AvatarImage src="https://randomuser.me/api/portraits/women/68.jpg" alt="@reui" className="border-2 border-background hover:z-10" />
          <AvatarFallback>CH</AvatarFallback>
        </Avatar>
        <Avatar className="size-7">
          <AvatarImage src="https://randomuser.me/api/portraits/men/51.jpg" alt="@reui" className="border-2 border-background hover:z-10" />
          <AvatarFallback>CH</AvatarFallback>
        </Avatar>
        <Avatar className="size-7">
          <AvatarImage src="https://randomuser.me/api/portraits/men/33.jpg" alt="@reui" className="border-2 border-background hover:z-10" />
          <AvatarFallback>CH</AvatarFallback>
        </Avatar>
      </div>

      <p className="text-xs text-muted-foreground ms-1.5">
        موثوق به من قبل <span className="font-semibold text-foreground">100K+</span> مستخدم.
      </p>
    </div>
  );
}
