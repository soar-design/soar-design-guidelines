import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuIndicator,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@soar-design/soar-react-components";

export default function NavigationMenuWithIndicator() {
  return (
    <NavigationMenu dir="rtl">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>الميزات</NavigationMenuTrigger>
          <NavigationMenuContent dir="rtl">
            <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
              <ListItem href="#" title="الأتمتة">
                أتمتة سير عملك
              </ListItem>
              <ListItem href="#" title="التكامل">
                الاتصال بأدواتك
              </ListItem>
              <ListItem href="#" title="الأمان">
                أمان على مستوى المؤسسات
              </ListItem>
              <ListItem href="#" title="التحليلات">
                رؤى مفصلة
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>الأسعار</NavigationMenuTrigger>
          <NavigationMenuContent dir="rtl">
            <ul className="grid w-[400px] gap-3 p-4">
              <ListItem href="#" title="البداية">
                مثالي للفرق الصغيرة
              </ListItem>
              <ListItem href="#" title="المهني">
                للشركات النامية
              </ListItem>
              <ListItem href="#" title="المؤسسات">
                حلول مخصصة
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            حول
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuIndicator />
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

