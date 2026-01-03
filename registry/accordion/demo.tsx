"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@soar-design/soar-react-components";

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full lg:w-[75%]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. The accordion component adheres to the WAI-ARIA design pattern and
          provides full keyboard navigation support. It includes proper ARIA
          attributes, screen reader announcements, and follows accessibility best
          practices. Users can navigate through accordion items using arrow keys,
          expand and collapse items with Space or Enter, and all interactive
          elements are properly focusable.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. The accordion comes with default styles that match the other
          components in the design system. It includes three visual variants:
          default, outline, and solid. You can customize the appearance using
          the variant prop, and all styles are fully customizable through CSS
          classes. The component also supports custom indicators (arrow or plus)
          to match your design language.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. The accordion is animated by default with smooth expand and
          collapse transitions. The animations are performant and use CSS
          transitions for optimal performance. You can customize the animation
          timing and easing functions, or disable animations entirely if you
          prefer a more immediate interaction. The component handles animation
          states automatically, ensuring a polished user experience.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
