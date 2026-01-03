import { ShimmeringText } from "@soar-design/soar-react-components";

export default function ShimmeringTextCustomColors() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-muted-foreground">Blue shimmer</p>
        <ShimmeringText
          text="Blue Shimmer Effect"
          color="#3b82f6"
          shimmerColor="#60a5fa"
          className="text-2xl font-bold"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-muted-foreground">Purple shimmer</p>
        <ShimmeringText
          text="Purple Shimmer Effect"
          color="#a855f7"
          shimmerColor="#c084fc"
          className="text-2xl font-bold"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-muted-foreground">Green shimmer</p>
        <ShimmeringText
          text="Green Shimmer Effect"
          color="#22c55e"
          shimmerColor="#4ade80"
          className="text-2xl font-bold"
        />
      </div>
    </div>
  );
}

