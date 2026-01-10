import { docsNavigation } from "./docs-navigation";

/**
 * Finds the navigation group (e.g., "Getting Started", "Components") for a given slug
 */
export function getDocGroup(slug: string): string | null {
  // Normalize the slug to match href format (e.g., "introduction" -> "/docs/introduction")
  const normalizedSlug = slug.startsWith("/docs/") ? slug : `/docs/${slug}`;

  for (const group of docsNavigation) {
    if (group.items) {
      for (const item of group.items) {
        if (item.href === normalizedSlug) {
          return group.title;
        }
      }
    }
  }

  return null;
}
