"use client";

import { useState } from "react";
import { MoreHorizontalIcon } from "lucide-react";

import { Button } from "@soar-design/soar-react-components";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@soar-design/soar-react-components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@soar-design/soar-react-components";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@soar-design/soar-react-components";
import { Input } from "@soar-design/soar-react-components";
import { Label } from "@soar-design/soar-react-components";
import { Textarea } from "@soar-design/soar-react-components";

export function DropdownMenuDialogDocsRTL() {
  const [showNewDialog, setShowNewDialog] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" aria-label="فتح القائمة" size="icon-sm">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
          <DropdownMenuLabel>إجراءات الملف</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem onSelect={() => setShowNewDialog(true)}>
              ملف جديد...
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setShowShareDialog(true)}>
              مشاركة...
            </DropdownMenuItem>
            <DropdownMenuItem disabled>تحميل</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={showNewDialog} onOpenChange={setShowNewDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>إنشاء ملف جديد</DialogTitle>
            <DialogDescription>
              أدخل اسماً لملفك الجديد. انقر على إنشاء عند الانتهاء.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="pb-3">
            <Field>
              <FieldLabel htmlFor="filename">اسم الملف</FieldLabel>
              <Input id="filename" name="filename" placeholder="document.txt" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">إلغاء</Button>
            </DialogClose>
            <Button type="submit">إنشاء</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>مشاركة الملف</DialogTitle>
            <DialogDescription>
              أي شخص لديه الرابط سيتمكن من عرض هذا الملف.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="py-3">
            <Field>
              <Label htmlFor="email">عنوان البريد الإلكتروني</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="shadcn@vercel.com"
                autoComplete="off"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="message">رسالة (اختياري)</FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="اطلع على هذا الملف"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">إلغاء</Button>
            </DialogClose>
            <Button type="submit">إرسال دعوة</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
