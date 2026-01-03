import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  Button,
} from "@soar-design/soar-react-components";
import { Mail, MessageSquare, Plus, UserPlus } from "lucide-react";

export default function DropdownMenuWithSubmenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">الإجراءات</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>الإجراءات</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Mail className="me-2 h-4 w-4" />
          <span>البريد الإلكتروني</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MessageSquare className="me-2 h-4 w-4" />
          <span>رسالة</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <UserPlus className="me-2 h-4 w-4" />
            <span>دعوة المستخدمين</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <Mail className="me-2 h-4 w-4" />
              <span>البريد الإلكتروني</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MessageSquare className="me-2 h-4 w-4" />
              <span>رسالة</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Plus className="me-2 h-4 w-4" />
              <span>المزيد...</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

