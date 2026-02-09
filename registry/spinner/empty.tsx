"use client"

import {
  Button,
  DirectionProvider,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  Spinner,
} from "@soar-design/soar-react-components"

export function SpinnerEmpty() {
  return (
    <DirectionProvider dir="ltr">
      <Empty className="w-full">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Spinner />
          </EmptyMedia>
          <EmptyTitle>Processing your request</EmptyTitle>
          <EmptyDescription>
            Please wait while we process your request. Do not refresh the page.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="secondary" size="sm">
            Cancel
          </Button>
        </EmptyContent>
      </Empty>
    </DirectionProvider>
  )
}
