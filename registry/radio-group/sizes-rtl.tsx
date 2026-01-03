'use client';

import { useId } from 'react';
import { Label, RadioGroup, RadioGroupItem } from "@soar-design/soar-react-components";

export default function RadioGroupDemo() {
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
  const id21 = useId();
  const id22 = useId();
  const id23 = useId();
  const id31 = useId();
  const id32 = useId();
  const id33 = useId();

  return (
    <div className="flex flex-wrap gap-10" dir="rtl">
      <RadioGroup defaultValue="intermediate" size="sm" dir="rtl">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <RadioGroupItem value="beginner" id={id1} />
          <Label htmlFor={id1} variant="secondary">
            صغير 1
          </Label>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <RadioGroupItem value="intermediate" id={id2} />
          <Label htmlFor={id2} variant="secondary">
            صغير 2
          </Label>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <RadioGroupItem value="advanced" id={id3} />
          <Label htmlFor={id3} variant="secondary">
            صغير 3
          </Label>
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="intermediate" dir="rtl">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <RadioGroupItem value="beginner" id={id21} />
          <Label htmlFor={id21} variant="secondary">
            متوسط 1
          </Label>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <RadioGroupItem value="intermediate" id={id22} />
          <Label htmlFor={id22} variant="secondary">
            متوسط 2
          </Label>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <RadioGroupItem value="advanced" id={id23} />
          <Label htmlFor={id23} variant="secondary">
            متوسط 3
          </Label>
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="intermediate" size="lg" dir="rtl">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <RadioGroupItem value="beginner" id={id31} />
          <Label htmlFor={id31} variant="secondary">
            كبير 1
          </Label>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <RadioGroupItem value="intermediate" id={id32} />
          <Label htmlFor={id32} variant="secondary">
            كبير 2
          </Label>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <RadioGroupItem value="advanced" id={id33} />
          <Label htmlFor={id33} variant="secondary">
            كبير 3
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}

