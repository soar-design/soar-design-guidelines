import { Badge } from "@soar-design/soar-react-components";

export default function BadgeDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-4">
        <Badge variant="primary" size="xs">
          صغير جداً
        </Badge>
        <Badge variant="primary" size="sm">
          صغير
        </Badge>
        <Badge variant="primary">متوسط</Badge>
        <Badge variant="primary" size="lg">
          كبير
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="primary" shape="circle" size="xs">
          5
        </Badge>
        <Badge variant="primary" shape="circle" size="sm">
          5
        </Badge>
        <Badge variant="primary" shape="circle">
          5
        </Badge>
        <Badge variant="primary" shape="circle" size="lg">
          5
        </Badge>
      </div>
    </div>
  );
}

