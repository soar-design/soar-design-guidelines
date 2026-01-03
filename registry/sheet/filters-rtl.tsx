"use client";

import { useState } from "react";
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
  Label,
  Checkbox,
  Separator,
} from "@soar-design/soar-react-components";
import { SlidersHorizontal } from "lucide-react";

export default function SheetFilters() {
  const [filters, setFilters] = useState({
    inStock: false,
    onSale: false,
    freeShipping: false,
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <SlidersHorizontal className="ms-2 h-4 w-4" />
          المرشحات
        </Button>
      </SheetTrigger>
      <SheetContent dir="rtl">
        <SheetHeader>
          <SheetTitle>المرشحات</SheetTitle>
          <SheetDescription>
            قم بتنقيح بحثك باستخدام هذه المرشحات.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-6 py-4">
          <div>
            <h4 className="mb-3 text-sm font-medium">التوفر</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Checkbox
                  id="inStock"
                  checked={filters.inStock}
                  onCheckedChange={(checked) =>
                    setFilters({ ...filters, inStock: !!checked })
                  }
                />
                <Label htmlFor="inStock" className="text-sm font-normal">
                  متوفر
                </Label>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Checkbox
                  id="onSale"
                  checked={filters.onSale}
                  onCheckedChange={(checked) =>
                    setFilters({ ...filters, onSale: !!checked })
                  }
                />
                <Label htmlFor="onSale" className="text-sm font-normal">
                  في التخفيض
                </Label>
              </div>
            </div>
          </div>
          <Separator />
          <div>
            <h4 className="mb-3 text-sm font-medium">الشحن</h4>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Checkbox
                id="freeShipping"
                checked={filters.freeShipping}
                onCheckedChange={(checked) =>
                  setFilters({ ...filters, freeShipping: !!checked })
                }
              />
              <Label htmlFor="freeShipping" className="text-sm font-normal">
                شحن مجاني
              </Label>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">مسح</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button>تطبيق المرشحات</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

