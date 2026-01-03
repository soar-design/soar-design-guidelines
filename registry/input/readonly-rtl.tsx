import { Input } from "@soar-design/soar-react-components";

export default function InputReadonly() {
  return (
    <div className="w-80" dir="rtl">
      <Input type="text" placeholder="للقراءة فقط" readOnly={true} value="إدخال للقراءة فقط" />
    </div>
  );
}

