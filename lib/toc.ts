import GithubSlugger from "github-slugger";

export interface TocItem {
  title: string;
  url: string;
  items?: TocItem[];
}

export interface DashboardTableOfContentsProps {
  toc: TocItem[];
}

export async function getTableOfContents(content: string): Promise<TocItem[]> {
  const slugger = new GithubSlugger();
  const regexp = new RegExp(/^(#{2,3})\s+(.+)$/gm);
  const headings = Array.from(content.matchAll(regexp));

  if (headings.length === 0) {
    return [];
  }

  const toc: TocItem[] = [];
  let currentH2: TocItem | null = null;

  for (const match of headings) {
    const level = match[1].length;
    const text = match[2].trim();
    const slug = slugger.slug(text);
    const item: TocItem = {
      title: text,
      url: `#${slug}`,
      items: [],
    };

    if (level === 2) {
      toc.push(item);
      currentH2 = item;
    } else if (level === 3 && currentH2) {
      currentH2.items?.push(item);
    }
  }

  return toc;
}
