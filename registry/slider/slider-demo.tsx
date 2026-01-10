import * as React from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@soar-design/soar-react-components";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderDemoDocs({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  );
}
