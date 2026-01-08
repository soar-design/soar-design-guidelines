import { Button } from "@soar-design/soar-react-components"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@soar-design/soar-react-components"

export function ItemVariantDocsRTL() {
  return (
    <div className="flex flex-col gap-6" dir="rtl">
      <Item>
        <ItemContent>
          <ItemTitle>النوع الافتراضي</ItemTitle>
          <ItemDescription>
            تصميم قياسي بخلفية وحدود خفيفة.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            فتح
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>نوع الإطار</ItemTitle>
          <ItemDescription>
            نمط بإطار واضح وخلفية شفافة.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            فتح
          </Button>
        </ItemActions>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>النوع الخافت</ItemTitle>
          <ItemDescription>
            مظهر خافت بألوان مكتومة للمحتوى الثانوي.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            فتح
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}

