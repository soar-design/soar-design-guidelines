import { ShimmeringText } from "@soar-design/soar-react-components";

export default function ShimmeringTextSpread() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-muted-foreground">Narrow (spread=1)</p>
        <ShimmeringText
          text="Narrow Shimmer"
          spread={1}
          className="text-2xl font-bold"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-muted-foreground">Default (spread=2)</p>
        <ShimmeringText
          text="Normal Shimmer"
          spread={2}
          className="text-2xl font-bold"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-muted-foreground">Wide (spread=4)</p>
        <ShimmeringText
          text="Wide Shimmer"
          spread={4}
          className="text-2xl font-bold"
        />
      </div>
    </div>
  );
}

