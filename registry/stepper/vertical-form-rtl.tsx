"use client";

import {
  Stepper,
  StepperNav,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
  StepperPanel,
  StepperContent,
  Button,
  Input,
  Label,
} from "@soar-design/soar-react-components";
import { useState } from "react";
import { User, Building, FileText, Check } from "lucide-react";

export default function StepperVerticalForm() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Stepper
      value={activeStep}
      onValueChange={setActiveStep}
      orientation="vertical"
      indicators={{
        active: <User className="h-3 w-3" />,
        completed: <Check className="h-3 w-3" />,
      }}
      dir="rtl"
    >
      <div className="flex gap-6">
        <StepperNav>
          <StepperItem step={1} completed={activeStep > 1}>
            <StepperTrigger>
              <StepperIndicator />
              <div>
                <StepperTitle>شخصي</StepperTitle>
                <StepperDescription>تفاصيلك</StepperDescription>
              </div>
            </StepperTrigger>
            <StepperSeparator />
          </StepperItem>

          <StepperItem step={2} completed={activeStep > 2}>
            <StepperTrigger>
              <StepperIndicator />
              <div>
                <StepperTitle>الشركة</StepperTitle>
                <StepperDescription>معلومات المؤسسة</StepperDescription>
              </div>
            </StepperTrigger>
            <StepperSeparator />
          </StepperItem>

          <StepperItem step={3} completed={activeStep > 3}>
            <StepperTrigger>
              <StepperIndicator />
              <div>
                <StepperTitle>المستندات</StepperTitle>
                <StepperDescription>رفع الملفات</StepperDescription>
              </div>
            </StepperTrigger>
            <StepperSeparator />
          </StepperItem>

          <StepperItem step={4}>
            <StepperTrigger>
              <StepperIndicator />
              <div>
                <StepperTitle>تم</StepperTitle>
                <StepperDescription>كل شيء جاهز!</StepperDescription>
              </div>
            </StepperTrigger>
          </StepperItem>
        </StepperNav>

        <StepperPanel className="flex-1">
          <StepperContent value={1}>
            <div className="rounded-lg border bg-card p-6 text-card-foreground space-y-4">
              <div className="space-y-2">
                <Label>الاسم الكامل</Label>
                <Input placeholder="أحمد محمد" />
              </div>
              <div className="space-y-2">
                <Label>البريد الإلكتروني</Label>
                <Input type="email" placeholder="ahmed@example.com" />
              </div>
              <Button onClick={() => setActiveStep(2)}>متابعة</Button>
            </div>
          </StepperContent>

          <StepperContent value={2}>
            <div className="rounded-lg border bg-card p-6 text-card-foreground space-y-4">
              <div className="space-y-2">
                <Label>اسم الشركة</Label>
                <Input placeholder="شركة أكما" />
              </div>
              <div className="space-y-2">
                <Label>المنصب</Label>
                <Input placeholder="مهندس برمجيات" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setActiveStep(1)}>
                  السابق
                </Button>
                <Button onClick={() => setActiveStep(3)}>متابعة</Button>
              </div>
            </div>
          </StepperContent>

          <StepperContent value={3}>
            <div className="rounded-lg border bg-card p-6 text-card-foreground space-y-4">
              <div className="space-y-2">
                <Label>رفع المستندات</Label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center text-sm text-muted-foreground">
                  اسحب الملفات هنا أو انقر للرفع
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setActiveStep(2)}>
                  السابق
                </Button>
                <Button onClick={() => setActiveStep(4)}>متابعة</Button>
              </div>
            </div>
          </StepperContent>

          <StepperContent value={4}>
            <div className="rounded-lg border bg-card p-6 text-card-foreground space-y-4">
              <div className="flex items-center gap-2 text-green-600">
                <Check className="h-5 w-5" />
                <h3 className="font-semibold">اكتمل الإعداد!</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                حسابك جاهز للاستخدام.
              </p>
              <Button onClick={() => setActiveStep(1)}>ابدأ من جديد</Button>
            </div>
          </StepperContent>
        </StepperPanel>
      </div>
    </Stepper>
  );
}

