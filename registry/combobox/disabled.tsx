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
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto">
        <Combobox items={frameworks}>
          <ComboboxInput placeholder="Select a framework" disabled />
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
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
