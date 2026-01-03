import { ProgressRadial } from "@soar-design/soar-react-components";
import { Battery, Wifi, Signal } from "lucide-react";

export default function ProgressRadialCustomContent() {
  return (
    <div className="flex items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <ProgressRadial value={75} size={100}>
          <Battery className="h-6 w-6" />
        </ProgressRadial>
        <span className="text-xs text-muted-foreground">Battery</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressRadial value={90} size={100}>
          <Wifi className="h-6 w-6" />
        </ProgressRadial>
        <span className="text-xs text-muted-foreground">WiFi</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressRadial value={50} size={100}>
          <Signal className="h-6 w-6" />
        </ProgressRadial>
        <span className="text-xs text-muted-foreground">Signal</span>
      </div>
    </div>
  );
}

