import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@soar-design/soar-react-components";
import { Button } from "@soar-design/soar-react-components";

export default function PaginationWithText() {
  return (
    <Pagination dir="rtl">
      <PaginationContent>
        <PaginationItem>
          <Button variant="outline">السابق</Button>
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
          <Button variant="outline">التالي</Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

