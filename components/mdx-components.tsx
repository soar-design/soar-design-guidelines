import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
  Kbd,
  Alert,
  AlertDescription,
} from "@soar-design/soar-react-components";
import { ComponentPreview as ComponentPreviewBase } from "@/components/component-preview";
import { getRegistryComponentSource } from "@/lib/registry-utils";
import * as CodeComponents from "@/components/mdx-code-components";

async function ComponentPreview({
  name,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { name: string }) {
  const code = await getRegistryComponentSource(name);
  return <ComponentPreviewBase name={name} code={code || ""} className={className} {...props} />;
}

export async function ComponentSource({
  name,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { name: string }) {
  const code = await getRegistryComponentSource(name);

  return (
    <div
      className={cn("overflow-hidden rounded-md border bg-zinc-950 text-white p-4", className)}
      {...props}
    >
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-sm">{code || `// Source code not found for ${name}`}</code>
      </pre>
    </div>
  );
}

export function Steps({ ...props }: React.ComponentProps<"div">) {
  return <div className="space-y-4" {...props} />;
}

export function Step({ ...props }: React.ComponentProps<"div">) {
  return <div className="font-medium" {...props} />;
}

export function PropsTable({ children }: React.ComponentProps<"table">) {
  return (
    <div className="w-full overflow-x-auto">
      <Table className="w-full text-sm">{children}</Table>
    </div>
  );
}

export function Callout({ children, ...props }: React.ComponentProps<typeof Alert>) {
  return (
    <Alert className="my-4" {...props}>
      <AlertDescription className="[&>p]:leading-7 [&>p:last-child]:mb-0">
        {children}
      </AlertDescription>
    </Alert>
  );
}

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className={cn("font-heading scroll-m-20 text-4xl font-bold", className)} {...props} />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "font-heading scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn("font-heading scroll-m-20 text-xl font-semibold tracking-tight", className)}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn("font-heading scroll-m-20 text-lg font-semibold tracking-tight", className)}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5 className={cn("scroll-m-20 text-lg font-semibold tracking-tight", className)} {...props} />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn("scroll-m-20 text-base font-semibold tracking-tight", className)}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className={cn("font-medium underline underline-offset-4", className)} {...props} />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("leading-7", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("ms-6 list-disc space-y-2", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("ms-6 list-decimal space-y-2", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote className={cn("border-s-2 ps-6 italic", className)} {...props} />
  ),
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn("m-0 border-t p-0 even:bg-muted", className)} {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: CodeComponents.pre,
  code: CodeComponents.code,
  ComponentPreview,
  ComponentSource,
  Steps,
  Step,
  PropsTable,
  Callout,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Kbd,
  Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
    <Tabs className={cn("relative w-full", className)} {...props} />
  ),
  TabsList: ({ className, ...props }: React.ComponentProps<typeof TabsList>) => (
    <TabsList
      className={cn("w-full justify-start rounded-none border-b bg-transparent p-0", className)}
      {...props}
    />
  ),
  TabsTrigger: ({ className, ...props }: React.ComponentProps<typeof TabsTrigger>) => (
    <TabsTrigger
      className={cn(
        "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",
        className
      )}
      {...props}
    />
  ),
  TabsContent: ({ className, ...props }: React.ComponentProps<typeof TabsContent>) => (
    <TabsContent
      className={cn(
        "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
        className
      )}
      {...props}
    />
  ),
  Stepper: ({ className, ...props }: React.ComponentProps<typeof Stepper>) => (
    <Stepper className={cn("", className)} {...props} />
  ),
  StepperNav: ({ className, ...props }: React.ComponentProps<typeof StepperNav>) => (
    <StepperNav className={cn("", className)} {...props} />
  ),
  StepperItem: ({ className, ...props }: React.ComponentProps<typeof StepperItem>) => (
    <StepperItem className={cn("", className)} {...props} />
  ),
  StepperTrigger: ({ className, ...props }: React.ComponentProps<typeof StepperTrigger>) => (
    <StepperTrigger className={cn("", className)} {...props} />
  ),
  StepperIndicator: ({ className, ...props }: React.ComponentProps<typeof StepperIndicator>) => (
    <StepperIndicator className={cn("", className)} {...props} />
  ),
  StepperTitle: ({ className, ...props }: React.ComponentProps<typeof StepperTitle>) => (
    <StepperTitle className={cn("", className)} {...props} />
  ),
  StepperSeparator: ({ className, ...props }: React.ComponentProps<typeof StepperSeparator>) => (
    <StepperSeparator className={cn("", className)} {...props} />
  ),
  StepperPanel: ({ className, ...props }: React.ComponentProps<typeof StepperPanel>) => (
    <StepperPanel className={cn("", className)} {...props} />
  ),
  StepperContent: ({ className, ...props }: React.ComponentProps<typeof StepperContent>) => (
    <StepperContent className={cn("", className)} {...props} />
  ),
};

export { components };
