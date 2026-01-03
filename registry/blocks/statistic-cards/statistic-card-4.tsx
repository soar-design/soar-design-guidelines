import { Button } from "@soar-design/soar-react-components";
import { Card, CardContent, CardHeader, CardTitle, CardToolbar } from "@soar-design/soar-react-components";
import { BanknoteArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const balanceData = {
  balance: 10976.95,
  delta: 5.7,
  currencies: [
    { code: "USD", percent: 30, color: "bg-primary" },
    { code: "GBP", percent: 20, color: "bg-indigo-400" },
    { code: "EUR", percent: 15, color: "bg-blue-500" },
    { code: "JPY", percent: 20, color: "bg-violet-600" },
    { code: "CNY", percent: 15, color: "bg-fuchsia-600" },
  ],
};

export default function Component() {
  return (
    <div className="w-full flex items-center justify-center p-6 lg:p-8">
      <Card className="w-full shadow-xl border-0">
        <CardHeader className="border-0 pb-2 pt-6">
          <CardTitle className="text-lg font-semibold">Balance</CardTitle>
          <CardToolbar>
            <Button variant="secondary">
              <BanknoteArrowUp />
              Topup
            </Button>
          </CardToolbar>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-2 mb-5">
            <span className="text-3xl font-bold tracking-tight">
              ${balanceData.balance.toLocaleString()}
            </span>
            <span className="text-base font-semibold ms-2">+{balanceData.delta}%</span>
          </div>

          <div className="border-b border-border mb-6" />

          {/* Segmented Progress Bar */}
          <div className="flex items-center gap-1.5 w-full mb-3">
            {balanceData.currencies.map((cur) => (
              <div
                key={cur.code}
                className="space-y-2.5"
                style={{
                  width: `${cur.percent}%`,
                }}
              >
                <div
                  className={cn(
                    cur.color,
                    "h-2.5 w-full overflow-hidden rounded-sm transition-all"
                  )}
                />

                <div key={cur.code} className="flex flex-col items-start flex-1">
                  <span className="text-xs font-medium">{cur.code}</span>
                  <span className="text-base font-semibold">{cur.percent}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
