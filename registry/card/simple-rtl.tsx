import { Card, CardHeader, CardTitle, CardContent } from "@soar-design/soar-react-components";

export default function CardSimple() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>بطاقة بسيطة</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          بطاقة بسيطة تحتوي فقط على عنوان ومحتوى. لا حاجة لوصف أو تذييل.
        </p>
      </CardContent>
    </Card>
  );
}

