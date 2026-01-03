import { CountingNumber } from "@soar-design/soar-react-components";

export default function Component() {
  return (
    <div className="flex items-center justify-center">
      <CountingNumber
        from={0}
        to={500}
        duration={3}
        className="text-4xl font-bold"
        format={(value) => `${Math.round(value)}K`}
      />
    </div>
  );
}

