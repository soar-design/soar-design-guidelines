"use client";

import React, { useState } from "react";
import { Button } from "@soar-design/soar-react-components";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardToolbar,
} from "@soar-design/soar-react-components";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@soar-design/soar-react-components";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@soar-design/soar-react-components";
import { ChartNoAxesCombined, Info } from "lucide-react";
import { CartesianGrid, Line, LineChart } from "recharts";

// Revenue performance data for different periods (in thousands)
const revenueData = {
  "5D": [
    { period: "الاثنين", revenue: 10.2, fill: "var(--color-revenue)" },
    { period: "الثلاثاء", revenue: 62.8, fill: "var(--color-revenue)" },
    { period: "الأربعاء", revenue: 38.1, fill: "var(--color-revenue)" },
    { period: "الخميس", revenue: 71.4, fill: "var(--color-revenue)" },
    { period: "الجمعة", revenue: 54.7, fill: "var(--color-revenue)" },
    { period: "السبت", revenue: 29.3, fill: "var(--color-revenue)" },
    { period: "الأحد", revenue: 40.6, fill: "var(--color-revenue)" },
  ],
  "2W": [
    { period: "الأسبوع 1", revenue: 324.5, fill: "var(--color-revenue)" },
    { period: "الأسبوع 2", revenue: 398.7, fill: "var(--color-revenue)" },
    { period: "الأسبوع 3", revenue: 276.3, fill: "var(--color-revenue)" },
    { period: "الأسبوع 4", revenue: 445.9, fill: "var(--color-revenue)" },
    { period: "الأسبوع 5", revenue: 387.2, fill: "var(--color-revenue)" },
    { period: "الأسبوع 6", revenue: 512.8, fill: "var(--color-revenue)" },
    { period: "الأسبوع 7", revenue: 358.4, fill: "var(--color-revenue)" },
    { period: "الأسبوع 8", revenue: 478.6, fill: "var(--color-revenue)" },
  ],
  "1M": [
    { period: "الأسبوع 1", revenue: 324.5, fill: "var(--color-revenue)" },
    { period: "الأسبوع 2", revenue: 398.7, fill: "var(--color-revenue)" },
    { period: "الأسبوع 3", revenue: 276.3, fill: "var(--color-revenue)" },
    { period: "الأسبوع 4", revenue: 445.9, fill: "var(--color-revenue)" },
    { period: "الأسبوع 5", revenue: 387.2, fill: "var(--color-revenue)" },
    { period: "الأسبوع 6", revenue: 512.8, fill: "var(--color-revenue)" },
    { period: "الأسبوع 7", revenue: 358.4, fill: "var(--color-revenue)" },
    { period: "الأسبوع 8", revenue: 478.6, fill: "var(--color-revenue)" },
    { period: "الأسبوع 9", revenue: 423.1, fill: "var(--color-revenue)" },
    { period: "الأسبوع 10", revenue: 567.3, fill: "var(--color-revenue)" },
    { period: "الأسبوع 11", revenue: 489.7, fill: "var(--color-revenue)" },
    { period: "الأسبوع 12", revenue: 534.2, fill: "var(--color-revenue)" },
  ],
  "6M": [
    { period: "يناير", revenue: 1875.3, fill: "var(--color-revenue)" },
    { period: "فبراير", revenue: 2234.7, fill: "var(--color-revenue)" },
    { period: "مارس", revenue: 1698.2, fill: "var(--color-revenue)" },
    { period: "أبريل", revenue: 2567.8, fill: "var(--color-revenue)" },
    { period: "مايو", revenue: 2145.6, fill: "var(--color-revenue)" },
    { period: "يونيو", revenue: 2789.4, fill: "var(--color-revenue)" },
    { period: "يوليو", revenue: 2356.1, fill: "var(--color-revenue)" },
    { period: "أغسطس", revenue: 3012.5, fill: "var(--color-revenue)" },
    { period: "سبتمبر", revenue: 2687.9, fill: "var(--color-revenue)" },
    { period: "أكتوبر", revenue: 3234.8, fill: "var(--color-revenue)" },
    { period: "نوفمبر", revenue: 2891.3, fill: "var(--color-revenue)" },
    { period: "ديسمبر", revenue: 3456.7, fill: "var(--color-revenue)" },
  ],
  "1Y": [
    { period: "الربع الأول 2023", revenue: 5808.2, fill: "var(--color-revenue)" },
    { period: "الربع الثاني 2023", revenue: 7501.8, fill: "var(--color-revenue)" },
    { period: "الربع الثالث 2023", revenue: 6234.7, fill: "var(--color-revenue)" },
    { period: "الربع الرابع 2023", revenue: 8456.3, fill: "var(--color-revenue)" },
    { period: "الربع الأول 2024", revenue: 7123.9, fill: "var(--color-revenue)" },
    { period: "الربع الثاني 2024", revenue: 9287.5, fill: "var(--color-revenue)" },
    { period: "الربع الثالث 2024", revenue: 8567.1, fill: "var(--color-revenue)" },
    { period: "الربع الرابع 2024", revenue: 10234.6, fill: "var(--color-revenue)" },
  ],
};

