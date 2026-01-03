"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@soar-design/soar-react-components";

const timezones = [
  { value: "pst", label: "التوقيت الباسيفيكي القياسي (PST)" },
  { value: "mst", label: "التوقيت الجبلي القياسي (MST)" },
  { value: "cst", label: "التوقيت المركزي القياسي (CST)" },
  { value: "est", label: "التوقيت الشرقي القياسي (EST)" },
  { value: "ast", label: "التوقيت الأطلسي القياسي (AST)" },
  { value: "gmt", label: "توقيت غرينتش (GMT)" },
  { value: "cet", label: "التوقيت الأوروبي المركزي (CET)" },
  { value: "eet", label: "التوقيت الأوروبي الشرقي (EET)" },
  { value: "ist", label: "التوقيت الهندي القياسي (IST)" },
  { value: "jst", label: "التوقيت الياباني القياسي (JST)" },
  { value: "aest", label: "التوقيت الأسترالي الشرقي القياسي (AEST)" },
  { value: "nzst", label: "التوقيت النيوزيلندي القياسي (NZST)" },
];

export default function SelectScrollable() {
  return (
    <div dir="rtl">
      <Select>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="اختر المنطقة الزمنية" />
        </SelectTrigger>
        <SelectContent>
          {timezones.map((timezone) => (
            <SelectItem key={timezone.value} value={timezone.value}>
              {timezone.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

