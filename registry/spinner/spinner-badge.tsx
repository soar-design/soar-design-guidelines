import { Badge } from "@soar-design/soar-react-components";
import { Spinner } from "@soar-design/soar-react-components";

export function SpinnerBadgeDocs() {
  return (
    <div className="flex items-center gap-4 [--radius:1.2rem]">
      <Badge>
        <Spinner />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner />
        Updating
      </Badge>
      <Badge variant="outline">
        <Spinner />
        Processing
      </Badge>
    </div>
  );
}
