import React, { useState } from 'react';
import { Button } from '@soar-design/soar-react-components';
import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperTrigger,
} from '@soar-design/soar-react-components';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StepperProgress() {
  const steps = [1, 2, 3, 4];
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="w-full flex flex-col" dir="rtl">
      <Stepper value={currentStep} onValueChange={setCurrentStep}>
        <StepperNav>
          {steps.map((step) => (
            <StepperItem
              key={step}
              step={step}
              className="flex-1 first:rounded-e-full last:rounded-s-full overflow-hidden transition-all duration-300"
            >
              <StepperTrigger className="w-full flex-col items-start gap-2" asChild>
                <StepperIndicator className="bg-border h-2 w-full rounded-none">
                  <span className="sr-only">{step}</span>
                </StepperIndicator>
              </StepperTrigger>
            </StepperItem>
          ))}
        </StepperNav>

        <div className="flex items-center justify-between gap-2.5 py-2">
          <Button
            mode="link"
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className={cn(currentStep === 1 && 'pointer-events-none opacity-0')}
          >
            <ArrowRight className="rtl:rotate-180" /> السابق
          </Button>

          <div className="text-sm font-medium">
            <span className="text-foreground">{currentStep}</span>{' '}
            <span className="text-muted-foreground/60">/ {steps.length}</span>
          </div>
        </div>

        <StepperPanel className="text-sm py-12">
          {steps.map((step) => (
            <StepperContent className="w-full flex items-center justify-center" key={step} value={step}>
              محتوى الخطوة {step}
            </StepperContent>
          ))}
        </StepperPanel>

        <div className="flex items-center justify-start gap-2.5">
          <Button
            variant="outline"
            onClick={() => setCurrentStep((prev) => prev + 1)}
            disabled={currentStep === steps.length}
          >
            التالي
          </Button>
        </div>
      </Stepper>
    </div>
  );
}

