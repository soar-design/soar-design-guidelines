'use client';

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@soar-design/soar-react-components';
import { Badge } from '@soar-design/soar-react-components';
import { Button } from '@soar-design/soar-react-components';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardHeading,
  CardTitle,
  CardToolbar,
} from '@soar-design/soar-react-components';
import { ScrollArea } from '@soar-design/soar-react-components';
import { Settings } from 'lucide-react';

// User data
const users = [
  {
    id: '1',
    name: 'أحمد محمد',
    availability: 'online',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    status: 'active',
    email: 'ahmed@example.com',
  },
  {
    id: '2',
    name: 'فاطمة علي',
    availability: 'away',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    status: 'inactive',
    email: 'fatima@example.com',
  },
  {
    id: '3',
    name: 'خالد حسن',
    availability: 'busy',
    avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    status: 'active',
    email: 'khalid@example.com',
  },
  {
    id: '4',
    name: 'سارة إبراهيم',
    availability: 'offline',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    status: 'inactive',
    email: 'sara@example.com',
  },
  {
    id: '5',
    name: 'محمد عبدالله',
    availability: 'online',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    status: 'active',
    email: 'mohammed@example.com',
  },
  {
    id: '6',
    name: 'نورا أحمد',
    availability: 'online',
    avatar: 'https://randomuser.me/api/portraits/women/53.jpg',
    status: 'active',
    email: 'nora@example.com',
  },
  {
    id: '7',
    name: 'يوسف خالد',
    availability: 'away',
    avatar: 'https://randomuser.me/api/portraits/men/61.jpg',
    status: 'inactive',
    email: 'youssef@example.com',
  },
  {
    id: '8',
    name: 'ليلى محمود',
    availability: 'busy',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    status: 'active',
    email: 'layla@example.com',
  },
  {
    id: '9',
    name: 'عمر سعيد',
    availability: 'offline',
    avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
    status: 'inactive',
    email: 'omar@example.com',
  },
  {
    id: '10',
    name: 'مريم علي',
    availability: 'online',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    status: 'active',
    email: 'mariam@example.com',
  },
];

export default function CardDemo() {
  return (
    <Card className="w-[400px]" dir="rtl">
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
      <CardContent className="py-3 ps-1.5">
        <ScrollArea className="h-[300px] ps-3.5">
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
                    <AvatarFallback>ن</AvatarFallback>
                  </Avatar>
                  <div>
                    <Link href="#" className="text-sm font-medium text-foreground hover:text-primary">
                      {user.name}
                    </Link>
                    <div className="text-sm font-normal text-muted-foreground">{user.email}</div>
                  </div>
                </div>
                {/* Right: Status Badge */}
                <Badge appearance="outline" variant={user.status === 'active' ? 'success' : 'secondary'}>
                  {user.status === 'active' ? 'نشط' : 'غير نشط'}
                </Badge>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter className="justify-center">
        <Button mode="link" underlined="dashed">
          <Link href="#">اعرف المزيد</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
