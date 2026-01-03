import { Badge } from "@soar-design/soar-react-components";

export default function BadgeAppearances() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Badge variant="primary" appearance="default">
          Default
        </Badge>
        <Badge variant="secondary" appearance="default">
          Default
        </Badge>
        <Badge variant="success" appearance="default">
          Default
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="primary" appearance="outline">
          Outline
        </Badge>
        <Badge variant="secondary" appearance="outline">
          Outline
        </Badge>
        <Badge variant="success" appearance="outline">
          Outline
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="primary" appearance="light">
          Light
        </Badge>
        <Badge variant="secondary" appearance="light">
          Light
        </Badge>
        <Badge variant="success" appearance="light">
          Light
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="primary" appearance="ghost">
          Ghost
        </Badge>
        <Badge variant="secondary" appearance="ghost">
          Ghost
        </Badge>
        <Badge variant="success" appearance="ghost">
          Ghost
        </Badge>
      </div>
    </div>
  );
}
