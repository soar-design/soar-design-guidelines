"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Toggle,
  DirectionProvider,
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
      className={cn("group relative my-4 flex flex-col space-y-2", className)}
      {...props}
    >
      <div className="flex items-center gap-2 mb-3">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <Toggle
          pressed={isRTL}
          onPressedChange={setIsRTL}
          size="lg"
          className="ms-auto rounded-full px-3"
        >
          RTL
        </Toggle>
      </div>
      <TabsContent
        value="preview"
        className={cn(
          "relative rounded-[26px] border-4 border-border",
          isSidebarComponent && "overflow-hidden"
        )}
      >
        <DirectionProvider dir={isRTL ? "rtl" : "ltr"}>
          <div
            ref={previewRef}
            className={cn(
              "min-h-[350px]",
              isSidebarComponent ? "isolate p-0" : "flex items-center justify-center p-10"
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
              <div className="text-sm text-muted-foreground">
                Component <code className="bg-muted p-1 rounded">{name}</code> not found in
                registry.
              </div>
            )}
          </div>
        </DirectionProvider>
      </TabsContent>
      <TabsContent value="code" key={`code-${isRTL ? "rtl" : "ltr"}`}>
        {codeBlock}
      </TabsContent>
    </Tabs>
  );
}
