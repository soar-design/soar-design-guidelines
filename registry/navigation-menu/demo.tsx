'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@soar-design/soar-react-components';
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-react';

const items: { title: string; href: string; description: string }[] = [
  {
    title: 'About Us',
    href: '/about',
    description: 'Learn more about our company and our mission to serve you better.',
  },
  {
    title: 'Our Services',
    href: '/services',
    description: 'Discover the wide range of services we offer to meet your needs.',
  },
  {
    title: 'Contact',
    href: '/contact',
    description: 'Get in touch with our team for any questions or inquiries.',
  },
  {
    title: 'Blog',
    href: '/blog',
    description: 'Read our latest articles and stay updated with news and insights.',
  },
  {
    title: 'Careers',
    href: '/careers',
    description: 'Explore exciting career opportunities and join our growing team.',
  },
  {
    title: 'Support',
    href: '/support',
    description: 'Find answers to common questions and get the help you need.',
  },
];

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function Component() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">Welcome</div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Discover everything we have to offer and find what you're looking for.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/getting-started" title="Getting Started">
                New here? Start your journey with us and learn the basics.
              </ListItem>
              <ListItem href="/features" title="Features">
                Explore all the features and benefits we provide.
              </ListItem>
              <ListItem href="/pricing" title="Pricing">
                Find the perfect plan that fits your needs and budget.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {items.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/learn-more">Learn More</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Quick Links</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Products</div>
                    <div className="text-muted-foreground">Browse our complete product catalog.</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Guides</div>
                    <div className="text-muted-foreground">Step-by-step guides to help you succeed.</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">News</div>
                    <div className="text-muted-foreground">Stay informed with our latest updates.</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Products</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Services</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">About</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleHelpIcon className="size-4" />
                    Help Center
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleIcon className="size-4" />
                    My Account
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleCheckIcon className="size-4" />
                    Completed
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
