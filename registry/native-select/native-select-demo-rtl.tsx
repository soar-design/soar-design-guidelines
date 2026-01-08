import {
  NativeSelect,
  NativeSelectOption,
} from "@soar-design/soar-react-components"

export function NativeSelectDemoDocsRTL() {
  return (
    <NativeSelect dir="rtl">
      <NativeSelectOption value="">اختر الحالة</NativeSelectOption>
      <NativeSelectOption value="todo">مهام</NativeSelectOption>
      <NativeSelectOption value="in-progress">قيد التنفيذ</NativeSelectOption>
      <NativeSelectOption value="done">منجز</NativeSelectOption>
      <NativeSelectOption value="cancelled">ملغي</NativeSelectOption>
    </NativeSelect>
  )
}

