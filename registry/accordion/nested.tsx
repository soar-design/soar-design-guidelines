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
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. The accordion component adheres to the WAI-ARIA design pattern and
          provides full keyboard navigation support. It includes proper ARIA
          attributes, screen reader announcements, and follows accessibility best
          practices.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. The accordion comes with default styles that match the other
          components in the design system. It includes three visual variants:
          default, outline, and solid.
          <Accordion type="single" variant="outline" collapsible className="mt-4">
            <AccordionItem value="nested-1">
              <AccordionTrigger>How can I customize the appearance?</AccordionTrigger>
              <AccordionContent>
                You can customize the appearance using the variant prop, and all
                styles are fully customizable through CSS classes. The component
                also supports custom indicators (arrow or plus) to match your
                design language.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="nested-2">
              <AccordionTrigger>What variants are available?</AccordionTrigger>
              <AccordionContent>
                The accordion supports three variants: default for minimal styling,
                outline for bordered items, and solid for background-filled items.
                Each variant can be customized further with CSS classes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. The accordion is animated by default with smooth expand and
          collapse transitions. The animations are performant and use CSS
          transitions for optimal performance.
          <Accordion type="single" variant="outline" collapsible className="mt-4">
            <AccordionItem value="nested-3">
              <AccordionTrigger>Can I customize the animations?</AccordionTrigger>
              <AccordionContent>
                Yes! You can customize the animation timing and easing functions,
                or disable animations entirely if you prefer a more immediate
                interaction. The component handles animation states automatically.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="nested-4">
              <AccordionTrigger>How do the animations work?</AccordionTrigger>
              <AccordionContent>
                The accordion uses CSS transitions for smooth height animations
                when expanding and collapsing. The animations are hardware-accelerated
                for optimal performance across all devices and browsers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

