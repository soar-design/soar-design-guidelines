"use client";

import { SlidingNumber } from "@soar-design/soar-react-components";
import { TrendingUp, Users, DollarSign, ShoppingCart } from "lucide-react";

export default function SlidingNumberDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-lg border p-6 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            Total Revenue
          </span>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold">$</span>
          <span className="text-2xl font-bold">
            <SlidingNumber from={0} to={45231} duration={2} delay={0} />
          </span>
        </div>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <TrendingUp className="h-3 w-3" />
          +20.1% from last month
        </p>
      </div>

      <div className="rounded-lg border p-6 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            Active Users
          </span>
          <Users className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="text-2xl font-bold">
          <SlidingNumber from={0} to={2350} duration={2} delay={0.2} />
        </div>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <TrendingUp className="h-3 w-3" />
          +180.1% from last month
        </p>
      </div>

      <div className="rounded-lg border p-6 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            Total Sales
          </span>
          <ShoppingCart className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="text-2xl font-bold">
          <SlidingNumber from={0} to={12234} duration={2} delay={0.4} />
        </div>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <TrendingUp className="h-3 w-3" />
          +19% from last month
        </p>
      </div>

      <div className="rounded-lg border p-6 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            Conversion Rate
          </span>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold">
            <SlidingNumber from={0} to={3} duration={2} delay={0.6} />
          </span>
          <span className="text-2xl font-bold">.</span>
          <span className="text-2xl font-bold">
            <SlidingNumber from={0} to={42} duration={2} delay={0.6} />
          </span>
          <span className="text-2xl font-bold">%</span>
        </div>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <TrendingUp className="h-3 w-3" />
          +4.5% from last month
        </p>
      </div>
    </div>
  );
}

