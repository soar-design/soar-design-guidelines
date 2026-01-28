export interface NavItem {
  title: string;
  href?: string;
  items?: NavItem[];
}

export const docsNavigation: NavItem[] = [
  {
    title: "Components",
    items: [
      {
        title: "Accordion",
        href: "/docs/components/accordion",
      },
    ],
  },
];
