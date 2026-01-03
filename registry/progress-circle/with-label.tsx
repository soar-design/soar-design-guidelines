import { ProgressCircle } from "@soar-design/soar-react-components";

export default function ProgressCircleWithLabel() {
  return (
    <div className="flex items-center justify-center gap-8">
      <ProgressCircle value={25}>25%</ProgressCircle>
      <ProgressCircle value={50}>50%</ProgressCircle>
      <ProgressCircle value={75}>75%</ProgressCircle>
    </div>
  );
}

