import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@soar-design/soar-react-components";

export function ItemLinkDocsRTL() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4" dir="rtl">
      <Item asChild>
        <a href="#">
          <ItemContent>
            <ItemTitle>زيارة وثائقنا</ItemTitle>
            <ItemDescription>تعلم كيفية البدء مع مكوناتنا.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
      <Item variant="outline" asChild>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <ItemContent>
            <ItemTitle>مورد خارجي</ItemTitle>
            <ItemDescription>
              يفتح في علامة تبويب جديدة مع خصائص الأمان.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <ExternalLinkIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  );
}
