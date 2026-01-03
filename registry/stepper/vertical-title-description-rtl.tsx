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
} from "@soar-design/soar-react-components";
import { Check, LoaderCircleIcon } from "lucide-react";

const steps = [
  {
    title: "الخطوة 1",
    description: "وصف للخطوة 1",
  },
  {
    title: "الخطوة 2",
    description: "وصف للخطوة 2",
  },
  {
    title: "الخطوة 3",
    description: "وصف للخطوة 3",
  },
];

export default function Component() {
  return (
    <div className="flex items-center justify-center" dir="rtl">
      <Stepper
        className="flex flex-col items-center justify-center gap-10"
        defaultValue={2}
        orientation="vertical"
        indicators={{
          completed: <Check className="size-4" />,
          loading: <LoaderCircleIcon className="size-4 animate-spin" />,
        }}
      >
        <StepperNav>
          {steps.map((step, index) => (
            <StepperItem
              key={index}
              step={index + 1}
              loading={index === 2}
              className="relative items-start not-last:flex-1"
            >
              <StepperTrigger className="items-start pb-12 last:pb-0 gap-2.5">
                <StepperIndicator className="data-[state=completed]:bg-green-500 data-[state=completed]:text-white data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:text-gray-500">
                  {index + 1}
                </StepperIndicator>
                <div className="mt-0.5 text-right">
                  <StepperTitle>{step.title}</StepperTitle>
                  <StepperDescription>{step.description}</StepperDescription>
                </div>
              </StepperTrigger>
              {index < steps.length - 1 && (
                <StepperSeparator className="absolute top-7 right-3 -order-1 m-0 translate-x-1/2 group-data-[orientation=vertical]/stepper-nav:h-[calc(100%-2rem)] group-data-[state=completed]/step:bg-green-500" />
              )}
            </StepperItem>
          ))}
        </StepperNav>

        <StepperPanel className="text-sm w-56 text-center">
          {steps.map((step, index) => (
            <StepperContent key={index} value={index + 1}>
              محتوى {step.title}
            </StepperContent>
          ))}
        </StepperPanel>
      </Stepper>
    </div>
  );
}

