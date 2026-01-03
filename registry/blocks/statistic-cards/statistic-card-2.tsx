import { Badge } from "@soar-design/soar-react-components";
import { Card, CardContent, CardHeader, CardTitle, CardToolbar } from "@soar-design/soar-react-components";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@soar-design/soar-react-components";
import { Separator } from "@soar-design/soar-react-components";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@soar-design/soar-react-components";
import { Info } from "lucide-react";

export default function Component() {
  const alerts = [
    { name: "Acme Corp", plan: "Enterprise", daysLeft: 3, renewUrl: "#" },
    { name: "Beta LLC", plan: "Pro", daysLeft: 5, renewUrl: "#" },
    { name: "Gamma Inc", plan: "Pro", daysLeft: 7, renewUrl: "#" },
  ];

  return (
    <div className="w-full flex items-center justify-center p-6 lg:p-8">
      <Card className="w-full">
        <CardHeader className="border-0 py-6">
          <CardTitle>Subscription Alerts</CardTitle>
          <CardToolbar>
            <Select defaultValue="this-month">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select a plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
                <SelectItem value="this-year">This Year</SelectItem>
                <SelectItem value="last-year">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </CardToolbar>
        </CardHeader>
        <CardContent>
          {/* Stats Row */}
          <div className="flex items-center gap-2.5 mb-4">
            <div className="flex flex-col gap-1.5 flex-1">
              <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
                Total Revenue
              </div>
              <div className="text-3xl font-bold text-foreground">$128,400</div>
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
                Subscriptions
              </div>
              <div className="text-3xl font-bold text-foreground">312</div>
            </div>
          </div>
          {/* Segmented Progress Bar */}
          <div className="flex items-center gap-0.5 w-full h-2.5 rounded-full overflow-hidden mb-3.5 bg-muted">
            <div className="bg-brand-500 h-full" style={{ width: "60%" }} />
            <div className="bg-purple-500 h-full" style={{ width: "30%" }} />
            <div className="bg-orange-500 h-full" style={{ width: "10%" }} />
          </div>
          {/* Legend */}
          <div className="flex items-center gap-5 mb-6">
            <div className="flex items-center gap-1 text-xs text-brand-500">
              <span className="size-2 rounded-full bg-brand-500 inline-block" /> Free
            </div>
            <div className="flex items-center gap-1 text-xs text-purple-500">
              <span className="size-2 rounded-full bg-purple-500 inline-block" /> Pro
            </div>
            <div className="flex items-center gap-1 text-xs text-orange-500">
              <span className="size-2 rounded-full bg-orange-500 inline-block" /> Enterprise
              <span className="ms-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="size-3.5 text-muted-foreground cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <span>Enterprise plans are custom contracts with premium support.</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </span>
            </div>
          </div>
          {/* Expiring Soon List */}
          <div className="flex items-center justify-between mb-2.5">
            <div className="text-xs text-muted-foreground tracking-wide uppercase">
              Expiring Soon
            </div>
            <a href="#" className="text-sm text-primary font-medium hover:underline">
              View all
            </a>
          </div>
          {alerts.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between bg-muted/40 rounded-md px-3 py-2.5 mb-2 last:mb-0"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-sm font-medium text-foreground">{item.name}</span>
                <Badge size="sm" variant="outline">
                  {item.plan}
                </Badge>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-xs text-muted-foreground">
                  in <span className="font-semibold text-foreground">{item.daysLeft}d</span>
                </span>
                <Separator orientation="vertical" className="h-3 bg-accent-foreground/20" />
                <a
                  href={item.renewUrl}
                  className="text-xs text-primary font-medium hover:underline"
                >
                  Renew
                </a>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
