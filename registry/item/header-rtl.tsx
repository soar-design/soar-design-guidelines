"use client"

import * as React from "react"
import Image from "next/image"
import {
  DirectionProvider,
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@soar-design/soar-react-components"

const models = [
  {
    name: "v0-1.5-sm",
    description: "المهام اليومية وإنشاء واجهة المستخدم.",
    image:
      "https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop",
    credit: "Valeria Reverdo on Unsplash",
  },
  {
    name: "v0-1.5-lg",
    description: "التفكير المتقدم أو الاستدلال.",
    image:
      "https://images.unsplash.com/photo-1610280777472-54133d004c8c?q=80&w=640&auto=format&fit=crop",
    credit: "Michael Oeser on Unsplash",
  },
  {
    name: "v0-2.0-mini",
    description: "نموذج مفتوح المصدر للجميع.",
    image:
      "https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop",
    credit: "Cherry Laithang on Unsplash",
  },
]

export function ItemHeaderDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex w-full max-w-xl flex-col gap-6">
          <ItemGroup className="grid grid-cols-3 gap-4">
            {models.map((model) => (
              <Item key={model.name} variant="outline">
                <ItemHeader>
                  <Image
                    src={model.image}
                    alt={model.name}
                    width={128}
                    height={128}
                    className="aspect-square w-full rounded-sm object-cover"
                  />
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>{model.name}</ItemTitle>
                  <ItemDescription>{model.description}</ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        </div>
      </div>
    </DirectionProvider>
  )
}
