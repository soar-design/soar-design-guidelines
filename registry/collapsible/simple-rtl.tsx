import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Button,
} from "@soar-design/soar-react-components";

export default function CollapsibleSimple() {
  return (
    <Collapsible className="w-[350px] space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          عرض المزيد من المعلومات
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border border-border p-4 text-sm">
          هذه معلومات إضافية يمكن طيها أو توسيعها.
          تستخدم مكون Collapsible لإظهار وإخفاء المحتوى بسلاسة.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