// Use custom or Tailwind standard colors: https://tailwindcss.com/docs/colors
const chartConfig = {
  revenue: {
    label: "الإيرادات",
    color: "var(--color-violet-500)",
  },
};

// Period configuration
const PERIODS = {
  "5D": { key: "5D", label: "5 أيام" },
  "2W": { key: "2W", label: "أسبوعان" },
  "1M": { key: "1M", label: "شهر" },
  "6M": { key: "6M", label: "6 أشهر" },
  "1Y": { key: "1Y", label: "سنة" },
} as const;

type PeriodKey = keyof typeof PERIODS;

export default function LineChart3() {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKey>("5D");

  // Get data for selected period
  const currentData = revenueData[selectedPeriod];

  // Calculate total revenue dynamically based on selected period
  const totalRevenue = currentData.reduce((sum, item) => sum + item.revenue, 0);

  // Format total revenue display
  const formatRevenue = (amount: number) => {
    if (amount >= 1000) {
      return `${(amount / 1000).toFixed(1)}M`;
    }
    return `${amount.toFixed(0)}k`;
  };

  return (
    <div className="w-full flex items-center justify-center p-6 lg:p-8">
      <Card className="w-full max-w-md rounded-2xl shadow-sm p-6">
        <CardHeader className="p-0 pb-6 mb-6">
          <CardTitle className="text-lg font-semibold">أداء الإيرادات</CardTitle>
          <CardToolbar>
            <Button variant="outline">تصدير</Button>
          </CardToolbar>
        </CardHeader>

        <CardContent className="p-0 space-y-6">
          {/* Nav */}
          <div className="space-y-6 mb-6">
            {/* Stats Section */}
            <div className="flex items-center gap-4">
              <div className="size-12 bg-violet-100 border border-violet-200 dark:border-violet-800 dark:bg-violet-950 rounded-full flex items-center justify-center">
                <ChartNoAxesCombined className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                  إجمالي الإيرادات
                </div>
                <div className="text-2xl font-bold">${formatRevenue(totalRevenue)}</div>
              </div>
            </div>

            {/* Toggle Group */}
            <ToggleGroup
              type="single"
              value={selectedPeriod}
              variant="outline"
              onValueChange={(value) => value && setSelectedPeriod(value as PeriodKey)}
              className="w-full"
            >
              {Object.values(PERIODS).map((period) => (
                <ToggleGroupItem
                  key={period.key}
                  value={period.key}
                  variant="outline"
                  className="flex-1 data-[state=on]:bg-gray-900 data-[state=on]:text-white data-[state=on]:border-gray-900"
                >
                  {period.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          {/* Chart */}
          <div className="h-40 relative w-full overflow-hidden">
            <ChartContainer
              config={chartConfig}
              className="h-full w-full [&_.recharts-curve.recharts-tooltip-cursor]:stroke-initial"
            >
              <LineChart
                accessibilityLayer
                data={currentData}
                margin={{
                  top: 10,
                  left: 10,
                  right: 10,
                  bottom: 10,
                }}
              >
                <CartesianGrid
                  strokeDasharray="4 8"
                  stroke="var(--input)"
                  strokeOpacity={1}
                  horizontal={false}
                  vertical={true}
                />

                <ChartTooltip
                  cursor={{
                    stroke: chartConfig.revenue.color,
                    strokeWidth: 1,
                    strokeDasharray: "2 4",
                  }}
                  content={
                    <ChartTooltipContent indicator="line" nameKey="revenue" hideLabel />
                  }
                />
                <Line
                  dataKey="revenue"
                  type="natural"
                  stroke="var(--color-revenue)"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{
                    r: 4,
                    fill: "var(--color-revenue)",
                    stroke: "var(--color-revenue)",
                    strokeWidth: 0,
                  }}
                />
              </LineChart>
            </ChartContainer>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Info className="size-3.5" />
            <span>تشمل الإيرادات الاشتراكات والمدفوعات لمرة واحدة.</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

