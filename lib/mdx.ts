import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "content/docs");

export interface Doc {
  slug: string;
  title: string;
  description: string;
  content: string;
  featured?: boolean;
  links?: {
    doc?: string;
    api?: string;
  };
}

/**
 * Removes the Credits section and everything after it from markdown content
 */
function removeCreditsSection(content: string): string {
  const creditsRegex = /^## Credits$/gm;
  const match = creditsRegex.exec(content);
  
  if (match) {
    return content.substring(0, match.index).trimEnd();
  }
  
  return content;
}

export async function getDocBySlug(slug: string): Promise<Doc | null> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(docsDirectory, `${realSlug}.mdx`);

  try {
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const cleanedContent = removeCreditsSection(content);

    return {
      slug: realSlug,
      title: data.title,
      description: data.description,
      content: cleanedContent,
      featured: data.featured,
      links: data.links,
    };
  } catch (error) {
    return null;
  }
}
