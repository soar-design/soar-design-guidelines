import { getDocBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { components } from "@/components/mdx-components";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getTableOfContents } from "@/lib/toc";
import { DashboardTableOfContents } from "@/components/toc";
import { getDocGroup } from "@/lib/get-doc-group";

export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug: slugArray } = await params;
  const slug = slugArray?.join("/") || "";
  const doc = await getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const toc = await getTableOfContents(doc.content);
  const group = getDocGroup(slug);

  return (
    <div className="flex items-stretch">
      <div className="flex flex-1 min-w-0 flex-col">
        <div className="mx-auto flex w-full max-w-5xl min-w-0 flex-1 flex-col gap-8 px-6 py-6 lg:py-8">
          <div className="space-y-2">
            {group && (
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {group}
              </p>
            )}
            <h1 className="scroll-m-20 text-4xl font-bold">{doc.title}</h1>
            {doc.description && <p className="text-lg text-muted-foreground">{doc.description}</p>}
            {doc.links && (
              <div className="flex items-center gap-2 pt-4">
                {doc.links.doc && (
                  <a
                    href={doc.links.doc}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                  >
                    Docs
                  </a>
                )}
                {doc.links.api && (
                  <a
                    href={doc.links.api}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  >
                    API Reference
                  </a>
                )}
              </div>
            )}
          </div>
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 [&>h2]:mt-12 [&>h2]:first:mt-0 [&>h3]:mt-8 [&>h4]:mt-8 [&>h5]:mt-8 [&>h6]:mt-8">
            <MDXRemote
              source={doc.content}
              components={components}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [
                      rehypePrettyCode,
                      {
                        theme: {
                          dark: "github-dark-dimmed",
                          light: "github-light",
                        },
                        keepBackground: false,
                        defaultLang: "plaintext",
                        onVisitLine(node: any) {
                          // Prevent lines from collapsing in `display: grid` mode, and allow empty
                          // lines to be copy/pasted
                          if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }];
                          }
                        },
                        onVisitHighlightedLine(node: any) {
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
          </div>
        </div>
        <div className="pointer-events-none sticky bottom-0 z-10 -mt-[20px] h-[100px] shrink-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>
      <div className="hidden lg:flex sticky top-16 z-30 ms-auto w-72 flex-col h-[calc(100vh-4rem)]">
        <DashboardTableOfContents toc={toc} />
      </div>
    </div>
  );
}
