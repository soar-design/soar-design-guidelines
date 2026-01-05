import * as React from "react";
import { ComponentPreviewTabs } from "@/components/component-preview-tabs";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { components } from "@/components/mdx-components";
import { getRegistryComponentSource } from "@/lib/registry-utils";

interface ComponentPreviewProps {
  name: string;
  code?: string;
  className?: string;
}

function renderCodeBlock(code: string) {
  return (
    <MDXRemote
      source={`\`\`\`tsx\n${code.trim()}\n\`\`\``}
      components={components}
      options={{
        mdxOptions: {
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: {
                  dark: "github-dark-dimmed",
                  light: "github-light",
                },
                keepBackground: false,
                defaultLang: "tsx",
                onVisitLine(node: any) {
                  if (node.children.length === 0) {
                    node.children = [{ type: "text", value: " " }];
                  }
                },
                onVisitHighlightedLine(node: any) {
                  if (!node.properties) {
                    node.properties = {};
                  }
                  if (!node.properties.className) {
                    node.properties.className = [];
                  }
                  node.properties.className.push("highlighted");
                },
                onVisitHighlightedChars(node: any) {
                  node.properties.className = ["word"];
                },
              },
            ],
          ],
        },
      }}
    />
  );
}

export async function ComponentPreview({
  name,
  code,
  className,
}: ComponentPreviewProps) {
  // Fetch LTR code (use provided code or fetch from registry)
  const ltrCode = code || (await getRegistryComponentSource(name)) || "";
  
  // Check if RTL version exists
  const rtlName = `${name}-rtl`;
  const rtlCode = await getRegistryComponentSource(rtlName);
  
  const ltrCodeBlock = ltrCode && ltrCode.trim() ? renderCodeBlock(ltrCode) : null;
  const rtlCodeBlock = rtlCode && rtlCode.trim() ? renderCodeBlock(rtlCode) : null;

  return (
    <ComponentPreviewTabs
      name={name}
      ltrCodeBlock={ltrCodeBlock}
      rtlCodeBlock={rtlCodeBlock}
      className={className}
    />
  );
}

export function useComponentPreview() {
  // This hook provides RTL state for component previews
  // The RTL toggle is handled at the preview wrapper level
  return { rtl: false };
}
