"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  DirectionProvider,
} from "@soar-design/soar-react-components"

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const

export function ComboboxDisabled() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto">
        <Combobox items={frameworks}>
          <ComboboxInput placeholder="اختر إطار عمل" disabled />
          <ComboboxContent>
            <ComboboxEmpty>لم يتم العثور على عناصر.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    </DirectionProvider>
  )
}
