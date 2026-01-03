import { ProgressCircle } from "@soar-design/soar-react-components";

export default function ProgressCircleDemo() {
  return (
    <div className="flex items-center justify-center gap-8">
      <ProgressCircle value={0} />
      <ProgressCircle value={25} />
      <ProgressCircle value={50} />
      <ProgressCircle value={75} />
      <ProgressCircle value={100} />
    </div>
  );
}

