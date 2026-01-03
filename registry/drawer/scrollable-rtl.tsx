import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  Button,
} from "@soar-design/soar-react-components";

export default function DrawerScrollable() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>فتح درج قابل للتمرير</Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80vh]" dir="rtl">
        <DrawerHeader>
          <DrawerTitle>شروط الخدمة</DrawerTitle>
          <DrawerDescription>
            يرجى قراءة شروط الخدمة الخاصة بنا بعناية.
          </DrawerDescription>
        </DrawerHeader>
        <div className="overflow-y-auto p-4">
          <div className="space-y-4">
            <section>
              <h4 className="font-semibold">1. المقدمة</h4>
              <p className="text-sm text-muted-foreground">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.
              </p>
            </section>
            <section>
              <h4 className="font-semibold">2. مسؤوليات المستخدم</h4>
              <p className="text-sm text-muted-foreground">
                المستخدم مسؤول عن الحفاظ على سرية معلومات حسابه وكلمة المرور الخاصة به. يجب على المستخدم إخطارنا فورًا بأي استخدام غير مصرح به لحسابه.
              </p>
            </section>
            <section>
              <h4 className="font-semibold">3. سياسة الخصوصية</h4>
              <p className="text-sm text-muted-foreground">
                نحن ملتزمون بحماية خصوصيتك. يتم جمع معلوماتك الشخصية واستخدامها وفقًا لسياسة الخصوصية الخاصة بنا.
              </p>
            </section>
            <section>
              <h4 className="font-semibold">4. جمع البيانات</h4>
              <p className="text-sm text-muted-foreground">
                نجمع البيانات اللازمة لتقديم خدماتنا وتحسين تجربتك. يتم تخزين بياناتك بشكل آمن ولا يتم مشاركتها مع أطراف ثالثة دون موافقتك.
              </p>
            </section>
            <section>
              <h4 className="font-semibold">5. الإنهاء</h4>
              <p className="text-sm text-muted-foreground">
                يحق لنا إنهاء أو تعليق حسابك في أي وقت بسبب انتهاك شروط الخدمة أو لأي سبب آخر نراه مناسبًا.
              </p>
            </section>
            <section>
              <h4 className="font-semibold">6. المسؤولية</h4>
              <p className="text-sm text-muted-foreground">
                لا نتحمل أي مسؤولية عن أي أضرار مباشرة أو غير مباشرة قد تنشأ عن استخدامك لخدماتنا.
              </p>
            </section>
          </div>
        </div>
        <DrawerFooter>
          <Button>قبول</Button>
          <DrawerClose asChild>
            <Button variant="outline">رفض</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

