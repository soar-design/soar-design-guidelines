"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@soar-design/soar-react-components";

export default function AccordionIndicator() {
  return (
    <Accordion type="single" collapsible indicator="plus" className="w-full lg:w-[75%]">
      <AccordionItem value="item-1">
        <AccordionTrigger>هل يمكن الوصول إليه؟</AccordionTrigger>
        <AccordionContent>
          نعم. يلتزم مكون الأكورديون بنمط تصميم WAI-ARIA ويوفر دعمًا كاملاً للتنقل
          بلوحة المفاتيح. يتضمن سمات ARIA المناسبة وإعلانات قارئ الشاشة ويتبع أفضل
          ممارسات إمكانية الوصول. يمكن للمستخدمين التنقل عبر عناصر الأكورديون باستخدام
          مفاتيح الأسهم، وتوسيع وطي العناصر باستخدام Space أو Enter، وجميع العناصر
          التفاعلية قابلة للتركيز بشكل صحيح.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>هل هو مصمم؟</AccordionTrigger>
        <AccordionContent>
          نعم. يأتي الأكورديون بأنماط افتراضية تتطابق مع المكونات الأخرى في نظام
          التصميم. يتضمن ثلاثة متغيرات بصرية: الافتراضي والحدودي والصلب. يمكنك تخصيص
          المظهر باستخدام خاصية المتغير، وجميع الأنماط قابلة للتخصيص بالكامل من خلال
          فئات CSS. يدعم المكون أيضًا مؤشرات مخصصة (سهم أو علامة زائد) لتتناسب مع لغة
          التصميم الخاصة بك.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>هل هو متحرك؟</AccordionTrigger>
        <AccordionContent>
          نعم. الأكورديون متحرك افتراضيًا مع انتقالات سلسة للتوسيع والطي. الرسوم
          المتحركة عالية الأداء وتستخدم انتقالات CSS للأداء الأمثل. يمكنك تخصيص توقيت
          الرسوم المتحركة ووظائف التخفيف، أو تعطيل الرسوم المتحركة بالكامل إذا كنت تفضل
          تفاعلًا فوريًا. يتعامل المكون مع حالات الرسوم المتحركة تلقائيًا، مما يضمن
          تجربة مستخدم مصقولة.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

