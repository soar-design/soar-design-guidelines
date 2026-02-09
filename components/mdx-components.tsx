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
  return (
    <ComponentPreviewBase
      name={name}
      code={code || ""}
      className={className}
      {...props}
    />
  );
}

export async function ComponentSource({
  name,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { name: string }) {
  const code = await getRegistryComponentSource(name);

  return (
    <div
      className={cn(
        "rounded-md bg-zinc-950 p-4 text-white overflow-hidden border",
        className,
      )}
      {...props}
    >
      <pre className="p-4 overflow-x-auto">
        <code className="font-mono text-sm">
          {code || `// Source code not found for ${name}`}
        </code>
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
      <Table className="text-sm w-full [&_tbody]:font-mono">{children}</Table>
    </div>
  );
}

export function Callout({
  children,
  ...props
}: React.ComponentProps<typeof Alert>) {
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
    <h1
      className={cn("font-heading scroll-m-20 text-4xl font-bold", className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "font-heading scroll-m-20 pb-2 text-2xl font-semibold tracking-tight border-b",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "font-heading scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "font-heading scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  a: ({
    className,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("leading-7", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("ms-6 space-y-2 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("ms-6 space-y-2 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn("ps-6 border-s-2 italic", className)}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
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
    <tr
      className={cn("even:bg-muted m-0 p-0 border-t", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "px-4 py-2 font-bold border text-left [[align=center]]:text-center [[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "px-4 py-2 border text-left [[align=center]]:text-center [[align=right]]:text-right",
        className,
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
  TabsList: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsList>) => (
    <TabsList
      className={cn(
        "p-0 w-full justify-start rounded-none border-b bg-transparent",
        className,
      )}
      {...props}
    />
  ),
  TabsTrigger: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsTrigger>) => (
    <TabsTrigger
      className={cn(
        "text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground h-9 px-4 pt-2 pb-3 font-semibold relative rounded-none border-b-2 border-b-transparent bg-transparent shadow-none transition-none data-[state=active]:shadow-none",
        className,
      )}
      {...props}
    />
  ),
  TabsContent: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsContent>) => (
    <TabsContent
      className={cn(
        "[&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold relative",
        className,
      )}
      {...props}
    />
  ),
};

export { components };
