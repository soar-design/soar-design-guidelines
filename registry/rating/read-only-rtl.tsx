import { Rating } from "@soar-design/soar-react-components";

export default function RatingReadOnly() {
  return (
    <div className="flex flex-col gap-6" dir="rtl">
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="space-y-1">
          <h4 className="font-medium">منتج ممتاز</h4>
          <p className="text-sm text-muted-foreground">أحمد محمد</p>
        </div>
        <Rating rating={5} />
      </div>
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="space-y-1">
          <h4 className="font-medium">جودة جيدة</h4>
          <p className="text-sm text-muted-foreground">فاطمة علي</p>
        </div>
        <Rating rating={4} />
      </div>
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="space-y-1">
          <h4 className="font-medium">يمكن أن يكون أفضل</h4>
          <p className="text-sm text-muted-foreground">خالد حسن</p>
        </div>
        <Rating rating={3} />
      </div>
    </div>
  );
}

