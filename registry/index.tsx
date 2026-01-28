import * as React from "react";
import { AccordionDemo } from "./accordion/demo";
import { AccordionDemo as AccordionDemoRTL } from "./accordion/demo-rtl";
import { AccordionBasic } from "./accordion/basic";
import { AccordionBasic as AccordionBasicRTL } from "./accordion/basic-rtl";
import { AccordionMultiple } from "./accordion/multiple";
import { AccordionMultiple as AccordionMultipleRTL } from "./accordion/multiple-rtl";
import { AccordionDisabled } from "./accordion/disabled";
import { AccordionDisabled as AccordionDisabledRTL } from "./accordion/disabled-rtl";
import { AccordionBorders } from "./accordion/borders";
import { AccordionBorders as AccordionBordersRTL } from "./accordion/borders-rtl";
import { AccordionCard } from "./accordion/card";
import { AccordionCard as AccordionCardRTL } from "./accordion/card-rtl";

export const registry: Record<string, React.ComponentType> = {
  "accordion-demo": AccordionDemo,
  "accordion-demo-rtl": AccordionDemoRTL,
  "accordion-basic": AccordionBasic,
  "accordion-basic-rtl": AccordionBasicRTL,
  "accordion-multiple": AccordionMultiple,
  "accordion-multiple-rtl": AccordionMultipleRTL,
  "accordion-disabled": AccordionDisabled,
  "accordion-disabled-rtl": AccordionDisabledRTL,
  "accordion-borders": AccordionBorders,
  "accordion-borders-rtl": AccordionBordersRTL,
  "accordion-card": AccordionCard,
  "accordion-card-rtl": AccordionCardRTL,
};
