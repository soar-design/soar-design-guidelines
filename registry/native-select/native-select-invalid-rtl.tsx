import {
  NativeSelect,
  NativeSelectOption,
} from "@soar-design/soar-react-components";

export function NativeSelectInvalidDocsRTL() {
  return (
    <NativeSelect aria-invalid="true" dir="rtl">
      <NativeSelectOption value="">اختر الدور</NativeSelectOption>
      <NativeSelectOption value="admin">مدير</NativeSelectOption>
      <NativeSelectOption value="editor">محرر</NativeSelectOption>
      <NativeSelectOption value="viewer">عارض</NativeSelectOption>
      <NativeSelectOption value="guest">ضيف</NativeSelectOption>
    </NativeSelect>
  );
}
