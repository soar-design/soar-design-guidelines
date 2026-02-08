"use client"

import * as React from "react"
import {
  Button,
  DirectionProvider,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  Input,
} from "@soar-design/soar-react-components"

export function FieldResponsive() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <form className="w-full">
          <FieldSet>
            <FieldLegend>Profile</FieldLegend>
            <FieldDescription>Fill in your profile information.</FieldDescription>
            <FieldGroup>
              <Field orientation="responsive">
                <FieldContent>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <FieldDescription>
                    Provide your full name for identification
                  </FieldDescription>
                </FieldContent>
                <Input id="name" placeholder="Evil Rabbit" required />
              </Field>
              <Field orientation="responsive">
                <Button type="submit">Submit</Button>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </Field>
            </FieldGroup>
          </FieldSet>
        </form>
      </div>
    </DirectionProvider>
  )
}
