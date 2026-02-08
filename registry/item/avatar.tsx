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
  ItemMedia,
  ItemTitle,
} from "@soar-design/soar-react-components"
import { Plus } from "lucide-react"

export function ItemAvatar() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex w-full max-w-lg flex-col gap-6">
          <Item variant="outline">
            <ItemMedia>
              <Avatar className="size-10">
                <AvatarImage src="https://github.com/evilrabbit.png" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Evil Rabbit</ItemTitle>
              <ItemDescription>Last seen 5 months ago</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button
                size="icon-sm"
                variant="secondary"
                className="rounded-full"
                aria-label="Invite"
              >
                <Plus />
              </Button>
            </ItemActions>
          </Item>
          <Item variant="outline">
            <ItemMedia>
              <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                <Avatar className="hidden sm:flex">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="hidden sm:flex">
                  <AvatarImage
                    src="https://github.com/maxleiter.png"
                    alt="@maxleiter"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </div>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>No Team Members</ItemTitle>
              <ItemDescription>
                Invite your team to collaborate on this project.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="secondary">
                Invite
              </Button>
            </ItemActions>
          </Item>
        </div>
      </div>
    </DirectionProvider>
  )
}
