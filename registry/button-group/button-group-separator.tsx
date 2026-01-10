import { Button } from "@soar-design/soar-react-components";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@soar-design/soar-react-components";

export function ButtonGroupSeparatorDocs() {
  return (
    <ButtonGroup>
      <Button variant="secondary" size="sm">
        Copy
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        Paste
      </Button>
    </ButtonGroup>
  );
}
