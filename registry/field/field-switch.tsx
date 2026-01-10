"use client";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@soar-design/soar-react-components";
import { Switch } from "@soar-design/soar-react-components";

export function FieldSwitchDocs() {
  return (
    <div className="w-full max-w-md">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
          <FieldDescription>
            Enable multi-factor authentication. If you do not have a two-factor
            device, you can use a one-time code sent to your email.
          </FieldDescription>
        </FieldContent>
        <Switch id="2fa" />
      </Field>
    </div>
  );
}
