'use client';

import { useId } from 'react';
import { Label, RadioGroup, RadioGroupItem } from "@soar-design/soar-react-components";

export default function RadioGroupDemo() {
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();

  return (
    <RadioGroup defaultValue="intermediate" dir="rtl">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <RadioGroupItem value="default" id={id1} />
        <Label htmlFor={id1} variant="secondary">
          افتراضي
        </Label>
      </div>
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <RadioGroupItem value="disabled" id={id2} disabled />
        <Label htmlFor={id2} variant="secondary">
          معطل
        </Label>
      </div>
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <RadioGroupItem value="another" id={id3} />
        <Label htmlFor={id3} variant="secondary">
          آخر
        </Label>
      </div>
    </RadioGroup>
  );
}

