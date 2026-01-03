import { ShimmeringText } from "@soar-design/soar-react-components";

export default function ShimmeringTextDurations() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-muted-foreground">Fast (1s)</p>
        <ShimmeringText
          text="Quick Shimmer"
          duration={1}
          className="text-2xl font-bold"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-muted-foreground">Default (2s)</p>
        <ShimmeringText
          text="Normal Speed"
          duration={2}
          className="text-2xl font-bold"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-muted-foreground">Slow (4s)</p>
        <ShimmeringText
          text="Slow Shimmer"
          duration={4}
          className="text-2xl font-bold"
        />
      </div>
    </div>
  );
}

