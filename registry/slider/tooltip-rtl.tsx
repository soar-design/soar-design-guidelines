'use client';

import { useEffect, useState } from 'react';
import { Slider, SliderThumb } from '@soar-design/soar-react-components';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@soar-design/soar-react-components';

export default function SliderDemo() {
  const [value, setValue] = useState<number[]>([100, 450]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="w-full md:w-[400px]" dir="rtl">
      <Slider
        defaultValue={[100, 450]}
        min={0}
        max={600}
        step={1}
        onValueChange={(val) => {
          setValue(val);
        }}
      >
        <TooltipProvider>
          <Tooltip open={isOpen}>
            <TooltipTrigger asChild>
              <SliderThumb />
            </TooltipTrigger>
            <TooltipContent side="top" forceMount>
              {value[1] ?? 0}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip open={isOpen}>
            <TooltipTrigger asChild>
              <SliderThumb />
            </TooltipTrigger>
            <TooltipContent side="top" forceMount>
              {value[1] ?? 0}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Slider>
    </div>
  );
}

