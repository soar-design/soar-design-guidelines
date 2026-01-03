import { CountingNumber, Card, CardContent } from "@soar-design/soar-react-components";
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

export default function CountingNumberStatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                إجمالي المستخدمين
              </p>
              <CountingNumber
                from={0}
                to={12453}
                duration={2}
                startOnView={true}
                once={true}
                format={(value) => Math.round(value).toLocaleString()}
                className="text-2xl font-bold"
              />
            </div>
            <Users className="h-8 w-8 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                الإيرادات
              </p>
              <CountingNumber
                from={0}
                to={45231.89}
                duration={2}
                startOnView={true}
                once={true}
                format={(value) => `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                className="text-2xl font-bold"
              />
            </div>
            <DollarSign className="h-8 w-8 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                المبيعات
              </p>
              <CountingNumber
                from={0}
                to={573}
                duration={2}
                startOnView={true}
                once={true}
                format={(value) => `+${Math.round(value)}`}
                className="text-2xl font-bold"
              />
            </div>
            <ShoppingCart className="h-8 w-8 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                النمو
              </p>
              <CountingNumber
                from={0}
                to={23.5}
                duration={2}
                startOnView={true}
                once={true}
                format={(value) => `+${value.toFixed(1)}%`}
                className="text-2xl font-bold"
              />
            </div>
            <TrendingUp className="h-8 w-8 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

