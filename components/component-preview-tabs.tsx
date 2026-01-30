"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Toggle,
} from "@soar-design/soar-react-components";
import { registry } from "@/registry";

interface ComponentPreviewTabsProps extends React.ComponentProps<typeof Tabs> {
  name: string;
  ltrCodeBlock?: React.ReactNode;
  rtlCodeBlock?: React.ReactNode;
}

export function ComponentPreviewTabs({
  name,
  ltrCodeBlock,
  rtlCodeBlock,
  className,
  ...props
}: ComponentPreviewTabsProps) {
  const [isRTL, setIsRTL] = React.useState(false);
  const previewRef = React.useRef<HTMLDivElement>(null);

  // Check if RTL version exists
  const rtlName = `${name}-rtl`;
  const RTLComponent = registry[rtlName];
  const LTRComponent = registry[name];

  // Use RTL component if RTL is enabled and exists, otherwise use LTR component
  const Component = isRTL && RTLComponent ? RTLComponent : LTRComponent;

  // Use RTL code if RTL is enabled and exists, otherwise use LTR code
  const codeBlock = isRTL && rtlCodeBlock ? rtlCodeBlock : ltrCodeBlock;

  // Check if this is a sidebar component that needs special isolation
  const isSidebarComponent = name.startsWith("sidebar-");

  // Handle keyboard event isolation for sidebar components
  React.useEffect(() => {
    if (!isSidebarComponent || !previewRef.current) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (previewRef.current?.contains(e.target as Node)) {
        if ((e.metaKey || e.ctrlKey) && e.key === "b") {
          e.stopImmediatePropagation();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => {
      document.removeEventListener("keydown", handleKeyDown, { capture: true });
    };
  }, [isSidebarComponent]);

  return (
    <Tabs
      defaultValue="preview"
      className={cn("group my-4 space-y-2 relative flex flex-col", className)}
      {...props}
    >
      <div className="mb-3 gap-2 flex items-center">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <Toggle
          pressed={isRTL}
          onPressedChange={setIsRTL}
          size="lg"
          className="px-3 ms-auto rounded-full"
        >
          RTL
        </Toggle>
      </div>
      <TabsContent
        value="preview"
        className={cn(
          "border-border relative rounded-[26px] border-4",
          isSidebarComponent && "overflow-hidden",
        )}
      >
        <div
          ref={previewRef}
          className={cn(
            "min-h-[350px]",
            isSidebarComponent
              ? "p-0 isolate"
              : "p-10 flex items-center justify-center",
          )}
          dir={isRTL ? "rtl" : "ltr"}
          onKeyDownCapture={
            isSidebarComponent
              ? (e) => {
                  if ((e.metaKey || e.ctrlKey) && e.key === "b") {
                    e.stopPropagation();
                  }
                }
              : undefined
          }
          // For sidebar components, use CSS containment to isolate
          style={
            isSidebarComponent
              ? {
                  isolation: "isolate",
                  contain: "layout style paint",
                }
              : undefined
          }
        >
          {Component ? (
            <Component key={isRTL ? `${name}-rtl` : name} />
          ) : (
            <div className="text-muted-foreground text-sm">
              Component <code className="bg-muted rounded p-1">{name}</code>{" "}
              not found in registry.
            </div>
          )}
        </div>
      </TabsContent>
      <TabsContent value="code" key={`code-${isRTL ? "rtl" : "ltr"}`}>
        {codeBlock}
      </TabsContent>
    </Tabs>
  );
}
