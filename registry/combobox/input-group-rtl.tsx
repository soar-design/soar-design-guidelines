"use client"

import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  DirectionProvider,
  InputGroupAddon,
} from "@soar-design/soar-react-components"
import { Globe } from "lucide-react"

const timezones = [
  {
    value: "الأمريكتان",
    items: [
      "(GMT-5) New York",
      "(GMT-8) Los Angeles",
      "(GMT-6) Chicago",
      "(GMT-5) Toronto",
      "(GMT-8) Vancouver",
      "(GMT-3) São Paulo",
    ],
  },
  {
    value: "أوروبا",
    items: [
      "(GMT+0) London",
      "(GMT+1) Paris",
      "(GMT+1) Berlin",
      "(GMT+1) Rome",
      "(GMT+1) Madrid",
      "(GMT+1) Amsterdam",
    ],
  },
  {
    value: "آسيا/المحيط الهادئ",
    items: [
      "(GMT+9) Tokyo",
      "(GMT+8) Shanghai",
      "(GMT+8) Singapore",
      "(GMT+4) Dubai",
      "(GMT+11) Sydney",
      "(GMT+9) Seoul",
    ],
  },
] as const

export function ComboxboxInputGroup() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto">
        <Combobox items={timezones}>
          <ComboboxInput placeholder="اختر المنطقة الزمنية">
            <InputGroupAddon>
              <Globe className="h-4 w-4" />
            </InputGroupAddon>
          </ComboboxInput>
          <ComboboxContent alignOffset={-28} className="w-60">
            <ComboboxEmpty>لم يتم العثور على مناطق زمنية.</ComboboxEmpty>
            <ComboboxList>
              {(group) => (
                <ComboboxGroup key={group.value} items={group.items}>
                  <ComboboxLabel>{group.value}</ComboboxLabel>
                  <ComboboxCollection>
                    {(item) => (
                      <ComboboxItem key={item} value={item}>
                        {item}
                      </ComboboxItem>
                    )}
                  </ComboboxCollection>
                </ComboboxGroup>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    </DirectionProvider>
  )
}
