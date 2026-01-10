import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@soar-design/soar-react-components";

export function NativeSelectGroupsDocsRTL() {
  return (
    <NativeSelect dir="rtl">
      <NativeSelectOption value="">اختر القسم</NativeSelectOption>
      <NativeSelectOptGroup label="الهندسة">
        <NativeSelectOption value="frontend">واجهة أمامية</NativeSelectOption>
        <NativeSelectOption value="backend">خلفية</NativeSelectOption>
        <NativeSelectOption value="devops">DevOps</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="المبيعات">
        <NativeSelectOption value="sales-rep">مندوب مبيعات</NativeSelectOption>
        <NativeSelectOption value="account-manager">
          مدير الحسابات
        </NativeSelectOption>
        <NativeSelectOption value="sales-director">
          مدير المبيعات
        </NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="العمليات">
        <NativeSelectOption value="support">دعم العملاء</NativeSelectOption>
        <NativeSelectOption value="product-manager">
          مدير المنتج
        </NativeSelectOption>
        <NativeSelectOption value="ops-manager">
          مدير العمليات
        </NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  );
}
