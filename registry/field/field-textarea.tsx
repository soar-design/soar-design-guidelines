"use client";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@soar-design/soar-react-components";
import { Textarea } from "@soar-design/soar-react-components";

export function FieldTextareaDocs() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
            <Textarea
              id="feedback"
              placeholder="Your feedback helps us improve..."
              rows={4}
            />
            <FieldDescription>
              Share your thoughts about our service.
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
