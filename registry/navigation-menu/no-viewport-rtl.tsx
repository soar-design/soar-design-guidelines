import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@soar-design/soar-react-components";

export default function NavigationMenuNoViewport() {
  return (
    <NavigationMenu viewport={false} dir="rtl">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>المنتجات</NavigationMenuTrigger>
          <NavigationMenuContent dir="rtl">
            <ul className="grid w-[300px] gap-2 p-4">
              <ListItem href="#" title="التحليلات">
                احصل على رؤى حول بياناتك
              </ListItem>
              <ListItem href="#" title="لوحة المعلومات">
                عرض المقاييس الرئيسية
              </ListItem>
              <ListItem href="#" title="التقارير">
                إنشاء تقارير مفصلة
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>الموارد</NavigationMenuTrigger>
          <NavigationMenuContent dir="rtl">
            <ul className="grid w-[300px] gap-2 p-4">
              <ListItem href="#" title="الوثائق">
                تعلم كيفية استخدام منصتنا
              </ListItem>
              <ListItem href="#" title="مرجع API">
                استكشف نقاط نهاية API الخاصة بنا
              </ListItem>
              <ListItem href="#" title="المدونة">
                اقرأ أحدث مقالاتنا
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            اتصل بنا
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = ({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

