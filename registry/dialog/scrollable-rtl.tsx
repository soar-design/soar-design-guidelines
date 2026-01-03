"use client";

import { Button } from "@soar-design/soar-react-components";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@soar-design/soar-react-components";
import { ScrollArea } from "@soar-design/soar-react-components";

export default function DialogScrollable() {
  const faqSections = [
    {
      title: "إدارة الحساب",
      content:
        "انتقل إلى صفحة التسجيل، وقدم المعلومات المطلوبة، وتحقق من عنوان بريدك الإلكتروني. يمكنك التسجيل باستخدام بريدك الإلكتروني أو من خلال منصات وسائل التواصل الاجتماعي.",
    },
    {
      title: "الدفع والفواتير",
      content:
        "نقبل جميع بطاقات الائتمان الرئيسية، وباي بال، والتحويلات المصرفية. إذا واجهت مشاكل، تحقق من تفاصيل الدفع الخاصة بك أو اتصل بفريق الدعم لدينا.",
    },
    {
      title: "خطط الاشتراك",
      content:
        "اختر خطة تناسب احتياجاتك. قم بالترقية أو التخفيض أو الإلغاء في أي وقت من صفحة إعدادات الاشتراك في حسابك.",
    },
    {
      title: "الدعم الفني",
      content:
        "فريق الدعم لدينا متاح على مدار الساعة طوال أيام الأسبوع عبر الدردشة المباشرة أو البريد الإلكتروني. تحقق من مركز المساعدة للحصول على أدلة استكشاف الأخطاء وإصلاحها ونصائح.",
    },
    {
      title: "الخصوصية والأمان",
      content:
        "يتم تشفير بياناتك وتخزينها بأمان. نحن نلتزم بـ GDPR واللوائح الأخرى المتعلقة بالخصوصية لحماية معلوماتك.",
    },
    {
      title: "طلبات الميزات",
      content:
        "هل لديك أفكار لميزات جديدة؟ أرسل طلبك عبر نموذج الملاحظات في التطبيق أو اتصل بنا مباشرة.",
    },
    {
      title: "سياسة الاسترداد",
      content:
        "إذا لم تكن راضيًا عن شرائك، يمكنك طلب استرداد الأموال خلال 14 يومًا. يرجى مراجعة سياسة الاسترداد الخاصة بنا لمزيد من التفاصيل.",
    },
    {
      title: "دعم التطبيق المحمول",
      content:
        "منصتنا متوافقة بالكامل مع أجهزة iOS و Android. قم بتنزيل تطبيقنا من App Store أو Google Play.",
    },
    {
      title: "أدوار المستخدمين والأذونات",
      content:
        "يمكن للمسؤولين تعيين الأدوار والأذونات للمستخدمين الآخرين. تحدد هذه الأدوار مستوى الوصول داخل المنصة.",
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">عرض الحوار</Button>
      </DialogTrigger>
      <DialogContent
        className="p-0 sm:max-w-lg sm:max-h-[min(650px,80vh)]"
        dir="rtl"
      >
        <DialogHeader className="pt-5 pb-3 m-0 border-b border-border">
          <DialogTitle className="px-6 text-base">
            الأسئلة الشائعة (FAQ)
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ScrollArea className="text-sm h-[480px] my-3 ps-6 pe-5 me-1">
          <div className="space-y-4 [&_h3]:font-semibold [&_h3]:text-foreground">
            {faqSections.map((faq, index) => (
              <div key={index} className="text-accent-foreground space-y-1">
                <h3>{faq.title}</h3>
                <p>{faq.content}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
        <DialogFooter className="px-6 py-4 border-t border-border">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              إلغاء
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button">موافق</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

