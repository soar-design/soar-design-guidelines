"use client"

import * as React from "react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DirectionProvider,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@soar-design/soar-react-components"
import { PlusIcon } from "lucide-react"

const people = [
  {
    username: "shadcn",
    avatar: "https://github.com/shadcn.png",
    email: "shadcn@vercel.com",
  },
  {
    username: "maxleiter",
    avatar: "https://github.com/maxleiter.png",
    email: "maxleiter@vercel.com",
  },
  {
    username: "evilrabbit",
    avatar: "https://github.com/evilrabbit.png",
    email: "evilrabbit@vercel.com",
  },
]

export function ItemGroupExample() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <ItemGroup className="max-w-sm">
          {people.map((person, index) => (
            <Item key={person.username} variant="muted">
              <ItemMedia>
                <Avatar>
                  <AvatarImage src={person.avatar} className="grayscale" />
                  <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent className="gap-1">
                <ItemTitle>{person.username}</ItemTitle>
                <ItemDescription>{person.email}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <PlusIcon />
                </Button>
              </ItemActions>
            </Item>
          ))}
        </ItemGroup>
      </div>
    </DirectionProvider>
  )
}
