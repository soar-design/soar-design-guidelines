"use client";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox,
  Textarea,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Switch,
} from "@soar-design/soar-react-components";
import { Plus, CheckCircle2, Info, Star, Send, Search } from "lucide-react";

export function HomeExamples() {
  return (
    <div className="gap-4 md:grid-cols-2 lg:grid-cols-7 lg:gap-8 grid items-start">
      {/* Payment Method - Takes up 4 columns on large screens */}
      <Card className="shadow-xl lg:col-span-4">
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>
            All transactions are secure and encrypted
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name on Card</Label>
            <Input id="name" placeholder="John Doe" defaultValue="John Doe" />
          </div>
          <div className="gap-4 grid grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="card">Card Number</Label>
              <Input id="card" placeholder="1234 5678 9012 3456" />
              <p className="text-muted-foreground text-xs">
                Enter your 16-digit number.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="123" maxLength={3} />
            </div>
          </div>
          <div className="gap-4 grid grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="month">Month</Label>
              <Select defaultValue="12">
                <SelectTrigger id="month">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1)}>
                      {String(i + 1).padStart(2, "0")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <Select defaultValue="2025">
                <SelectTrigger id="year">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => (
                    <SelectItem key={2025 + i} value={String(2025 + i)}>
                      {2025 + i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm">
              The billing address associated with your payment method
            </p>
            <div className="space-x-2 flex items-center">
              <Checkbox id="same-address" defaultChecked />
              <Label
                htmlFor="same-address"
                className="text-sm font-normal cursor-pointer"
              >
                Same as shipping address
              </Label>
            </div>
          </div>
        </CardContent>
        <CardFooter className="gap-2 flex justify-end">
          <Button variant="outline">Cancel</Button>
          <Button variant="default">Submit</Button>
        </CardFooter>
      </Card>

      {/* Right Column - Takes up 3 columns */}
      <div className="space-y-4 lg:col-span-3 lg:space-y-8">
        {/* Team Members Card */}
        <Card className="shadow-xl">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>
                  Invite your team to collaborate.
                </CardDescription>
              </div>
              <Button size="sm" variant="default">
                <Plus className="mr-2 h-4 w-4" />
                Invite
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="-space-x-2 flex">
              <Avatar className="border-background border-2">
                <AvatarImage
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                  alt="John"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="border-background border-2">
                <AvatarImage
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
                  alt="Jane"
                />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <Avatar className="border-background border-2">
                <AvatarImage
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bob"
                  alt="Bob"
                />
                <AvatarFallback>BJ</AvatarFallback>
              </Avatar>
              <Avatar className="border-background border-2">
                <AvatarFallback>+5</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        {/* Settings Card (Cookie/Security style) */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>Manage your preferences.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="2fa">Two-factor auth</Label>
                <p className="text-muted-foreground text-sm">
                  Verify via email.
                </p>
              </div>
              <Switch id="2fa" defaultChecked />
            </div>
            <div className="gap-2 text-sm flex items-center">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Verified profile</span>
            </div>
          </CardContent>
        </Card>

        {/* Search/Chat mockup */}
        <div className="bg-card text-card-foreground rounded-lg shadow-xl border">
          <div className="space-y-4 p-4">
            <div className="relative">
              <Search className="text-muted-foreground left-3 h-4 w-4 absolute top-1/2 -translate-y-1/2" />
              <Input placeholder="Search..." className="pl-9" />
            </div>
            <div className="relative">
              <Textarea
                placeholder="Type a message..."
                rows={2}
                className="pr-12 resize-none"
              />
              <Button
                size="icon"
                variant="default"
                className="right-2 bottom-2 h-7 w-7 absolute"
              >
                <Send className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
