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

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
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
      <div className="min-w-0 flex flex-1 flex-col">
        <div className="max-w-5xl min-w-0 gap-8 px-6 py-6 lg:py-8 mx-auto flex w-full flex-1 flex-col">
          <div className="space-y-2">
            {group && (
              <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                {group}
              </p>
            )}
            <h1 className="scroll-m-20 text-4xl font-bold">{doc.title}</h1>
            {doc.description && (
              <p className="text-muted-foreground text-lg">{doc.description}</p>
            )}
            {doc.links && (
              <div className="gap-2 pt-4 flex items-center">
                {doc.links.doc && (
                  <a
                    href={doc.links.doc}
                    target="_blank"
                    rel="noreferrer"
                    className="focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 rounded-md px-2.5 py-0.5 text-xs font-semibold inline-flex items-center border border-transparent transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                  >
                    Docs
                  </a>
                )}
                {doc.links.api && (
                  <a
                    href={doc.links.api}
                    target="_blank"
                    rel="noreferrer"
                    className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md px-2.5 py-0.5 text-xs font-semibold inline-flex items-center border border-transparent transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                  >
                    API Reference
                  </a>
                )}
              </div>
            )}
          </div>
          <div className="prose prose-neutral dark:prose-invert space-y-6 [&>h2]:mt-12 [&>h2]:first:mt-0 [&>h3]:mt-8 [&>h4]:mt-8 [&>h5]:mt-8 [&>h6]:mt-8 max-w-none">
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
          </div>
        </div>
        <div className="from-background via-background/50 bottom-0 pointer-events-none sticky z-10 -mt-[20px] h-[100px] shrink-0 bg-gradient-to-t to-transparent"></div>
      </div>
      <div className="top-16 w-72 xl:flex sticky z-30 ms-auto hidden h-[calc(100vh-4rem)] flex-col">
        <DashboardTableOfContents toc={toc} />
      </div>
    </div>
  );
}
