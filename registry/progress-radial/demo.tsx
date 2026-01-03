import { ProgressRadial } from "@soar-design/soar-react-components";

export default function ProgressRadialDemo() {
  return (
    <div className="flex items-center justify-center gap-8">
      <ProgressRadial value={0} showLabel />
      <ProgressRadial value={25} showLabel />
      <ProgressRadial value={50} showLabel />
      <ProgressRadial value={75} showLabel />
      <ProgressRadial value={100} showLabel />
    </div>
  );
}

