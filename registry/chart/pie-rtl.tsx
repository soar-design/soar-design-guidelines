"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@soar-design/soar-react-components";
import { Pie, PieChart } from "recharts";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "الزوار",
  },
  chrome: {
    label: "كروم",
    color: "var(--chart-1)",
  },
  safari: {
    label: "سفاري",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "فايرفوكس",
    color: "var(--chart-3)",
  },
  edge: {
    label: "إيدج",
    color: "var(--chart-4)",
  },
  other: {
    label: "أخرى",
    color: "var(--chart-5)",
  },
};

export default function ChartPie() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>مخطط دائري</CardTitle>
        <CardDescription>إحصائيات استخدام المتصفح</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

