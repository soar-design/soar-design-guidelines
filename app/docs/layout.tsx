import { LayoutShell } from "@/components/layout-shell";
import "../globals.css";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutShell>{children}</LayoutShell>;
}
