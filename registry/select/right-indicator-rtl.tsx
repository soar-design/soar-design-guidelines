"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@soar-design/soar-react-components";

export default function SelectRightIndicator() {
  return (
    <div dir="rtl">
      <Select indicatorPosition="right">
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="اختر لغة" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">الإنجليزية</SelectItem>
          <SelectItem value="es">الإسبانية</SelectItem>
          <SelectItem value="fr">الفرنسية</SelectItem>
          <SelectItem value="de">الألمانية</SelectItem>
          <SelectItem value="it">الإيطالية</SelectItem>
          <SelectItem value="pt">البرتغالية</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

