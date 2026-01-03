"use client";

import React from "react";
import { Card, CardContent } from "@soar-design/soar-react-components";
import {
  ChartContainer,
  ChartTooltip,
} from "@soar-design/soar-react-components";
import { TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

// E-commerce revenue tracking with seasonal fluctuations
const portfolioData = [
  { date: "1 يناير", value: 850, time: "20:00" },
  { date: "2 يناير", value: 1100, time: "00:00" },
  { date: "3 يناير", value: 1680, time: "04:00" },
  { date: "4 يناير", value: 1490, time: "08:00" },
  { date: "5 يناير", value: 2020, time: "12:00" },
  { date: "6 يناير", value: 2080, time: "16:00" },
  { date: "7 يناير", value: 2180, time: "20:00" },
  { date: "8 يناير", value: 2250, time: "00:00" },
  { date: "9 يناير", value: 2480, time: "04:00" },
  { date: "10 يناير", value: 2290, time: "08:00" },
  { date: "11 يناير", value: 2450, time: "12:00" },
  { date: "12 يناير", value: 2380, time: "16:00" },
  { date: "13 يناير", value: 2220, time: "20:00" },
  { date: "14 يناير", value: 1980, time: "00:00" },
  { date: "15 يناير", value: 1750, time: "04:00" },
  { date: "16 يناير", value: 1620, time: "08:00" },
  { date: "17 يناير", value: 1480, time: "12:00" },
  { date: "18 يناير", value: 1580, time: "16:00" },
  { date: "19 يناير", value: 1820, time: "20:00" },
  { date: "20 يناير", value: 1950, time: "00:00" },
  { date: "21 يناير", value: 2080, time: "04:00" },
  { date: "22 يناير", value: 2220, time: "08:00" },
  { date: "23 يناير", value: 2380, time: "12:00" },
  { date: "24 يناير", value: 2550, time: "16:00" },
  { date: "25 يناير", value: 2480, time: "20:00" },
  { date: "26 يناير", value: 2720, time: "00:00" },
  { date: "27 يناير", value: 2900, time: "04:00" },
  { date: "28 يناير", value: 2550, time: "08:00" },
  { date: "29 يناير", value: 2320, time: "12:00" },
  { date: "15 فبراير", value: 2250, time: "14:00" },
  { date: "24 مارس", value: 1900, time: "16:00" },
];

// Chart configuration
const chartConfig = {
  value: {
    label: "الرصيد",
    color: "var(--color-purple-500)",
  },
};

// Calculate portfolio metrics
const currentBalance = 24847.83;
const todaysPnL = 1249.0;
const pnlPercentage = 8;
const highValue = Math.max(...portfolioData.map((d) => d.value));
const lowValue = Math.min(...portfolioData.map((d) => d.value));
const change = -0.082;

// Custom Tooltip
interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      date: string;
      value: number;
    };
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
        <div className="text-sm text-muted-foreground mb-1">{data.date}</div>
        <div className="flex items-center gap-2">
          <div className="text-base font-bold">${(data.value * 10).toLocaleString()}.00</div>
          <div className="text-[11px] text-emerald-600">+12.7%</div>
        </div>
      </div>
    );
  }
  return null;
};

export default function LineChart8() {
  return (
    <div className="w-full flex items-center justify-center p-6">
      <Card className="w-full max-w-5xl">
        <CardContent className="flex flex-col items-stretch gap-5">
          {/* Header */}
          <div className="mb-5">
            <h1 className="text-base text-muted-foreground font-medium mb-1">الرصيد الحالي</h1>
            <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-3.5">
              <span className="text-4xl font-bold">${currentBalance.toLocaleString()}</span>
              <div className="flex items-center gap-1 text-emerald-600">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">+12.7%</span>
                <span className="text-muted-foreground font-normal">آخر 24 ساعة</span>
              </div>
            </div>
          </div>

          <div className="grow">
            {/* Stats Row */}
            <div className="flex items-center justify-between flex-wrap gap-2.5 text-sm mb-2.5">
              {/* Today's Sales */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">مبيعات اليوم:</span>
                  <span className="font-semibold">${todaysPnL.toLocaleString()}</span>
                  <div className="flex items-center gap-1 text-emerald-600">
                    <TrendingUp className="w-3 h-3" />
                    <span>(+{pnlPercentage}%)</span>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex items-center gap-6 text-muted-foreground">
                <span>
                  الأعلى: <span className="text-sky-600 font-medium">{highValue.toLocaleString()}.08</span>
                </span>
                <span>
                  الأدنى: <span className="text-yellow-600 font-medium">{lowValue.toLocaleString()}.42</span>
                </span>
                <span>
                  التغيير: <span className="text-red-600 font-medium">{change}%</span>
                </span>
              </div>
            </div>

            {/* Chart */}
            <ChartContainer
              config={chartConfig}
              className="h-96 w-full [&_.recharts-curve.recharts-tooltip-cursor]:stroke-initial"
            >
              <ComposedChart
                data={portfolioData}
                margin={{
                  top: 20,
                  right: 10,
                  left: 5,
                  bottom: 20,
                }}
              >
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={chartConfig.value.color} stopOpacity={0.1} />
                    <stop offset="100%" stopColor={chartConfig.value.color} stopOpacity={0} />
                  </linearGradient>
                  <pattern
                    id="dotGrid"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="10" cy="10" r="1" fill="var(--input)" fillOpacity="0.3" />
                  </pattern>
                  <filter id="dotShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,0.8)" />
                  </filter>
                  <filter id="lineShadow" x="-100%" y="-100%" width="300%" height="300%">
                    <feDropShadow
                      dx="4"
                      dy="6"
                      stdDeviation="25"
                      floodColor="rgba(59, 130, 246, 0.9)"
                    />
                  </filter>
                </defs>

                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="url(#dotGrid)"
                  style={{ pointerEvents: "none" }}
                />

                <CartesianGrid
                  strokeDasharray="4 8"
                  stroke="var(--input)"
                  strokeOpacity={1}
                  horizontal={true}
                  vertical={false}
                />

                {/* Active tick reference line */}
                <ReferenceLine
                  x="17 يناير"
                  stroke={chartConfig.value.color}
                  strokeDasharray="4 4"
                  strokeWidth={1}
                />

                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: chartConfig.value.color }}
                  tickMargin={15}
                  interval="preserveStartEnd"
                  tickCount={5}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: chartConfig.value.color }}
                  tickFormatter={(value) => `$${(value * 2).toLocaleString()}`}
                  tickMargin={15}
                />

                <ChartTooltip
                  content={<CustomTooltip />}
                  cursor={{
                    strokeDasharray: "3 3",
                    stroke: "var(--muted-foreground)",
                    strokeOpacity: 0.5,
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={chartConfig.value.color}
                  strokeWidth={2}
                  filter="url(#lineShadow)"
                  dot={(props) => {
                    const { cx, cy, payload } = props;
                    if (
                      payload.date === "17 يناير" ||
                      payload.value > 2800 ||
                      payload.value < 1000
                    ) {
                      return (
                        <circle
                          key={`dot-${payload.date}`}
                          cx={cx}
                          cy={cy}
                          r={6}
                          fill={chartConfig.value.color}
                          stroke="white"
                          strokeWidth={2}
                          filter="url(#dotShadow)"
                        />
                      );
                    }

                    return <g key={`dot-${payload.date}`} />; // Return empty group for other points
                  }}
                  activeDot={{
                    r: 6,
                    fill: chartConfig.value.color,
                    stroke: "white",
                    strokeWidth: 2,
                    filter: "url(#dotShadow)",
                  }}
                />
              </ComposedChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

