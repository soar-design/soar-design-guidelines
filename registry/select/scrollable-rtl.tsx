"use client"

import {
  DirectionProvider,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@soar-design/soar-react-components"

export function SelectScrollable() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Select>
          <SelectTrigger className="w-full max-w-64">
            <SelectValue placeholder="اختر المنطقة الزمنية" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>أمريكا الشمالية</SelectLabel>
              <SelectItem value="est">التوقيت الشرقي القياسي</SelectItem>
              <SelectItem value="cst">التوقيت المركزي القياسي</SelectItem>
              <SelectItem value="mst">التوقيت الجبلي القياسي</SelectItem>
              <SelectItem value="pst">التوقيت الباسيفيكي القياسي</SelectItem>
              <SelectItem value="akst">توقيت ألاسكا القياسي</SelectItem>
              <SelectItem value="hst">توقيت هاواي القياسي</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>أوروبا وأفريقيا</SelectLabel>
              <SelectItem value="gmt">توقيت غرينتش</SelectItem>
              <SelectItem value="cet">التوقيت الأوروبي المركزي</SelectItem>
              <SelectItem value="eet">التوقيت الأوروبي الشرقي</SelectItem>
              <SelectItem value="west">التوقيت الأوروبي الغربي الصيفي</SelectItem>
              <SelectItem value="cat">توقيت وسط أفريقيا</SelectItem>
              <SelectItem value="eat">توقيت شرق أفريقيا</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>آسيا</SelectLabel>
              <SelectItem value="msk">توقيت موسكو</SelectItem>
              <SelectItem value="ist">التوقيت الهندي القياسي</SelectItem>
              <SelectItem value="cst_china">التوقيت الصيني القياسي</SelectItem>
              <SelectItem value="jst">التوقيت الياباني القياسي</SelectItem>
              <SelectItem value="kst">التوقيت الكوري القياسي</SelectItem>
              <SelectItem value="ist_indonesia">
                التوقيت الإندونيسي المركزي القياسي
              </SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>أستراليا والمحيط الهادئ</SelectLabel>
              <SelectItem value="awst">التوقيت الأسترالي الغربي القياسي</SelectItem>
              <SelectItem value="acst">التوقيت الأسترالي المركزي القياسي</SelectItem>
              <SelectItem value="aest">التوقيت الأسترالي الشرقي القياسي</SelectItem>
              <SelectItem value="nzst">التوقيت النيوزيلندي القياسي</SelectItem>
              <SelectItem value="fjt">توقيت فيجي</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>أمريكا الجنوبية</SelectLabel>
              <SelectItem value="art">توقيت الأرجنتين</SelectItem>
              <SelectItem value="bot">توقيت بوليفيا</SelectItem>
              <SelectItem value="brt">توقيت برازيليا</SelectItem>
              <SelectItem value="clt">التوقيت التشيلي القياسي</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </DirectionProvider>
  )
}
