import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@soar-design/soar-react-components";
import { Button } from "@soar-design/soar-react-components";

export default function PaginationWithText() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button variant="outline">Previous</Button>
        </PaginationItem>
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
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline">10</Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline">Next</Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

