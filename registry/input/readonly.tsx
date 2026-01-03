import { Input } from "@soar-design/soar-react-components";

export default function InputReadonly() {
  return (
    <div className="w-80">
      <Input type="text" placeholder="Readonly" readOnly={true} value="Readonly input" />
    </div>
  );
}


