import { ShimmeringText } from "@soar-design/soar-react-components";

export default function ShimmeringTextWithDelay() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-muted-foreground">No delay</p>
        <ShimmeringText
          text="Immediate Start"
          delay={0}
          className="text-2xl font-bold"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-muted-foreground">0.5s delay</p>
        <ShimmeringText
          text="Delayed Start"
          delay={0.5}
          className="text-2xl font-bold"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-muted-foreground">1s delay</p>
        <ShimmeringText
          text="Later Start"
          delay={1}
          className="text-2xl font-bold"
        />
      </div>
    </div>
  );
}

