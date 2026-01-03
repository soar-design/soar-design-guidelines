"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from "@soar-design/soar-react-components";
import { useDirection } from "@/hooks/use-direction";

export default function AccordionInCard() {
  const { ref, isRTL } = useDirection();

  return (
    <div ref={ref} className="w-full grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>
            {isRTL ? "مواصفات المنتج" : "Product Specifications"}
          </CardTitle>
          <CardDescription>
            {isRTL ? "المواصفات الفنية التفصيلية" : "Detailed technical specifications"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible variant="default">
            <AccordionItem value="dimensions">
              <AccordionTrigger>
                {isRTL ? "الأبعاد والوزن" : "Dimensions & Weight"}
              </AccordionTrigger>
              <AccordionContent>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">
                      {isRTL ? "الارتفاع:" : "Height:"}
                    </dt>
                    <dd className="font-medium">
                      {isRTL ? "21.6 سم" : "8.5 inches"}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">
                      {isRTL ? "العرض:" : "Width:"}
                    </dt>
                    <dd className="font-medium">
                      {isRTL ? "13.2 سم" : "5.2 inches"}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">
                      {isRTL ? "العمق:" : "Depth:"}
                    </dt>
                    <dd className="font-medium">
                      {isRTL ? "0.8 سم" : "0.3 inches"}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">
                      {isRTL ? "الوزن:" : "Weight:"}
                    </dt>
                    <dd className="font-medium">
                      {isRTL ? "544 جرام" : "1.2 lbs"}
                    </dd>
                  </div>
                </dl>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="performance">
              <AccordionTrigger>
                {isRTL ? "الأداء" : "Performance"}
              </AccordionTrigger>
              <AccordionContent>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">
                      {isRTL ? "المعالج:" : "Processor:"}
                    </dt>
                    <dd className="font-medium">
                      {isRTL ? "ثماني النواة 2.8 جيجاهرتز" : "Octa-core 2.8GHz"}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">
                      {isRTL ? "الذاكرة:" : "RAM:"}
                    </dt>
                    <dd className="font-medium">
                      {isRTL ? "8 جيجابايت" : "8GB"}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">
                      {isRTL ? "التخزين:" : "Storage:"}
                    </dt>
                    <dd className="font-medium">256GB SSD</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">
                      {isRTL ? "البطارية:" : "Battery:"}
                    </dt>
                    <dd className="font-medium">
                      {isRTL ? "حتى 12 ساعة" : "Up to 12 hours"}
                    </dd>
                  </div>
                </dl>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="connectivity">
              <AccordionTrigger>
                {isRTL ? "الاتصال" : "Connectivity"}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-1 text-sm">
                  <li>• Wi-Fi 6 (802.11ax)</li>
                  <li>• Bluetooth 5.2</li>
                  <li>• USB-C (x2)</li>
                  <li>• {isRTL ? "منفذ سماعات 3.5 ملم" : "3.5mm headphone jack"}</li>
                  <li>• NFC</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            {isRTL ? "أضف إلى السلة" : "Add to Cart"}
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            {isRTL ? "إعدادات الحساب" : "Account Settings"}
          </CardTitle>
          <CardDescription>
            {isRTL ? "إدارة تفضيلات حسابك" : "Manage your account preferences"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" variant="outline">
            <AccordionItem value="profile">
              <AccordionTrigger>
                {isRTL ? "معلومات الملف الشخصي" : "Profile Information"}
              </AccordionTrigger>
              <AccordionContent className="space-y-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {isRTL ? "اسم العرض" : "Display Name"}
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border px-3 py-2 text-sm"
                    defaultValue={isRTL ? "محمد أحمد" : "John Doe"}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {isRTL ? "البريد الإلكتروني" : "Email"}
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-md border px-3 py-2 text-sm"
                    defaultValue={isRTL ? "mohamed@example.com" : "john@example.com"}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="notifications">
              <AccordionTrigger>
                {isRTL ? "الإشعارات" : "Notifications"}
              </AccordionTrigger>
              <AccordionContent className="space-y-3">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" defaultChecked />
                  {isRTL ? "إشعارات البريد الإلكتروني" : "Email notifications"}
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" defaultChecked />
                  {isRTL ? "الإشعارات الفورية" : "Push notifications"}
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  {isRTL ? "إشعارات الرسائل القصيرة" : "SMS notifications"}
                </label>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="privacy">
              <AccordionTrigger>
                {isRTL ? "الخصوصية" : "Privacy"}
              </AccordionTrigger>
              <AccordionContent className="space-y-3">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" defaultChecked />
                  {isRTL ? "اجعل الملف الشخصي عامًا" : "Make profile public"}
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  {isRTL ? "عرض الحالة عبر الإنترنت" : "Show online status"}
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" defaultChecked />
                  {isRTL
                    ? "السماح لمحركات البحث بفهرسة الملف الشخصي"
                    : "Allow search engines to index profile"}
                </label>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            {isRTL ? "حفظ التغييرات" : "Save Changes"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
