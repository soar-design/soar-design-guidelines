"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@soar-design/soar-react-components";
import { Badge } from "@soar-design/soar-react-components";
import { Button } from "@soar-design/soar-react-components";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardHeading,
  CardTitle,
  CardToolbar,
} from "@soar-design/soar-react-components";
import { Settings } from "lucide-react";

// User data
const users = [
  {
    id: "1",
    name: "كاثرين كامبل",
    availability: "online",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    status: "active",
    email: "kathryn@apple.com",
  },
  {
    id: "2",
    name: "روبرت سميث",
    availability: "away",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    status: "inactive",
    email: "robert@openai.com",
  },
  {
    id: "3",
    name: "صوفيا جونسون",
    availability: "busy",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    status: "active",
    email: "sophia@meta.com",
  },
  {
    id: "4",
    name: "لوكاس ووكر",
    availability: "offline",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    status: "inactive",
    flag: "🇦🇺",
    email: "lucas@tesla.com",
  },
  {
    id: "5",
    name: "إيميلي ديفيس",
    availability: "online",
    avatar: "https://randomuser.me/api/portraits/women/53.jpg",
    status: "active",
    email: "emily@sap.com",
  },
];

export default function CardDemo() {
  return (
    <Card className="w-[400px]" variant="accent">
      <CardHeader>
        <CardHeading>
          <CardTitle>المستخدمون الأخيرون</CardTitle>
        </CardHeading>
        <CardToolbar>
          <Button mode="icon" variant="outline" size="sm">
            <Settings />
          </Button>
        </CardToolbar>
      </CardHeader>
      <CardContent className="py-1">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="flex items-center justify-between gap-2 py-2 border-b border-dashed last:border-none"
            >
              {/* Left: Avatar and User Info */}
              <div className="flex items-center gap-3">
                <Avatar className="size-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div>
                  <Link href="#" className="text-sm font-medium text-foreground hover:text-primary">
                    {user.name}
                  </Link>
                  <div className="text-sm font-normal text-muted-foreground">{user.email}</div>
                </div>
              </div>
              {/* Right: Status Badge */}
              <Badge appearance="light" variant={user.status === "active" ? "primary" : "secondary"}>
                {user.status === "active" ? "نشط" : "غير نشط"}
              </Badge>
            </div>
          );
        })}
      </CardContent>
      <CardFooter className="justify-center">
        <Button mode="link" underlined="dashed" asChild>
          <Link href="#">اعرف المزيد</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
