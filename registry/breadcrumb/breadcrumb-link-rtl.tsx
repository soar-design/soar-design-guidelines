import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink as BreadcrumbLinkComponent,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@soar-design/soar-react-components";

export function BreadcrumbLinkDocsRTL() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLinkComponent asChild>
            <Link href="#">الرئيسية</Link>
          </BreadcrumbLinkComponent>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLinkComponent asChild>
            <Link href="#">المكونات</Link>
          </BreadcrumbLinkComponent>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>مسار التنقل</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
