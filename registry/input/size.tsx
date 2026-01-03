import { Input } from "@soar-design/soar-react-components";

export default function InputSize() {
  return (
    <div className="w-80 space-y-6">
      <Input type="text" variant="sm" placeholder="Small" />

      <Input type="text" variant="md" placeholder="Medium" />

      <Input type="text" variant="lg" placeholder="Large" />
    </div>
  );
}
