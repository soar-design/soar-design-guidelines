import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@soar-design/soar-react-components";
import { Button } from "@soar-design/soar-react-components";

export default function PaginationSimple() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button variant="outline">1</Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline">2</Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline">3</Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline">4</Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline">5</Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

