import {
  Stepper,
  StepperContent,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from '@soar-design/soar-react-components';
import { Check, LoaderCircleIcon } from 'lucide-react';

const steps = [
  { title: 'الخطوة 1', description: 'وصف للخطوة 1' },
  { title: 'الخطوة 2', description: 'وصف للخطوة 2' },
  { title: 'الخطوة 3', description: 'وصف للخطوة 3' },
];

export default function Component() {
  return (
    <Stepper
      defaultValue={2}
      indicators={{
        completed: <Check className="size-4" />,
        loading: <LoaderCircleIcon className="size-4 animate-spin" />,
      }}
      className="space-y-8"
      dir="rtl"
    >
      <StepperNav>
        {steps.map((step, index) => (
          <StepperItem key={index} step={index + 1} className="relative">
            <StepperTrigger className="flex justify-start gap-1.5">
              <StepperIndicator>{index + 1}</StepperIndicator>
              <div className="flex flex-col items-start gap-0.5">
                <StepperTitle>{step.title}</StepperTitle>
                <StepperDescription>{step.description}</StepperDescription>
              </div>
            </StepperTrigger>

            {steps.length > index + 1 && <StepperSeparator className="md:mx-2.5" />}
          </StepperItem>
        ))}
      </StepperNav>

      <StepperPanel className="text-sm">
        {steps.map((step, index) => (
          <StepperContent key={index} value={index + 1} className="flex items-center justify-center">
            محتوى {step.title}
          </StepperContent>
        ))}
      </StepperPanel>
    </Stepper>
  );
}

