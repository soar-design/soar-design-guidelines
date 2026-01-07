import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink as BreadcrumbLinkComponent,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@soar-design/soar-react-components"

export function BreadcrumbLink() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLinkComponent asChild>
            <Link href="#">Home</Link>
          </BreadcrumbLinkComponent>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLinkComponent asChild>
            <Link href="#">Components</Link>
          </BreadcrumbLinkComponent>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
