import { Rating } from "@soar-design/soar-react-components";

export default function RatingMaxRating() {
  return (
    <div className="flex flex-col gap-4" dir="rtl">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">3 نجوم</p>
        <Rating rating={2} maxRating={3} showValue />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">5 نجوم (افتراضي)</p>
        <Rating rating={3.5} maxRating={5} showValue />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">10 نجوم</p>
        <Rating rating={7.5} maxRating={10} showValue />
      </div>
    </div>
  );
}

