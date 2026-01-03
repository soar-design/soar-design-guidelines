import { Badge } from "@soar-design/soar-react-components";

export default function BadgeShapes() {
  return (
    <div className="flex items-center gap-4">
      <Badge shape="default">Default Shape</Badge>
      <Badge shape="circle" className="h-10 w-10 flex items-center justify-center p-0">
        99
      </Badge>
      <Badge
        shape="circle"
        className="h-10 w-10 flex items-center justify-center p-0"
        variant="destructive"
      >
        5
      </Badge>
      <Badge
        shape="circle"
        className="h-8 w-8 flex items-center justify-center p-0 text-xs"
        variant="success"
      >
        3
      </Badge>
    </div>
  );
}
