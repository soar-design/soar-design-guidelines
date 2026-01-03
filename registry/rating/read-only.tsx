import { Rating } from "@soar-design/soar-react-components";

export default function RatingReadOnly() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="space-y-1">
          <h4 className="font-medium">Excellent Product</h4>
          <p className="text-sm text-muted-foreground">John Doe</p>
        </div>
        <Rating rating={5} />
      </div>
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="space-y-1">
          <h4 className="font-medium">Good Quality</h4>
          <p className="text-sm text-muted-foreground">Jane Smith</p>
        </div>
        <Rating rating={4} />
      </div>
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="space-y-1">
          <h4 className="font-medium">Could be better</h4>
          <p className="text-sm text-muted-foreground">Bob Johnson</p>
        </div>
        <Rating rating={3} />
      </div>
    </div>
  );
}

