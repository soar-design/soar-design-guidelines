"use client";

import { Slider, SliderThumb } from "@soar-design/soar-react-components";
import { useState } from "react";

export default function SliderColors() {
  const [red, setRed] = useState([255]);
  const [green, setGreen] = useState([128]);
  const [blue, setBlue] = useState([0]);

  const color = `rgb(${red[0]}, ${green[0]}, ${blue[0]})`;

  return (
    <div className="space-y-6">
      <div
        className="h-20 rounded-lg border"
        style={{ backgroundColor: color }}
      />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Red</span>
          <span className="text-sm text-muted-foreground">{red[0]}</span>
        </div>
        <Slider value={red} onValueChange={setRed} max={255} step={1}>
          <SliderThumb />
        </Slider>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Green</span>
          <span className="text-sm text-muted-foreground">{green[0]}</span>
        </div>
        <Slider value={green} onValueChange={setGreen} max={255} step={1}>
          <SliderThumb />
        </Slider>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Blue</span>
          <span className="text-sm text-muted-foreground">{blue[0]}</span>
        </div>
        <Slider value={blue} onValueChange={setBlue} max={255} step={1}>
          <SliderThumb />
        </Slider>
      </div>
    </div>
  );
}

