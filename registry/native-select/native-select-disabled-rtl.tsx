import {
  NativeSelect,
  NativeSelectOption,
} from "@soar-design/soar-react-components"

export function NativeSelectDisabledDocsRTL() {
  return (
    <NativeSelect disabled dir="rtl">
      <NativeSelectOption value="">اختر الأولوية</NativeSelectOption>
      <NativeSelectOption value="low">منخفضة</NativeSelectOption>
      <NativeSelectOption value="medium">متوسطة</NativeSelectOption>
      <NativeSelectOption value="high">عالية</NativeSelectOption>
      <NativeSelectOption value="critical">حرجة</NativeSelectOption>
    </NativeSelect>
  )
}

