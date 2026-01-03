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
  { title: "الخطوة 1", description: "وصف للخطوة 1" },
  { title: "الخطوة 2", description: "وصف للخطوة 2" },
  { title: "الخطوة 3", description: "وصف للخطوة 3" },
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
          <StepperItem key={index} step={index + 1} className="relative flex-1 items-start">
            <StepperTrigger className="flex flex-col gap-2.5">
              <StepperIndicator>{index + 1}</StepperIndicator>
              <StepperTitle>{step.title}</StepperTitle>
              <StepperDescription>{step.description}</StepperDescription>
            </StepperTrigger>

            {steps.length > index + 1 && (
              <StepperSeparator className="absolute top-3 right-[calc(50%+0.875rem)] m-0 group-data-[orientation=horizontal]/stepper-nav:w-[calc(100%-2rem+0.225rem)] group-data-[orientation=horizontal]/stepper-nav:flex-none group-data-[state=completed]/step:bg-primary" />
            )}
          </StepperItem>
        ))}
      </StepperNav>

      <StepperPanel className="text-sm">
        {steps.map((step, index) => (
          <StepperContent
            key={index}
            value={index + 1}
            className="flex items-center justify-center"
          >
            محتوى {step.title}
          </StepperContent>
        ))}
      </StepperPanel>
    </Stepper>
  );
}

