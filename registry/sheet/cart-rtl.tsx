"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
  Separator,
} from "@soar-design/soar-react-components";
import { ShoppingCart, Trash2 } from "lucide-react";

const cartItems = [
  { id: 1, name: "سماعات لاسلكية", price: 99.99, quantity: 1 },
  { id: 2, name: "ساعة ذكية", price: 249.99, quantity: 1 },
  { id: 3, name: "كابل USB-C", price: 19.99, quantity: 2 },
];

export default function SheetCart() {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <ShoppingCart className="ms-2 h-4 w-4" />
          السلة ({cartItems.length})
        </Button>
      </SheetTrigger>
      <SheetContent dir="rtl">
        <SheetHeader>
          <SheetTitle>سلة التسوق</SheetTitle>
          <SheetDescription>
            {cartItems.length} {cartItems.length === 1 ? "عنصر" : "عناصر"} في
            سلتك
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-auto py-4">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="h-16 w-16 rounded-md bg-muted" />
                <div className="flex-1 space-y-1">
                  <h4 className="text-sm font-medium">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    الكمية: {item.quantity}
                  </p>
                  <p className="text-sm font-medium">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
        <Separator className="my-4" />
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>المجموع الفرعي</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>الشحن</span>
            <span>$5.00</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between font-semibold">
            <span>الإجمالي</span>
            <span>${(total + 5).toFixed(2)}</span>
          </div>
        </div>
        <SheetFooter className="mt-4">
          <SheetClose asChild>
            <Button className="w-full">الدفع</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

