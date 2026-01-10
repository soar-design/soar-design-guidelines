import { Button } from "@soar-design/soar-react-components";
import { Spinner } from "@soar-design/soar-react-components";

export function ButtonLoadingDocs() {
  return (
    <Button size="sm" variant="outline" disabled>
      <Spinner />
      Submit
    </Button>
  );
}
