import Link from 'next/link';
import { Button } from '@soar-design/soar-react-components';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem } from '@soar-design/soar-react-components';
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PaginationIcon() {
  return (
    <Pagination dir="rtl">
      <PaginationContent>
        <PaginationItem>
          <Button variant="ghost" mode="icon" asChild disabled>
            <Link href="#">
              <ChevronFirst className="rtl:rotate-180" />
            </Link>
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="ghost" mode="icon" asChild disabled>
            <Link href="#">
              <ChevronLeft className="rtl:rotate-180" />
            </Link>
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="ghost" mode="icon" asChild>
            <Link href="#">1</Link>
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="outline" mode="icon" asChild>
            <Link href="#">2</Link>
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="ghost" mode="icon" asChild>
            <Link href="#">3</Link>
          </Button>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <Button variant="ghost" mode="icon" asChild>
            <Link href="#">
              <ChevronRight className="rtl:rotate-180" />
            </Link>
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant="ghost" mode="icon" asChild>
            <Link href="#">
              <ChevronLast className="rtl:rotate-180" />
            </Link>
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

