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
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

const chartData = [
  { month: "يناير", desktop: 186, mobile: 80 },
  { month: "فبراير", desktop: 305, mobile: 200 },
  { month: "مارس", desktop: 237, mobile: 120 },
  { month: "أبريل", desktop: 73, mobile: 190 },
  { month: "مايو", desktop: 209, mobile: 130 },
  { month: "يونيو", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "سطح المكتب",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "الجوال",
    color: "var(--chart-2)",
  },
};

export default function ChartLine() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>مخطط خطي - متعدد</CardTitle>
        <CardDescription>يناير - يونيو 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

