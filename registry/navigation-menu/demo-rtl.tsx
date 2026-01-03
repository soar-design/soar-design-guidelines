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
    title: 'من نحن',
    href: '/about',
    description: 'تعرف على المزيد حول شركتنا ومهمتنا لخدمتك بشكل أفضل.',
  },
  {
    title: 'خدماتنا',
    href: '/services',
    description: 'اكتشف مجموعة واسعة من الخدمات التي نقدمها لتلبية احتياجاتك.',
  },
  {
    title: 'اتصل بنا',
    href: '/contact',
    description: 'تواصل مع فريقنا لأي أسئلة أو استفسارات.',
  },
  {
    title: 'المدونة',
    href: '/blog',
    description: 'اقرأ أحدث مقالاتنا وابق على اطلاع بالأخبار والرؤى.',
  },
  {
    title: 'الوظائف',
    href: '/careers',
    description: 'استكشف فرص العمل المثيرة وانضم إلى فريقنا المتنامي.',
  },
  {
    title: 'الدعم',
    href: '/support',
    description: 'ابحث عن إجابات للأسئلة الشائعة واحصل على المساعدة التي تحتاجها.',
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
    <NavigationMenu viewport={false} dir="rtl">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>الرئيسية</NavigationMenuTrigger>
          <NavigationMenuContent dir="rtl">
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">مرحبًا</div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      اكتشف كل ما نقدمه وابحث عما تبحث عنه.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/getting-started" title="البدء">
                جديد هنا؟ ابدأ رحلتك معنا وتعلم الأساسيات.
              </ListItem>
              <ListItem href="/features" title="الميزات">
                استكشف جميع الميزات والفوائد التي نقدمها.
              </ListItem>
              <ListItem href="/pricing" title="الأسعار">
                ابحث عن الخطة المثالية التي تناسب احتياجاتك وميزانيتك.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>الموارد</NavigationMenuTrigger>
          <NavigationMenuContent dir="rtl">
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
            <Link href="/learn-more">اعرف المزيد</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>روابط سريعة</NavigationMenuTrigger>
          <NavigationMenuContent dir="rtl">
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">المنتجات</div>
                    <div className="text-muted-foreground">تصفح كتالوج المنتجات الكامل لدينا.</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">الأدلة</div>
                    <div className="text-muted-foreground">أدلة خطوة بخطوة لمساعدتك على النجاح.</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">الأخبار</div>
                    <div className="text-muted-foreground">ابق على اطلاع بأحدث التحديثات.</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>بسيط</NavigationMenuTrigger>
          <NavigationMenuContent dir="rtl">
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">المنتجات</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">الخدمات</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">حول</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>مع أيقونة</NavigationMenuTrigger>
          <NavigationMenuContent dir="rtl">
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleHelpIcon className="size-4" />
                    مركز المساعدة
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleIcon className="size-4" />
                    حسابي
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleCheckIcon className="size-4" />
                    مكتمل
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

