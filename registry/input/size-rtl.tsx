import { Input } from "@soar-design/soar-react-components";

export default function InputSize() {
  return (
    <div className="w-80 space-y-6" dir="rtl">
      <Input type="text" variant="sm" placeholder="صغير" />

      <Input type="text" variant="md" placeholder="متوسط" />

      <Input type="text" variant="lg" placeholder="كبير" />
    </div>
  );
}
