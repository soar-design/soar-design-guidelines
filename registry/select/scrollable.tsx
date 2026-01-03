"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@soar-design/soar-react-components";

const timezones = [
  { value: "pst", label: "Pacific Standard Time (PST)" },
  { value: "mst", label: "Mountain Standard Time (MST)" },
  { value: "cst", label: "Central Standard Time (CST)" },
  { value: "est", label: "Eastern Standard Time (EST)" },
  { value: "ast", label: "Atlantic Standard Time (AST)" },
  { value: "gmt", label: "Greenwich Mean Time (GMT)" },
  { value: "cet", label: "Central European Time (CET)" },
  { value: "eet", label: "Eastern European Time (EET)" },
  { value: "ist", label: "India Standard Time (IST)" },
  { value: "jst", label: "Japan Standard Time (JST)" },
  { value: "aest", label: "Australian Eastern Standard Time (AEST)" },
  { value: "nzst", label: "New Zealand Standard Time (NZST)" },
];

export default function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        {timezones.map((timezone) => (
          <SelectItem key={timezone.value} value={timezone.value}>
            {timezone.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

