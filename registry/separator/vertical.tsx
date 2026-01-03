import { Separator } from "@soar-design/soar-react-components";

export default function SeparatorVertical() {
  return (
    <div className="flex h-20 items-center space-x-4">
      <div className="flex flex-col items-center justify-center space-y-1">
        <div className="text-2xl font-bold">12</div>
        <div className="text-xs text-muted-foreground">Posts</div>
      </div>
      <Separator orientation="vertical" />
      <div className="flex flex-col items-center justify-center space-y-1">
        <div className="text-2xl font-bold">1.2k</div>
        <div className="text-xs text-muted-foreground">Followers</div>
      </div>
      <Separator orientation="vertical" />
      <div className="flex flex-col items-center justify-center space-y-1">
        <div className="text-2xl font-bold">345</div>
        <div className="text-xs text-muted-foreground">Following</div>
      </div>
    </div>
  );
}

