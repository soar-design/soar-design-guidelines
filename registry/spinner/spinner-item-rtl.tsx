import { Button } from "@soar-design/soar-react-components";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemMedia,
  ItemTitle,
} from "@soar-design/soar-react-components";
import { Progress } from "@soar-design/soar-react-components";
import { Spinner } from "@soar-design/soar-react-components";

export function SpinnerItemDocsRTL() {
  return (
    <div
      className="flex w-full max-w-md flex-col gap-4 [--radius:1rem]"
      dir="rtl"
    >
      <Item variant="outline">
        <ItemMedia variant="icon">
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>جارٍ التنزيل...</ItemTitle>
          <ItemDescription>129 ميجابايت / 1000 ميجابايت</ItemDescription>
        </ItemContent>
        <ItemActions className="hidden sm:flex">
          <Button variant="outline" size="sm">
            إلغاء
          </Button>
        </ItemActions>
        <ItemFooter>
          <Progress value={75} />
        </ItemFooter>
      </Item>
    </div>
  );
}
