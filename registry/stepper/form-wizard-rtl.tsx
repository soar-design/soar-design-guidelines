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

export default function StepperFormWizard() {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
  });

  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrev = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <Stepper value={activeStep} onValueChange={setActiveStep} dir="rtl">
      <StepperNav>
        <StepperItem step={1} completed={activeStep > 1}>
          <StepperTrigger>
            <StepperIndicator>1</StepperIndicator>
            <div>
              <StepperTitle>الحساب</StepperTitle>
              <StepperDescription>تفاصيل تسجيل الدخول</StepperDescription>
            </div>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={2} completed={activeStep > 2}>
          <StepperTrigger>
            <StepperIndicator>2</StepperIndicator>
            <div>
              <StepperTitle>الملف الشخصي</StepperTitle>
              <StepperDescription>معلومات شخصية</StepperDescription>
            </div>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>

        <StepperItem step={3}>
          <StepperTrigger>
            <StepperIndicator>3</StepperIndicator>
            <div>
              <StepperTitle>المراجعة</StepperTitle>
              <StepperDescription>تأكيد التفاصيل</StepperDescription>
            </div>
          </StepperTrigger>
        </StepperItem>
      </StepperNav>

      <StepperPanel className="mt-6">
        <StepperContent value={1}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <div className="flex justify-start">
              <Button onClick={handleNext}>متابعة</Button>
            </div>
          </div>
        </StepperContent>

        <StepperContent value={2}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">الاسم الكامل</Label>
              <Input
                id="name"
                placeholder="أحمد محمد"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">السيرة الذاتية</Label>
              <Input
                id="bio"
                placeholder="أخبرنا عن نفسك"
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
              />
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrev}>
                السابق
              </Button>
              <Button onClick={handleNext}>متابعة</Button>
            </div>
          </div>
        </StepperContent>

        <StepperContent value={3}>
          <div className="rounded-lg border bg-card p-6 text-card-foreground space-y-4">
            <h3 className="font-semibold mb-4">راجع معلوماتك</h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium">الاسم:</span> {formData.name || "غير مقدم"}
              </div>
              <div>
                <span className="font-medium">البريد الإلكتروني:</span> {formData.email || "غير مقدم"}
              </div>
              <div>
                <span className="font-medium">السيرة الذاتية:</span> {formData.bio || "غير مقدم"}
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrev}>
                السابق
              </Button>
              <Button>إرسال</Button>
            </div>
          </div>
        </StepperContent>
      </StepperPanel>
    </Stepper>
  );
}

