"use client";

import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@soar-design/soar-react-components";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "حوار التنبيه",
    href: "/docs/primitives/alert-dialog",
    description: "حوار نمطي يقاطع المستخدم بمحتوى مهم ويتوقع استجابة.",
  },
  {
    title: "بطاقة التحويم",
    href: "/docs/primitives/hover-card",
    description: "للمستخدمين المبصرين لمعاينة المحتوى المتاح خلف الرابط.",
  },
  {
    title: "التقدم",
    href: "/docs/primitives/progress",
    description:
      "يعرض مؤشراً يوضح تقدم إتمام المهمة، عادة ما يُعرض كشريط تقدم.",
  },
  {
    title: "منطقة التمرير",
    href: "/docs/primitives/scroll-area",
    description: "يفصل المحتوى بصرياً أو دلالياً.",
  },
  {
    title: "التبويبات",
    href: "/docs/primitives/tabs",
    description:
      "مجموعة من أقسام المحتوى المتداخلة—المعروفة بألواح التبويب—التي تُعرض واحدة في كل مرة.",
  },
  {
    title: "تلميح",
    href: "/docs/primitives/tooltip",
    description:
      "نافذة منبثقة تعرض معلومات متعلقة بعنصر عندما يتلقى العنصر التركيز من لوحة المفاتيح أو عند تحويم الماوس فوقه.",
  },
];

export function NavigationMenuDemoDocsRTL() {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu viewport={isMobile} dir="rtl">
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>الرئيسية</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                    href="/"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      نظام التصميم
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      مكونات مصممة بشكل جميل لتطبيقك.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="مقدمة">
                مكونات قابلة لإعادة الاستخدام لبناء واجهات حديثة.
              </ListItem>
              <ListItem href="/docs/installation" title="التثبيت">
                كيفية تثبيت التبعيات وتنظيم تطبيقك.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="الطباعة">
                أنماط للعناوين والفقرات والقوائم...إلخ
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>المكونات</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">الوثائق</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>قائمة</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">المكونات</div>
                    <div className="text-muted-foreground">
                      تصفح جميع المكونات في المكتبة.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">الوثائق</div>
                    <div className="text-muted-foreground">
                      تعلم كيفية استخدام المكتبة.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">المدونة</div>
                    <div className="text-muted-foreground">
                      اقرأ أحدث منشورات المدونة.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>بسيط</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">المكونات</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">الوثائق</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">الكتل</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>مع أيقونة</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleHelpIcon />
                    قائمة الانتظار
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleIcon />
                    للمعالجة
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleCheckIcon />
                    منجز
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

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
