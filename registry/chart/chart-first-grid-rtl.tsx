"use client"

import { Bar, BarChart, CartesianGrid } from "recharts"

import {
  ChartContainer,
  type ChartConfig,
} from "@soar-design/soar-react-components"

const chartData = [
  { month: "يناير", desktop: 186, mobile: 80 },
  { month: "فبراير", desktop: 305, mobile: 200 },
  { month: "مارس", desktop: 237, mobile: 120 },
  { month: "أبريل", desktop: 73, mobile: 190 },
  { month: "مايو", desktop: 209, mobile: 130 },
  { month: "يونيو", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "سطح المكتب",
    color: "#2563eb",
  },
  mobile: {
    label: "الجوال",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export function ChartFirstGridDocsRTL() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

