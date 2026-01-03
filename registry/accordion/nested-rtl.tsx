"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@soar-design/soar-react-components";

export default function AccordionNested() {
  return (
    <Accordion type="single" variant="outline" collapsible className="w-full lg:w-[75%]">
      <AccordionItem value="item-1">
        <AccordionTrigger>هل يمكن الوصول إليه؟</AccordionTrigger>
        <AccordionContent>
          نعم. يلتزم مكون الأكورديون بنمط تصميم WAI-ARIA ويوفر دعمًا كاملاً للتنقل
          بلوحة المفاتيح. يتضمن سمات ARIA المناسبة وإعلانات قارئ الشاشة ويتبع أفضل
          ممارسات إمكانية الوصول.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>هل هو مصمم؟</AccordionTrigger>
        <AccordionContent>
          نعم. يأتي الأكورديون بأنماط افتراضية تتطابق مع المكونات الأخرى في نظام
          التصميم. يتضمن ثلاثة متغيرات بصرية: الافتراضي والحدودي والصلب.
          <Accordion type="single" variant="outline" collapsible className="mt-4">
            <AccordionItem value="nested-1">
              <AccordionTrigger>كيف يمكنني تخصيص المظهر؟</AccordionTrigger>
              <AccordionContent>
                يمكنك تخصيص المظهر باستخدام خاصية المتغير، وجميع الأنماط قابلة للتخصيص
                بالكامل من خلال فئات CSS. يدعم المكون أيضًا مؤشرات مخصصة (سهم أو علامة
                زائد) لتتناسب مع لغة التصميم الخاصة بك.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="nested-2">
              <AccordionTrigger>ما المتغيرات المتاحة؟</AccordionTrigger>
              <AccordionContent>
                يدعم الأكورديون ثلاثة متغيرات: الافتراضي للتصميم البسيط، والحدودي
                للعناصر المحددة، والصلب للعناصر المملوءة بالخلفية. يمكن تخصيص كل
                متغير بشكل أكبر باستخدام فئات CSS.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>هل هو متحرك؟</AccordionTrigger>
        <AccordionContent>
          نعم. الأكورديون متحرك افتراضيًا مع انتقالات سلسة للتوسيع والطي. الرسوم
          المتحركة عالية الأداء وتستخدم انتقالات CSS للأداء الأمثل.
          <Accordion type="single" variant="outline" collapsible className="mt-4">
            <AccordionItem value="nested-3">
              <AccordionTrigger>هل يمكنني تخصيص الرسوم المتحركة؟</AccordionTrigger>
              <AccordionContent>
                نعم! يمكنك تخصيص توقيت الرسوم المتحركة ووظائف التخفيف، أو تعطيل
                الرسوم المتحركة بالكامل إذا كنت تفضل تفاعلًا فوريًا. يتعامل المكون مع
                حالات الرسوم المتحركة تلقائيًا.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="nested-4">
              <AccordionTrigger>كيف تعمل الرسوم المتحركة؟</AccordionTrigger>
              <AccordionContent>
                يستخدم الأكورديون انتقالات CSS لرسوم متحركة سلسة للارتفاع عند التوسيع
                والطي. الرسوم المتحركة معجلة بالأجهزة للأداء الأمثل عبر جميع الأجهزة
                والمتصفحات.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

