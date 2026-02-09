"use client"

import {
  Button,
  DirectionProvider,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@soar-design/soar-react-components"

export function PopoverForm() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">فتح النافذة المنبثقة</Button>
          </PopoverTrigger>
          <PopoverContent className="w-64" align="start">
            <PopoverHeader>
              <PopoverTitle>الأبعاد</PopoverTitle>
              <PopoverDescription>
                قم بتعيين الأبعاد للطبقة.
              </PopoverDescription>
            </PopoverHeader>
            <FieldGroup className="gap-4">
              <Field orientation="horizontal">
                <FieldLabel htmlFor="width" className="w-1/2">
                  العرض
                </FieldLabel>
                <Input id="width" defaultValue="100%" />
              </Field>
              <Field orientation="horizontal">
                <FieldLabel htmlFor="height" className="w-1/2">
                  الارتفاع
                </FieldLabel>
                <Input id="height" defaultValue="25px" />
              </Field>
            </FieldGroup>
          </PopoverContent>
        </Popover>
      </div>
    </DirectionProvider>
  )
}
