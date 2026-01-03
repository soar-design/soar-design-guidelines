"use client";

import React from "react";
import { Button, Badge, Separator, Card, CardContent } from "@soar-design/soar-react-components";
import {
  UserPen,
  Bell,
  CalendarCheck,
  Trash2,
  Mail,
  Settings,
  User,
  X,
  MailCheck,
  CircleCheckBig,
  ChevronRight,
  LoaderCircleIcon,
  CalendarIcon,
} from "lucide-react";
import Link from "next/link";

export default function ButtonPage() {
  return (
    <div className="p-8 space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Button</h1>
        <p className="font-mono text-foreground">
          A versatile button component with multiple variants, sizes, and states. Use the guide
          below each section to recreate this component in Figma.
        </p>
      </div>

      {/* Component Props Matrix - Comprehensive Visual Grid */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Component Props Matrix</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete visual reference showing all combinations. Rows: Radius × Size. Columns:
                Variant × State.
              </p>
            </div>

            <div className="overflow-x-auto border border-border rounded-lg">
              <div className="inline-block min-w-full">
                <table className="w-full border-collapse text-xs">
                  {/* Header Row - Variants */}
                  <thead className="sticky top-0 z-20">
                    <tr>
                      <th
                        rowSpan={2}
                        className="p-2 text-left font-semibold bg-muted/50 border border-border sticky left-0 z-30 min-w-[80px]"
                      >
                        <div className="flex flex-col">
                          <span>Radius</span>
                          <span className="text-[10px] font-normal">Size</span>
                        </div>
                      </th>
                      {(
                        [
                          "primary",
                          "secondary",
                          "outline",
                          "ghost",
                          "destructive",
                          "dim",
                          "foreground",
                          "inverse",
                          "mono",
                          "dashed",
                        ] as const
                      ).map((variant) => (
                        <th
                          key={variant}
                          colSpan={4}
                          className="p-2 text-center font-semibold bg-muted/50 border border-border uppercase"
                        >
                          {variant}
                        </th>
                      ))}
                    </tr>
                    {/* Header Row - States */}
                    <tr>
                      {(
                        [
                          "primary",
                          "secondary",
                          "outline",
                          "ghost",
                          "destructive",
                          "dim",
                          "foreground",
                          "inverse",
                          "mono",
                          "dashed",
                        ] as const
                      ).map((variant) =>
                        (["default", "hover", "focus", "disabled"] as const).map((state) => (
                          <th
                            key={`${variant}-${state}`}
                            className="p-1 text-center font-medium bg-muted/30 border border-border text-[10px] min-w-[100px]"
                          >
                            {state === "hover"
                              ? "Hover & Active"
                              : state === "focus"
                                ? "Focus"
                                : state === "disabled"
                                  ? "Disabled"
                                  : "Default"}
                          </th>
                        ))
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Default Radius - Large */}
                    <tr>
                      <td
                        rowSpan={4}
                        className="p-2 text-center font-semibold bg-muted/40 border border-border align-middle sticky left-0 z-20 min-w-[80px]"
                      >
                        <div className="writing-vertical-rl transform rotate-180 uppercase whitespace-nowrap">
                          Default
                        </div>
                      </td>
                      <td className="p-1 text-xs font-medium text-muted-foreground border border-border bg-muted/20 align-middle">
                        Large
                      </td>
                      {(
                        [
                          "primary",
                          "secondary",
                          "outline",
                          "ghost",
                          "destructive",
                          "dim",
                          "foreground",
                          "inverse",
                          "mono",
                          "dashed",
                        ] as const
                      ).map((variant) =>
                        (["default", "hover", "focus", "disabled"] as const).map((state) => (
                          <td
                            key={`default-lg-${variant}-${state}`}
                            className="p-2 border border-border bg-background"
                          >
                            <div className="flex justify-center">
                              <Button
                                variant={variant}
                                size="lg"
                                disabled={state === "disabled"}
                                className={
                                  state === "focus" ? "ring-2 ring-offset-2 ring-foreground" : ""
                                }
                              >
                                Label
                              </Button>
                            </div>
                          </td>
                        ))
                      )}
                    </tr>
                    {/* Default Radius - Regular */}
                    <tr>
                      <td className="p-1 text-xs font-medium text-muted-foreground border border-border bg-muted/20 align-middle">
                        Regular
                      </td>
                      {(
                        [
                          "primary",
                          "secondary",
                          "outline",
                          "ghost",
                          "destructive",
                          "dim",
                          "foreground",
                          "inverse",
                          "mono",
                          "dashed",
                        ] as const
                      ).map((variant) =>
                        (["default", "hover", "focus", "disabled"] as const).map((state) => (
                          <td
                            key={`default-md-${variant}-${state}`}
                            className="p-2 border border-border bg-background"
                          >
                            <div className="flex justify-center">
                              <Button
                                variant={variant}
                                size="md"
                                disabled={state === "disabled"}
                                className={
                                  state === "focus" ? "ring-2 ring-offset-2 ring-foreground" : ""
                                }
                              >
                                Label
                              </Button>
                            </div>
                          </td>
                        ))
                      )}
                    </tr>
                    {/* Default Radius - Small */}
                    <tr>
                      <td className="p-1 text-xs font-medium text-muted-foreground border border-border bg-muted/20 align-middle">
                        Small
                      </td>
                      {(
                        [
                          "primary",
                          "secondary",
                          "outline",
                          "ghost",
                          "destructive",
                          "dim",
                          "foreground",
                          "inverse",
                          "mono",
                          "dashed",
                        ] as const
                      ).map((variant) =>
                        (["default", "hover", "focus", "disabled"] as const).map((state) => (
                          <td
                            key={`default-sm-${variant}-${state}`}
                            className="p-2 border border-border bg-background"
                          >
                            <div className="flex justify-center">
                              <Button
                                variant={variant}
                                size="sm"
                                disabled={state === "disabled"}
                                className={
                                  state === "focus" ? "ring-2 ring-offset-2 ring-foreground" : ""
                                }
                              >
                                Label
                              </Button>
                            </div>
                          </td>
                        ))
                      )}
                    </tr>
                    {/* Default Radius - XSmall */}
                    <tr>
                      <td className="p-1 text-xs font-medium text-muted-foreground border border-border bg-muted/20 align-middle">
                        XSmall
                      </td>
                      {(
                        [
                          "primary",
                          "secondary",
                          "outline",
                          "ghost",
                          "destructive",
                          "dim",
                          "foreground",
                          "inverse",
                          "mono",
                          "dashed",
                        ] as const
                      ).map((variant) =>
                        (["default", "hover", "focus", "disabled"] as const).map((state) => (
                          <td
                            key={`default-xs-${variant}-${state}`}
                            className="p-2 border border-border bg-background"
                          >
                            <div className="flex justify-center">
                              <Button
                                variant={variant}
                                size="xs"
                                disabled={state === "disabled"}
                                className={
                                  state === "focus" ? "ring-2 ring-offset-2 ring-foreground" : ""
                                }
                              >
                                Label
                              </Button>
                            </div>
                          </td>
                        ))
                      )}
                    </tr>

                    {/* Full Radius - Large */}
                    <tr>
                      <td
                        rowSpan={4}
                        className="p-2 text-center font-semibold bg-muted/40 border border-border align-middle sticky left-0 z-20 min-w-[80px]"
                      >
                        <div className="writing-vertical-rl transform rotate-180 uppercase whitespace-nowrap">
                          Round
                        </div>
                      </td>
                      <td className="p-1 text-xs font-medium text-muted-foreground border border-border bg-muted/20 align-middle">
                        Large
                      </td>
                      {(
                        [
                          "primary",
                          "secondary",
                          "outline",
                          "ghost",
                          "destructive",
                          "dim",
                          "foreground",
                          "inverse",
                          "mono",
                          "dashed",
                        ] as const
                      ).map((variant) =>
                        (["default", "hover", "focus", "disabled"] as const).map((state) => (
                          <td
                            key={`full-lg-${variant}-${state}`}
                            className="p-2 border border-border bg-background"
                          >
                            <div className="flex justify-center">
                              <Button
                                variant={variant}
                                size="lg"
                                radius="full"
                                disabled={state === "disabled"}
                                className={
                                  state === "focus" ? "ring-2 ring-offset-2 ring-foreground" : ""
                                }
                              >
                                Label
                              </Button>
                            </div>
                          </td>
                        ))
                      )}
                    </tr>
                    {/* Full Radius - Regular */}
                    <tr>
                      <td className="p-1 text-xs font-medium text-muted-foreground border border-border bg-muted/20 align-middle">
                        Regular
                      </td>
                      {(
                        [
                          "primary",
                          "secondary",
                          "outline",
                          "ghost",
                          "destructive",
                          "dim",
                          "foreground",
                          "inverse",
                          "mono",
                          "dashed",
                        ] as const
                      ).map((variant) =>
                        (["default", "hover", "focus", "disabled"] as const).map((state) => (
                          <td
                            key={`full-md-${variant}-${state}`}
                            className="p-2 border border-border bg-background"
                          >
                            <div className="flex justify-center">
                              <Button
                                variant={variant}
                                size="md"
                                radius="full"
                                disabled={state === "disabled"}
                                className={
                                  state === "focus" ? "ring-2 ring-offset-2 ring-foreground" : ""
                                }
                              >
                                Label
                              </Button>
                            </div>
                          </td>
                        ))
                      )}
                    </tr>
                    {/* Full Radius - Small */}
                    <tr>
                      <td className="p-1 text-xs font-medium text-muted-foreground border border-border bg-muted/20 align-middle">
                        Small
                      </td>
                      {(
                        [
                          "primary",
                          "secondary",
                          "outline",
                          "ghost",
                          "destructive",
                          "dim",
                          "foreground",
                          "inverse",
                          "mono",
                          "dashed",
                        ] as const
                      ).map((variant) =>
                        (["default", "hover", "focus", "disabled"] as const).map((state) => (
                          <td
                            key={`full-sm-${variant}-${state}`}
                            className="p-2 border border-border bg-background"
                          >
                            <div className="flex justify-center">
                              <Button
                                variant={variant}
                                size="sm"
                                radius="full"
                                disabled={state === "disabled"}
                                className={
                                  state === "focus" ? "ring-2 ring-offset-2 ring-foreground" : ""
                                }
                              >
                                Label
                              </Button>
                            </div>
                          </td>
                        ))
                      )}
                    </tr>
                    {/* Full Radius - XSmall */}
                    <tr>
                      <td className="p-1 text-xs font-medium text-muted-foreground border border-border bg-muted/20 align-middle">
                        XSmall
                      </td>
                      {(
                        [
                          "primary",
                          "secondary",
                          "outline",
                          "ghost",
                          "destructive",
                          "dim",
                          "foreground",
                          "inverse",
                          "mono",
                          "dashed",
                        ] as const
                      ).map((variant) =>
                        (["default", "hover", "focus", "disabled"] as const).map((state) => (
                          <td
                            key={`full-xs-${variant}-${state}`}
                            className="p-2 border border-border bg-background"
                          >
                            <div className="flex justify-center">
                              <Button
                                variant={variant}
                                size="xs"
                                radius="full"
                                disabled={state === "disabled"}
                                className={
                                  state === "focus" ? "ring-2 ring-offset-2 ring-foreground" : ""
                                }
                              >
                                Label
                              </Button>
                            </div>
                          </td>
                        ))
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-4 p-4 bg-muted/30 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-semibold mb-2">Row Structure:</p>
                  <ul className="space-y-1 font-mono text-foreground">
                    <li>• Radius: Default (top 4 rows) / Round (bottom 4 rows)</li>
                    <li>• Size: Large / Regular / Small / XSmall (within each radius)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Column Structure:</p>
                  <ul className="space-y-1 font-mono text-foreground">
                    <li>• Variants: 10 columns (Primary through Dashed)</li>
                    <li>• States: 4 sub-columns per variant (Default, Hover, Focus, Disabled)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs font-mono text-foreground">
                  <strong>Total Cells:</strong> 2 radius × 4 sizes × 10 variants × 4 states ={" "}
                  <strong>320 button combinations</strong>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Component Structure Overview */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Component Structure</h3>
              <ul className="space-y-1 font-mono text-foreground">
                <li>
                  <strong>Variants (10):</strong> Primary, Secondary, Outline, Ghost, Dim,
                  Destructive, Foreground, Inverse, Mono, Dashed
                </li>
                <li>
                  <strong>Sizes (4):</strong> XSmall (xs), Small (sm), Medium (md), Large (lg)
                </li>
                <li>
                  <strong>Modes (4):</strong> Default, Icon Only, Link, Input
                </li>
                <li>
                  <strong>States (3):</strong> Default, Hover, Disabled
                </li>
                <li>
                  <strong>Radius (2):</strong> Default, Full
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Figma Setup</h3>
              <p className="font-mono text-foreground">
                Create a Component Set with Variant Properties for: Variant, Size, Mode, State, and
                Radius. Use Auto Layout (Horizontal) with padding that varies by size.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Default Button */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Default</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex items-center gap-4">
              <Button>Button</Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-3 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Background:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">bg-foreground</code> → CSS:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--foreground)</code>
                      </li>
                      <li>
                        Text: <code className="bg-muted px-1 py-0.5 rounded">text-background</code>{" "}
                        → CSS:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--background)</code>
                      </li>
                      <li>
                        Padding: <code className="bg-muted px-1 py-0.5 rounded">px-4 py-2</code> →
                        8px 16px (vertical horizontal)
                      </li>
                      <li>
                        Border radius:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">rounded-md</code> → CSS:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--radius)</code> (6px)
                      </li>
                      <li>
                        Font:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">text-base font-medium</code>{" "}
                        → 16px, weight 500
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Variables:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Background: Use{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">--foreground</code> variable
                      </li>
                      <li>
                        Text: Use <code className="bg-muted px-1 py-0.5 rounded">--background</code>{" "}
                        variable
                      </li>
                      <li>
                        Border radius: Use{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">--radius</code> variable
                        (6px)
                      </li>
                      <li>
                        Hover: Background →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--foreground)</code> with
                        opacity/lightness adjustment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* All Variants */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Variants</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="dim">Dim</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="foreground">Foreground</Button>
              <Button variant="inverse">Inverse</Button>
              <Button variant="mono">Mono</Button>
              <Button variant="dashed">Dashed</Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-3">
                <p className="font-semibold">Figma Specifications - Variant Tokens:</p>
                <div className="grid grid-cols-2 gap-3 font-mono text-foreground">
                  <div>
                    <p className="font-medium mb-1">Primary</p>
                    <ul className="space-y-0.5 text-xs">
                      <li>
                        Tailwind: <code className="bg-muted px-1 py-0.5 rounded">bg-primary</code>
                      </li>
                      <li>
                        CSS Variable:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--primary)</code>
                      </li>
                      <li>
                        Text:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          text-primary-foreground
                        </code>{" "}
                        →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          var(--primary-foreground)
                        </code>
                      </li>
                      <li>
                        Hover:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">hover:bg-primary/90</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--primary)</code> at 90%
                        opacity
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Secondary</p>
                    <ul className="space-y-0.5 text-xs">
                      <li>
                        Tailwind: <code className="bg-muted px-1 py-0.5 rounded">bg-secondary</code>
                      </li>
                      <li>
                        CSS Variable:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--secondary)</code>
                      </li>
                      <li>
                        Text:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          text-secondary-foreground
                        </code>{" "}
                        →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          var(--secondary-foreground)
                        </code>
                      </li>
                      <li>
                        Hover:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">hover:bg-secondary/80</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--secondary)</code> at
                        80% opacity
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Outline</p>
                    <ul className="space-y-0.5 text-xs">
                      <li>
                        Background:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">bg-transparent</code>{" "}
                        (transparent)
                      </li>
                      <li>
                        Border: <code className="bg-muted px-1 py-0.5 rounded">border</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--border)</code> (1px
                        solid)
                      </li>
                      <li>
                        Text: <code className="bg-muted px-1 py-0.5 rounded">text-foreground</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--foreground)</code>
                      </li>
                      <li>
                        Hover: <code className="bg-muted px-1 py-0.5 rounded">hover:bg-accent</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--accent)</code>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Ghost</p>
                    <ul className="space-y-0.5 text-xs">
                      <li>
                        Background:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">bg-transparent</code>{" "}
                        (transparent)
                      </li>
                      <li>
                        Text: <code className="bg-muted px-1 py-0.5 rounded">text-foreground</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--foreground)</code>
                      </li>
                      <li>
                        Hover: <code className="bg-muted px-1 py-0.5 rounded">hover:bg-accent</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--accent)</code>
                      </li>
                      <li>Border: None</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Dim</p>
                    <ul className="space-y-0.5 text-xs">
                      <li>
                        Tailwind: <code className="bg-muted px-1 py-0.5 rounded">bg-muted</code>
                      </li>
                      <li>
                        CSS Variable:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--muted)</code>
                      </li>
                      <li>
                        Text: <code className="bg-muted px-1 py-0.5 rounded">text-foreground</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--foreground)</code>
                      </li>
                      <li>
                        Hover:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">hover:bg-muted/80</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--muted)</code> at 80%
                        opacity
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Destructive</p>
                    <ul className="space-y-0.5 text-xs">
                      <li>
                        Tailwind:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">bg-destructive</code>
                      </li>
                      <li>
                        CSS Variable:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--destructive)</code>
                      </li>
                      <li>
                        Text:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          text-destructive-foreground
                        </code>{" "}
                        →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          var(--destructive-foreground)
                        </code>
                      </li>
                      <li>
                        Hover:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          hover:bg-destructive/90
                        </code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--destructive)</code>{" "}
                        at 90% opacity
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Foreground</p>
                    <ul className="space-y-0.5 text-xs">
                      <li>
                        Tailwind:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">bg-foreground</code>
                      </li>
                      <li>
                        CSS Variable:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--foreground)</code>
                      </li>
                      <li>
                        Text: <code className="bg-muted px-1 py-0.5 rounded">text-background</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--background)</code>
                      </li>
                      <li>
                        Hover:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">hover:bg-foreground/90</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--foreground)</code> at
                        90% opacity
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Inverse</p>
                    <ul className="space-y-0.5 text-xs">
                      <li>
                        Tailwind:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">bg-background</code>
                      </li>
                      <li>
                        CSS Variable:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--background)</code>
                      </li>
                      <li>
                        Text: <code className="bg-muted px-1 py-0.5 rounded">text-foreground</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--foreground)</code>
                      </li>
                      <li>
                        Border: <code className="bg-muted px-1 py-0.5 rounded">border</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--border)</code> (1px
                        solid)
                      </li>
                      <li>
                        Hover: <code className="bg-muted px-1 py-0.5 rounded">hover:bg-accent</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--accent)</code>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Mono</p>
                    <ul className="space-y-0.5 text-xs">
                      <li>
                        Tailwind: <code className="bg-muted px-1 py-0.5 rounded">bg-muted</code>{" "}
                        (darker variant)
                      </li>
                      <li>
                        CSS Variable:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--muted)</code> (use
                        darker shade)
                      </li>
                      <li>
                        Text: <code className="bg-muted px-1 py-0.5 rounded">text-foreground</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--foreground)</code>
                      </li>
                      <li>
                        Hover:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">hover:bg-muted/80</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--muted)</code> at 80%
                        opacity
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Dashed</p>
                    <ul className="space-y-0.5 text-xs">
                      <li>
                        Background:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">bg-transparent</code>{" "}
                        (transparent)
                      </li>
                      <li>
                        Border:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">border-2 border-dashed</code>{" "}
                        → 2px dashed{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--border)</code>
                      </li>
                      <li>
                        Text: <code className="bg-muted px-1 py-0.5 rounded">text-foreground</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--foreground)</code>
                      </li>
                      <li>
                        Hover: <code className="bg-muted px-1 py-0.5 rounded">hover:bg-accent</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--accent)</code>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* All Sizes - Regular Mode */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Sizes - Regular Mode</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="xs">
                  XSmall
                </Button>
                <Button variant="outline" size="sm">
                  Small
                </Button>
                <Button variant="outline" size="md">
                  Medium
                </Button>
                <Button variant="outline" size="lg">
                  Large
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="primary" size="xs">
                  XSmall
                </Button>
                <Button variant="primary" size="sm">
                  Small
                </Button>
                <Button variant="primary" size="md">
                  Medium
                </Button>
                <Button variant="primary" size="lg">
                  Large
                </Button>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications - Size Tokens:</p>
                <div className="grid grid-cols-2 gap-3 font-mono text-foreground">
                  <div>
                    <p className="font-medium mb-1">XSmall (xs)</p>
                    <ul className="space-y-0.5 text-xs">
                      <li>
                        Tailwind Padding:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">px-2 py-1</code> → 4px
                        vertical, 8px horizontal
                      </li>
                      <li>
                        Tailwind Font: <code className="bg-muted px-1 py-0.5 rounded">text-xs</code>{" "}
                        → 12px (0.75rem)
                      </li>
                      <li>
                        Tailwind Line Height:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">leading-4</code> → 16px
                        (1rem)
                      </li>
                      <li>Icon size: 12px (matches font size)</li>
                      <li>
                        Gap (icon-text): <code className="bg-muted px-1 py-0.5 rounded">gap-2</code>{" "}
                        → 8px
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Small (sm)</p>
                    <ul className="space-y-0.5 text-xs">
                      <li>
                        Tailwind Padding:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">px-3 py-1.5</code> → 6px
                        vertical, 14px horizontal
                      </li>
                      <li>
                        Tailwind Font: <code className="bg-muted px-1 py-0.5 rounded">text-sm</code>{" "}
                        → 14px (0.875rem)
                      </li>
                      <li>
                        Tailwind Line Height:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">leading-5</code> → 20px
                        (1.25rem)
                      </li>
                      <li>Icon size: 14px (matches font size)</li>
                      <li>
                        Gap (icon-text): <code className="bg-muted px-1 py-0.5 rounded">gap-2</code>{" "}
                        → 8px
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Medium (md) - Default</p>
                    <ul className="space-y-0.5 text-xs">
                      <li>
                        Tailwind Padding:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">px-4 py-2</code> → 8px
                        vertical, 16px horizontal
                      </li>
                      <li>
                        Tailwind Font:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">text-base</code> → 16px
                        (1rem)
                      </li>
                      <li>
                        Tailwind Line Height:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">leading-6</code> → 24px
                        (1.5rem)
                      </li>
                      <li>Icon size: 16px (matches font size)</li>
                      <li>
                        Gap (icon-text): <code className="bg-muted px-1 py-0.5 rounded">gap-2</code>{" "}
                        → 8px
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Large (lg)</p>
                    <ul className="space-y-0.5 text-xs">
                      <li>
                        Tailwind Padding:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">px-5 py-2.5</code> → 10px
                        vertical, 20px horizontal
                      </li>
                      <li>
                        Tailwind Font: <code className="bg-muted px-1 py-0.5 rounded">text-lg</code>{" "}
                        → 18px (1.125rem)
                      </li>
                      <li>
                        Tailwind Line Height:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">leading-7</code> → 28px
                        (1.75rem)
                      </li>
                      <li>Icon size: 20px (matches font size proportionally)</li>
                      <li>
                        Gap (icon-text): <code className="bg-muted px-1 py-0.5 rounded">gap-2</code>{" "}
                        → 8px
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* All Sizes - With Icons */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Sizes - With Icons</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="xs">
                  <UserPen />
                  XSmall
                </Button>
                <Button variant="outline" size="sm">
                  <UserPen />
                  Small
                </Button>
                <Button variant="outline" size="md">
                  <UserPen />
                  Medium
                </Button>
                <Button variant="outline" size="lg">
                  <UserPen />
                  Large
                </Button>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Gap: <code className="bg-muted px-1 py-0.5 rounded">gap-2</code> → 8px
                        between icon and text
                      </li>
                      <li>
                        Icon size: Matches font size via{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">size-4</code> (xs),{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">size-4</code> (sm),{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">size-4</code> (md),{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">size-5</code> (lg)
                      </li>
                      <li>
                        Icon color: Inherits from{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">text-foreground</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--foreground)</code> or
                        variant text color
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>Icon sizes: xs=12px, sm=14px, md=16px, lg=20px (match font size)</li>
                      <li>Gap: 8px between icon and text in Auto Layout</li>
                      <li>
                        Icon color: Use same color variable as text (var(--foreground) or
                        variant-specific)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* All Sizes - Icon Only Mode */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Sizes - Icon Only Mode</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="xs" mode="icon">
                  <UserPen />
                </Button>
                <Button variant="outline" size="sm" mode="icon">
                  <UserPen />
                </Button>
                <Button variant="outline" mode="icon" size="md">
                  <UserPen />
                </Button>
                <Button variant="outline" size="lg" mode="icon">
                  <UserPen />
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="primary" size="xs" mode="icon">
                  <UserPen />
                </Button>
                <Button variant="primary" size="sm" mode="icon">
                  <UserPen />
                </Button>
                <Button variant="primary" mode="icon" size="md">
                  <UserPen />
                </Button>
                <Button variant="primary" size="lg" mode="icon">
                  <UserPen />
                </Button>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Dimensions: Square via{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">aspect-square</code> or equal
                        width/height
                      </li>
                      <li>
                        Padding: Equal on all sides (matches size padding: xs=4px, sm=6px, md=8px,
                        lg=10px)
                      </li>
                      <li>
                        Icon: Centered via{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          flex items-center justify-center
                        </code>
                      </li>
                      <li>
                        Apply via <code className="bg-muted px-1 py-0.5 rounded">mode="icon"</code>{" "}
                        prop
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>Square dimensions: width = height (use Auto Layout constraints)</li>
                      <li>Equal padding on all sides matching button size</li>
                      <li>Icon centered horizontally and vertically</li>
                      <li>Icon size matches font size for the button size</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Variants with Icons */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Variants with Leading Icons</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">
                <Trash2 /> Primary
              </Button>
              <Button variant="secondary">
                <Trash2 /> Secondary
              </Button>
              <Button variant="outline">
                <Bell /> Outline
              </Button>
              <Button variant="ghost">
                <CalendarCheck /> Ghost
              </Button>
              <Button variant="dim">
                <Settings /> Dim
              </Button>
              <Button variant="destructive">
                <Trash2 /> Destructive
              </Button>
              <Button variant="foreground">
                <User /> Foreground
              </Button>
              <Button variant="inverse">
                <Mail /> Inverse
              </Button>
              <Button variant="mono">
                <Settings /> Mono
              </Button>
              <Button variant="dashed">
                <CalendarCheck /> Dashed
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Layout:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">flex items-center</code> with
                        icon first
                      </li>
                      <li>
                        Gap: <code className="bg-muted px-1 py-0.5 rounded">gap-2</code> → 8px
                        between icon and text
                      </li>
                      <li>
                        Icon color: Inherits from text via{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">text-foreground</code> or
                        variant-specific text color
                      </li>
                      <li>Icon size: Matches font size (xs=12px, sm=14px, md=16px, lg=20px)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>Icon appears before text in Auto Layout (Horizontal direction)</li>
                      <li>Gap: 8px between icon and text</li>
                      <li>
                        Icon color: Use same CSS variable as text color (var(--foreground) or
                        variant-specific)
                      </li>
                      <li>Icon size: Match font size for the button size</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Icon Trailing */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Icon Trailing</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-wrap items-center gap-4">
              <Button radius="full">
                Continue
                <ChevronRight className="ms-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Next
                <ChevronRight className="ms-2 h-4 w-4" />
              </Button>
              <Button variant="primary">
                Submit
                <ChevronRight className="ms-2 h-4 w-4" />
              </Button>
              <Button variant="ghost">
                More
                <ChevronRight className="ms-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Layout:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">flex items-center</code> with
                        text first, icon last
                      </li>
                      <li>
                        Gap: <code className="bg-muted px-1 py-0.5 rounded">gap-2</code> → 8px
                        between text and icon
                      </li>
                      <li>
                        Icon spacing: <code className="bg-muted px-1 py-0.5 rounded">ms-2</code> →
                        8px margin-start
                      </li>
                      <li>
                        Icon size: <code className="bg-muted px-1 py-0.5 rounded">h-4 w-4</code> →
                        16px (or matches font size)
                      </li>
                      <li>
                        Radius: Often{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">radius="full"</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">rounded-full</code>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>Icon appears after text in Auto Layout (Horizontal direction)</li>
                      <li>Gap: 8px between text and icon</li>
                      <li>Commonly used with full radius (9999px) for navigation buttons</li>
                      <li>Icon color: Matches text color from variant</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Icon Only - All Variants */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Icon Only - All Variants</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" mode="icon">
                <User />
              </Button>
              <Button variant="secondary" mode="icon">
                <User />
              </Button>
              <Button variant="outline" mode="icon">
                <Mail />
              </Button>
              <Button variant="ghost" mode="icon">
                <Settings />
              </Button>
              <Button variant="dim" mode="icon">
                <X />
              </Button>
              <Button variant="destructive" mode="icon">
                <Trash2 />
              </Button>
              <Button variant="foreground" mode="icon">
                <Bell />
              </Button>
              <Button variant="inverse" mode="icon">
                <CalendarCheck />
              </Button>
              <Button variant="mono" mode="icon">
                <Settings />
              </Button>
              <Button variant="dashed" mode="icon">
                <Mail />
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        All variants support{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">mode="icon"</code>
                      </li>
                      <li>
                        Dimensions: Square via{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">aspect-square</code>
                      </li>
                      <li>Padding: Equal on all sides (xs=4px, sm=6px, md=8px, lg=10px)</li>
                      <li>Icon: Centered, inherits variant colors (background, text, border)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>All 10 variants support icon-only mode</li>
                      <li>Square dimensions with equal padding matching button size</li>
                      <li>Icon centered, inherits all variant styling (colors, borders, etc.)</li>
                      <li>
                        Apply via <code className="bg-muted px-1 py-0.5 rounded">mode="icon"</code>{" "}
                        prop
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* States - Disabled */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">States - Disabled</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-wrap items-center gap-4">
              <Button disabled>Primary</Button>
              <Button variant="secondary" disabled>
                Secondary
              </Button>
              <Button variant="outline" disabled>
                Outline
              </Button>
              <Button variant="ghost" disabled>
                Ghost
              </Button>
              <Button variant="dim" disabled>
                Dim
              </Button>
              <Button variant="destructive" disabled>
                Destructive
              </Button>
              <Button mode="link" disabled>
                Link
              </Button>
              <Button variant="primary" mode="icon" disabled>
                <User />
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Opacity:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">disabled:opacity-50</code> →
                        50% opacity
                      </li>
                      <li>
                        Cursor:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          disabled:cursor-not-allowed
                        </code>{" "}
                        → not-allowed cursor
                      </li>
                      <li>
                        Pointer Events:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          disabled:pointer-events-none
                        </code>{" "}
                        → no pointer events
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>Apply 50% opacity to entire button component</li>
                      <li>Maintain all original colors but at reduced opacity</li>
                      <li>Set cursor to "not-allowed" in interactive component settings</li>
                      <li>Disable interactions in Figma prototype</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* States - Loading */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">States - Loading</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">
                <LoaderCircleIcon className="animate-spin size-4" />
                Loading...
              </Button>
              <Button variant="outline">
                <LoaderCircleIcon className="animate-spin size-4" />
                Submitting
              </Button>
              <Button variant="ghost">
                <LoaderCircleIcon className="animate-spin size-4" />
                Processing
              </Button>
              <Button variant="primary" mode="icon">
                <LoaderCircleIcon className="animate-spin size-4" />
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Spinner: <code className="bg-muted px-1 py-0.5 rounded">animate-spin</code>{" "}
                        → CSS animation: rotate 360deg
                      </li>
                      <li>
                        Spinner size: <code className="bg-muted px-1 py-0.5 rounded">size-4</code> →
                        Matches icon size for button size (xs=12px, sm=14px, md=16px, lg=20px)
                      </li>
                      <li>
                        Spinner color: Inherits{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">text-foreground</code> or
                        variant text color
                      </li>
                      <li>
                        Layout:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          flex items-center gap-2
                        </code>{" "}
                        → Spinner + text with 8px gap
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Replace text with spinner + "Loading..." text (or spinner only for icon
                        mode)
                      </li>
                      <li>Spinner size: Match icon size for the button size</li>
                      <li>
                        Spinner color: Use same CSS variable as text color (var(--foreground) or
                        variant-specific)
                      </li>
                      <li>
                        Animation: Rotating (use Figma's animation if available, or indicate
                        continuous rotation)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Link Mode */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Link Mode</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-col items-start gap-4">
              <Button mode="link" underline="solid" asChild>
                <Link href="#">Solid Underline</Link>
              </Button>
              <Button mode="link" underline="dashed" asChild>
                <Link href="#">Dashed Underline</Link>
              </Button>
              <Button mode="link" underlined="solid" asChild>
                <Link href="#">Underlined - Solid</Link>
              </Button>
              <Button mode="link" underlined="dashed" asChild>
                <Link href="#">Underlined - Dashed</Link>
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Background:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">bg-transparent</code>{" "}
                        (transparent)
                      </li>
                      <li>
                        Text: <code className="bg-muted px-1 py-0.5 rounded">text-primary</code> →
                        CSS: <code className="bg-muted px-1 py-0.5 rounded">var(--primary)</code>
                      </li>
                      <li>
                        Underline: <code className="bg-muted px-1 py-0.5 rounded">underline</code> →
                        solid underline
                      </li>
                      <li>
                        Underline Dashed:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">underline-dashed</code> →
                        dashed underline
                      </li>
                      <li>
                        Hover: <code className="bg-muted px-1 py-0.5 rounded">hover:underline</code>{" "}
                        or{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">hover:text-primary/80</code>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Variables:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Text color: Use{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">--primary</code> variable
                      </li>
                      <li>Underline: Text decoration underline (solid or dashed)</li>
                      <li>Background: Transparent (no fill)</li>
                      <li>
                        Apply via <code className="bg-muted px-1 py-0.5 rounded">mode="link"</code>{" "}
                        prop
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Input Mode */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Input Mode</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="space-y-4">
              <div className="relative w-64">
                <Button
                  type="button"
                  variant="outline"
                  mode="input"
                  placeholder={true}
                  className="w-full"
                >
                  <CalendarIcon />
                  <span>Pick a date</span>
                </Button>
              </div>
              <div className="relative w-64">
                <Button
                  type="button"
                  variant="outline"
                  mode="input"
                  placeholder={false}
                  className="w-full"
                >
                  <CalendarIcon />
                  <span>January 15, 2024</span>
                </Button>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Background:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">bg-transparent</code>{" "}
                        (transparent)
                      </li>
                      <li>
                        Border: <code className="bg-muted px-1 py-0.5 rounded">border</code> → CSS:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--border)</code> (1px
                        solid)
                      </li>
                      <li>
                        Placeholder text:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">text-muted-foreground</code>{" "}
                        → CSS:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          var(--muted-foreground)
                        </code>
                      </li>
                      <li>
                        Width: <code className="bg-muted px-1 py-0.5 rounded">w-full</code> → 100%
                        width
                      </li>
                      <li>
                        Gap: <code className="bg-muted px-1 py-0.5 rounded">gap-2</code> → 8px
                        between icon and text
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Variables:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Border: Use <code className="bg-muted px-1 py-0.5 rounded">--border</code>{" "}
                        variable (1px solid)
                      </li>
                      <li>
                        Placeholder text: Use{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">--muted-foreground</code>{" "}
                        variable
                      </li>
                      <li>
                        Regular text: Use{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">--foreground</code> variable
                      </li>
                      <li>Background: Transparent (no fill)</li>
                      <li>
                        Apply via <code className="bg-muted px-1 py-0.5 rounded">mode="input"</code>{" "}
                        prop
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* With Badges */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">With Badges</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-col items-center gap-6">
              <Button variant="outline" mode="icon" className="relative">
                <Bell />
                <span className="border-2 border-background rounded-full size-3 bg-primary absolute -top-1 -end-1 animate-bounce" />
              </Button>

              <Button variant="outline" mode="icon" className="relative">
                <MailCheck />
                <Badge
                  variant="primary"
                  shape="circle"
                  size="sm"
                  className="absolute top-0 start-full -translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2"
                >
                  5
                </Badge>
              </Button>

              <Button variant="outline" className="relative">
                <MailCheck />
                Messages
                <Badge
                  variant="destructive"
                  shape="circle"
                  size="sm"
                  className="absolute top-0 start-full -translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2"
                >
                  5
                </Badge>
              </Button>

              <Button variant="outline">
                <CircleCheckBig />
                Notifications
                <Badge variant="primary" shape="circle" size="sm">
                  10+
                </Badge>
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Position: <code className="bg-muted px-1 py-0.5 rounded">absolute</code>{" "}
                        with <code className="bg-muted px-1 py-0.5 rounded">top-0 start-full</code>
                      </li>
                      <li>
                        Transform:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          -translate-y-1/2 -translate-x-1/2
                        </code>{" "}
                        → Center on top-right
                      </li>
                      <li>
                        Badge colors:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">bg-primary</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--primary)</code>,{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">bg-destructive</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--destructive)</code>
                      </li>
                      <li>
                        Badge border:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          border-2 border-background
                        </code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--background)</code>{" "}
                        (2px)
                      </li>
                      <li>
                        Badge size: <code className="bg-muted px-1 py-0.5 rounded">size-sm</code> →
                        Small badge variant
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Badge positioned absolutely: top-right for icon buttons, inline or top-right
                        for text buttons
                      </li>
                      <li>
                        Badge variants: Dot (small circle), Number (circle with text), Inline (next
                        to text)
                      </li>
                      <li>
                        Badge colors: Use{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">--primary</code> or{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">--destructive</code>{" "}
                        variables
                      </li>
                      <li>
                        Badge border: Use{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">--background</code> variable
                        (2px solid)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Radius */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Radius</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-wrap items-center gap-4">
              <Button>Default Radius</Button>
              <Button radius="full">Full Radius</Button>
              <Button variant="outline" radius="full">
                Outline Full
              </Button>
              <Button variant="primary" radius="full">
                Primary Full
              </Button>
              <Button variant="ghost" radius="full">
                Ghost Full
              </Button>
              <Button variant="dim" radius="full">
                Dim Full
              </Button>
              <Button variant="foreground" radius="full">
                Foreground Full
              </Button>
              <Button variant="inverse" radius="full">
                Inverse Full
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Default: <code className="bg-muted px-1 py-0.5 rounded">rounded-md</code> →
                        CSS: <code className="bg-muted px-1 py-0.5 rounded">var(--radius)</code>{" "}
                        (6px / 0.375rem)
                      </li>
                      <li>
                        Full: <code className="bg-muted px-1 py-0.5 rounded">rounded-full</code> →
                        9999px (pill shape)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Variables:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Default radius: Use{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">--radius</code> variable
                        (6px)
                      </li>
                      <li>Full radius: Set corner radius to 9999px (or use a very large value)</li>
                      <li>
                        Apply via{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">radius="full"</code> prop
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Full Width */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Full Width</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="max-w-md w-full space-y-4">
              <Button variant="primary" className="w-full">
                Full Width Button
              </Button>
              <Button variant="outline" className="w-full">
                Full Width Outline
              </Button>
              <Button variant="ghost" className="w-full">
                Full Width Ghost
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Width: <code className="bg-muted px-1 py-0.5 rounded">w-full</code> → 100%
                        width
                      </li>
                      <li>
                        Container: <code className="bg-muted px-1 py-0.5 rounded">max-w-md</code> →
                        Optional max-width constraint
                      </li>
                      <li>
                        Padding: Maintains size-specific padding (xs=4px 8px, sm=6px 14px, md=8px
                        16px, lg=10px 20px)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>Width: 100% of container</li>
                      <li>Use constraints: Left & Right in Figma Auto Layout</li>
                      <li>Maintain padding and height from button size</li>
                      <li>Text alignment: Center (default)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Ghost Appearance Variants */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Ghost Appearance</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="ghost">Default Ghost</Button>
              <Button variant="primary" appearance="ghost">
                Primary Ghost
              </Button>
              <Button variant="secondary" appearance="ghost">
                Secondary Ghost
              </Button>
              <Button variant="destructive" appearance="ghost">
                Destructive Ghost
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Background:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">bg-transparent</code>{" "}
                        (transparent)
                      </li>
                      <li>
                        Hover - Primary:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">hover:bg-primary/10</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--primary)</code> at 10%
                        opacity
                      </li>
                      <li>
                        Hover - Secondary:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">hover:bg-secondary/10</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--secondary)</code> at
                        10% opacity
                      </li>
                      <li>
                        Hover - Destructive:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          hover:bg-destructive/10
                        </code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--destructive)</code>{" "}
                        at 10% opacity
                      </li>
                      <li>
                        Text: Matches variant color (e.g.,{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">text-primary</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--primary)</code>)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Apply via{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">appearance="ghost"</code>{" "}
                        prop
                      </li>
                      <li>Background: Transparent with subtle tinted hover</li>
                      <li>Hover: Use variant color at 10% opacity (e.g., var(--primary) at 10%)</li>
                      <li>Text color: Matches variant color (use variant-specific CSS variable)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* As Child */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">As Child (with Link)</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-wrap items-center gap-4">
              <Button radius="full" asChild>
                <Link href="/docs">Go to Docs</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/example">Go to Example</Link>
              </Button>
              <Button variant="primary" asChild>
                <Link href="/figma">Go to Figma</Link>
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>All button classes apply: Variant styles, sizes, radius, etc.</li>
                      <li>
                        Link wrapper: Button styles transfer to{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">&lt;Link&gt;</code> element
                      </li>
                      <li>Maintains: All padding, colors, borders, radius from button variant</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Apply via <code className="bg-muted px-1 py-0.5 rounded">asChild</code> prop
                        (renders as Link)
                      </li>
                      <li>Button styles apply to the link element</li>
                      <li>Maintains all button styling (variant colors, sizes, radius, states)</li>
                      <li>Use same CSS variables and Tailwind classes as regular button</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* All Variants in XSmall Size */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">All Variants - XSmall Size</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="xs">
                Primary
              </Button>
              <Button variant="secondary" size="xs">
                Secondary
              </Button>
              <Button variant="outline" size="xs">
                Outline
              </Button>
              <Button variant="ghost" size="xs">
                Ghost
              </Button>
              <Button variant="dim" size="xs">
                Dim
              </Button>
              <Button variant="destructive" size="xs">
                Destructive
              </Button>
              <Button variant="foreground" size="xs">
                Foreground
              </Button>
              <Button variant="inverse" size="xs">
                Inverse
              </Button>
              <Button variant="mono" size="xs">
                Mono
              </Button>
              <Button variant="dashed" size="xs">
                Dashed
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">All Variants at XSmall:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Padding: <code className="bg-muted px-1 py-0.5 rounded">px-2 py-1</code> →
                        4px vertical, 8px horizontal
                      </li>
                      <li>
                        Font: <code className="bg-muted px-1 py-0.5 rounded">text-xs</code> → 12px
                        (0.75rem)
                      </li>
                      <li>
                        Line height: <code className="bg-muted px-1 py-0.5 rounded">leading-4</code>{" "}
                        → 16px (1rem)
                      </li>
                      <li>All 10 variants maintain their CSS variables and styling</li>
                      <li>Icon size: 12px (if present)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Apply <code className="bg-muted px-1 py-0.5 rounded">size="xs"</code> prop
                      </li>
                      <li>All variant CSS variables remain the same</li>
                      <li>Only padding, font size, and line height change</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* All Variants in Small Size */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">All Variants - Small Size</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="sm">
                Primary
              </Button>
              <Button variant="secondary" size="sm">
                Secondary
              </Button>
              <Button variant="outline" size="sm">
                Outline
              </Button>
              <Button variant="ghost" size="sm">
                Ghost
              </Button>
              <Button variant="dim" size="sm">
                Dim
              </Button>
              <Button variant="destructive" size="sm">
                Destructive
              </Button>
              <Button variant="foreground" size="sm">
                Foreground
              </Button>
              <Button variant="inverse" size="sm">
                Inverse
              </Button>
              <Button variant="mono" size="sm">
                Mono
              </Button>
              <Button variant="dashed" size="sm">
                Dashed
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">All Variants at Small:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Padding: <code className="bg-muted px-1 py-0.5 rounded">px-3 py-1.5</code> →
                        6px vertical, 14px horizontal
                      </li>
                      <li>
                        Font: <code className="bg-muted px-1 py-0.5 rounded">text-sm</code> → 14px
                        (0.875rem)
                      </li>
                      <li>
                        Line height: <code className="bg-muted px-1 py-0.5 rounded">leading-5</code>{" "}
                        → 20px (1.25rem)
                      </li>
                      <li>All 10 variants maintain their CSS variables and styling</li>
                      <li>Icon size: 14px (if present)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Apply <code className="bg-muted px-1 py-0.5 rounded">size="sm"</code> prop
                      </li>
                      <li>All variant CSS variables remain the same</li>
                      <li>Only padding, font size, and line height change</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* All Variants in Large Size */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">All Variants - Large Size</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg">
                Primary
              </Button>
              <Button variant="secondary" size="lg">
                Secondary
              </Button>
              <Button variant="outline" size="lg">
                Outline
              </Button>
              <Button variant="ghost" size="lg">
                Ghost
              </Button>
              <Button variant="dim" size="lg">
                Dim
              </Button>
              <Button variant="destructive" size="lg">
                Destructive
              </Button>
              <Button variant="foreground" size="lg">
                Foreground
              </Button>
              <Button variant="inverse" size="lg">
                Inverse
              </Button>
              <Button variant="mono" size="lg">
                Mono
              </Button>
              <Button variant="dashed" size="lg">
                Dashed
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">All Variants at Large:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Padding: <code className="bg-muted px-1 py-0.5 rounded">px-5 py-2.5</code> →
                        10px vertical, 20px horizontal
                      </li>
                      <li>
                        Font: <code className="bg-muted px-1 py-0.5 rounded">text-lg</code> → 18px
                        (1.125rem)
                      </li>
                      <li>
                        Line height: <code className="bg-muted px-1 py-0.5 rounded">leading-7</code>{" "}
                        → 28px (1.75rem)
                      </li>
                      <li>All 10 variants maintain their CSS variables and styling</li>
                      <li>Icon size: 20px (if present)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Apply <code className="bg-muted px-1 py-0.5 rounded">size="lg"</code> prop
                      </li>
                      <li>All variant CSS variables remain the same</li>
                      <li>Only padding, font size, and line height change</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* All Variants with Full Radius */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">All Variants with Full Radius</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" radius="full">
                Primary
              </Button>
              <Button variant="secondary" radius="full">
                Secondary
              </Button>
              <Button variant="outline" radius="full">
                Outline
              </Button>
              <Button variant="ghost" radius="full">
                Ghost
              </Button>
              <Button variant="dim" radius="full">
                Dim
              </Button>
              <Button variant="destructive" radius="full">
                Destructive
              </Button>
              <Button variant="foreground" radius="full">
                Foreground
              </Button>
              <Button variant="inverse" radius="full">
                Inverse
              </Button>
              <Button variant="mono" radius="full">
                Mono
              </Button>
              <Button variant="dashed" radius="full">
                Dashed
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Radius: <code className="bg-muted px-1 py-0.5 rounded">rounded-full</code> →
                        9999px (pill shape)
                      </li>
                      <li>All variant CSS variables remain unchanged</li>
                      <li>All size specifications remain unchanged</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Apply <code className="bg-muted px-1 py-0.5 rounded">radius="full"</code>{" "}
                        prop
                      </li>
                      <li>Set corner radius to 9999px for all variants</li>
                      <li>All 10 variants support full radius</li>
                      <li>Maintains all variant colors, borders, and styling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* All Variants in Link Mode */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">All Variants in Link Mode</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-col items-start gap-3">
              <Button mode="link" underline="solid" asChild>
                <Link href="#">Primary Link</Link>
              </Button>
              <Button mode="link" underline="solid" asChild>
                <Link href="#">Secondary Link</Link>
              </Button>
              <Button mode="link" underline="solid" asChild>
                <Link href="#">Outline Link</Link>
              </Button>
              <Button mode="link" underline="solid" asChild>
                <Link href="#">Ghost Link</Link>
              </Button>
              <Button mode="link" underline="solid" asChild>
                <Link href="#">Dim Link</Link>
              </Button>
              <Button mode="link" underline="solid" asChild>
                <Link href="#">Destructive Link</Link>
              </Button>
              <Button mode="link" underline="solid" asChild>
                <Link href="#">Foreground Link</Link>
              </Button>
              <Button mode="link" underline="solid" asChild>
                <Link href="#">Inverse Link</Link>
              </Button>
              <Button mode="link" underline="solid" asChild>
                <Link href="#">Mono Link</Link>
              </Button>
              <Button mode="link" underline="solid" asChild>
                <Link href="#">Dashed Link</Link>
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Background:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">bg-transparent</code> (all
                        variants)
                      </li>
                      <li>
                        Text: <code className="bg-muted px-1 py-0.5 rounded">text-primary</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--primary)</code>
                      </li>
                      <li>
                        Underline: <code className="bg-muted px-1 py-0.5 rounded">underline</code>{" "}
                        or <code className="bg-muted px-1 py-0.5 rounded">underline-dashed</code>
                      </li>
                      <li>
                        Hover:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">hover:text-primary/80</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--primary)</code> at
                        80% opacity
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Apply <code className="bg-muted px-1 py-0.5 rounded">mode="link"</code> prop
                      </li>
                      <li>All variants render as links with transparent background</li>
                      <li>
                        Text color: Use{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">--primary</code> variable
                      </li>
                      <li>Underline: Solid or dashed text decoration</li>
                      <li>Hover: Reduce text color opacity to 80%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Hover States - All Variants */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Hover States - All Variants</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Primary Hover</Button>
              <Button variant="secondary">Secondary Hover</Button>
              <Button variant="outline">Outline Hover</Button>
              <Button variant="ghost">Ghost Hover</Button>
              <Button variant="dim">Dim Hover</Button>
              <Button variant="destructive">Destructive Hover</Button>
              <Button variant="foreground">Foreground Hover</Button>
              <Button variant="inverse">Inverse Hover</Button>
              <Button variant="mono">Mono Hover</Button>
              <Button variant="dashed">Dashed Hover</Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications - Hover States:</p>
                <div className="space-y-3 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Hover Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Primary:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">hover:bg-primary/90</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--primary)</code> at 90%
                        opacity
                      </li>
                      <li>
                        Secondary:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">hover:bg-secondary/80</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--secondary)</code> at
                        80% opacity
                      </li>
                      <li>
                        Outline:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">hover:bg-accent</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--accent)</code>
                      </li>
                      <li>
                        Ghost: <code className="bg-muted px-1 py-0.5 rounded">hover:bg-accent</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--accent)</code>
                      </li>
                      <li>
                        Dim: <code className="bg-muted px-1 py-0.5 rounded">hover:bg-muted/80</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--muted)</code> at 80%
                        opacity
                      </li>
                      <li>
                        Destructive:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          hover:bg-destructive/90
                        </code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--destructive)</code>{" "}
                        at 90% opacity
                      </li>
                      <li>
                        Foreground:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">hover:bg-foreground/90</code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--foreground)</code> at
                        90% opacity
                      </li>
                      <li>
                        Inverse:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">hover:bg-accent</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--accent)</code>
                      </li>
                      <li>
                        Mono:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">hover:bg-muted/80</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--muted)</code> at 80%
                        opacity (darker)
                      </li>
                      <li>
                        Dashed:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">hover:bg-accent</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--accent)</code>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>Create Interactive Component with hover state</li>
                      <li>
                        Apply hover background using variant CSS variable with opacity adjustment
                      </li>
                      <li>Use Figma's interactive component feature for hover state</li>
                      <li>Maintain all other styling (text color, border, etc.)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* All Sizes with Full Radius */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">All Sizes with Full Radius</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Button variant="primary" size="xs" radius="full">
                  XSmall Full
                </Button>
                <Button variant="primary" size="sm" radius="full">
                  Small Full
                </Button>
                <Button variant="primary" size="md" radius="full">
                  Medium Full
                </Button>
                <Button variant="primary" size="lg" radius="full">
                  Large Full
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="xs" radius="full">
                  XSmall Full
                </Button>
                <Button variant="outline" size="sm" radius="full">
                  Small Full
                </Button>
                <Button variant="outline" size="md" radius="full">
                  Medium Full
                </Button>
                <Button variant="outline" size="lg" radius="full">
                  Large Full
                </Button>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Radius: <code className="bg-muted px-1 py-0.5 rounded">rounded-full</code> →
                        9999px
                      </li>
                      <li>All sizes maintain their padding and font specifications</li>
                      <li>All variants maintain their CSS variables</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Apply <code className="bg-muted px-1 py-0.5 rounded">radius="full"</code>{" "}
                        prop
                      </li>
                      <li>Set corner radius to 9999px for all sizes</li>
                      <li>All 4 sizes (xs, sm, md, lg) support full radius</li>
                      <li>Maintains size-specific padding and typography</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* All Sizes in Link Mode */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">All Sizes in Link Mode</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-col items-start gap-3">
              <Button mode="link" underline="solid" size="xs" asChild>
                <Link href="#">XSmall Link</Link>
              </Button>
              <Button mode="link" underline="solid" size="sm" asChild>
                <Link href="#">Small Link</Link>
              </Button>
              <Button mode="link" underline="solid" size="md" asChild>
                <Link href="#">Medium Link</Link>
              </Button>
              <Button mode="link" underline="solid" size="lg" asChild>
                <Link href="#">Large Link</Link>
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Text: <code className="bg-muted px-1 py-0.5 rounded">text-primary</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--primary)</code>
                      </li>
                      <li>Font sizes: xs=12px, sm=14px, md=16px, lg=18px (matches button sizes)</li>
                      <li>
                        Underline: <code className="bg-muted px-1 py-0.5 rounded">underline</code>{" "}
                        or <code className="bg-muted px-1 py-0.5 rounded">underline-dashed</code>
                      </li>
                      <li>
                        Background:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">bg-transparent</code> (all
                        sizes)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Apply <code className="bg-muted px-1 py-0.5 rounded">mode="link"</code> prop
                      </li>
                      <li>All 4 sizes support link mode</li>
                      <li>Font sizes match button sizes (xs=12px, sm=14px, md=16px, lg=18px)</li>
                      <li>
                        Text color: Use{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">--primary</code> variable
                      </li>
                      <li>No padding in link mode (text-only)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* All Sizes in Icon Mode */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">All Sizes in Icon Mode</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Button variant="primary" size="xs" mode="icon">
                  <UserPen />
                </Button>
                <Button variant="primary" size="sm" mode="icon">
                  <UserPen />
                </Button>
                <Button variant="primary" size="md" mode="icon">
                  <UserPen />
                </Button>
                <Button variant="primary" size="lg" mode="icon">
                  <UserPen />
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="xs" mode="icon">
                  <UserPen />
                </Button>
                <Button variant="outline" size="sm" mode="icon">
                  <UserPen />
                </Button>
                <Button variant="outline" size="md" mode="icon">
                  <UserPen />
                </Button>
                <Button variant="outline" size="lg" mode="icon">
                  <UserPen />
                </Button>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Dimensions:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">aspect-square</code> → Square
                        (width = height)
                      </li>
                      <li>Padding: Equal on all sides (xs=4px, sm=6px, md=8px, lg=10px)</li>
                      <li>Icon sizes: xs=12px, sm=14px, md=16px, lg=20px (matches font size)</li>
                      <li>
                        Centering:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          flex items-center justify-center
                        </code>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Apply <code className="bg-muted px-1 py-0.5 rounded">mode="icon"</code> prop
                      </li>
                      <li>All 4 sizes support icon mode</li>
                      <li>Square dimensions with equal padding matching size</li>
                      <li>Icon size matches font size for each button size</li>
                      <li>Icon centered horizontally and vertically</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Complete Variant Reference */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Complete Variant Reference</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="text-sm space-y-4 font-mono text-foreground">
              <div>
                <p className="font-semibold mb-2">All Variant CSS Variables:</p>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="font-medium mb-1">Background Variables:</p>
                    <ul className="space-y-0.5">
                      <li>
                        <code className="bg-muted px-1 py-0.5 rounded">--primary</code>
                      </li>
                      <li>
                        <code className="bg-muted px-1 py-0.5 rounded">--secondary</code>
                      </li>
                      <li>
                        <code className="bg-muted px-1 py-0.5 rounded">--foreground</code>
                      </li>
                      <li>
                        <code className="bg-muted px-1 py-0.5 rounded">--background</code>
                      </li>
                      <li>
                        <code className="bg-muted px-1 py-0.5 rounded">--muted</code>
                      </li>
                      <li>
                        <code className="bg-muted px-1 py-0.5 rounded">--destructive</code>
                      </li>
                      <li>
                        <code className="bg-muted px-1 py-0.5 rounded">--accent</code>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Text Variables:</p>
                    <ul className="space-y-0.5">
                      <li>
                        <code className="bg-muted px-1 py-0.5 rounded">--primary-foreground</code>
                      </li>
                      <li>
                        <code className="bg-muted px-1 py-0.5 rounded">--secondary-foreground</code>
                      </li>
                      <li>
                        <code className="bg-muted px-1 py-0.5 rounded">--foreground</code>
                      </li>
                      <li>
                        <code className="bg-muted px-1 py-0.5 rounded">--background</code>
                      </li>
                      <li>
                        <code className="bg-muted px-1 py-0.5 rounded">--muted-foreground</code>
                      </li>
                      <li>
                        <code className="bg-muted px-1 py-0.5 rounded">
                          --destructive-foreground
                        </code>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Border Variables:</p>
                    <ul className="space-y-0.5">
                      <li>
                        <code className="bg-muted px-1 py-0.5 rounded">--border</code> (1px solid)
                      </li>
                      <li>
                        <code className="bg-muted px-1 py-0.5 rounded">--border</code> (2px dashed
                        for Dashed variant)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Radius Variables:</p>
                    <ul className="space-y-0.5">
                      <li>
                        <code className="bg-muted px-1 py-0.5 rounded">--radius</code> (6px default)
                      </li>
                      <li>9999px (full radius, no variable)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-2">Total Combinations:</p>
                <ul className="space-y-1 text-xs">
                  <li>
                    <strong>Variants:</strong> 10 (Primary, Secondary, Outline, Ghost, Dim,
                    Destructive, Foreground, Inverse, Mono, Dashed)
                  </li>
                  <li>
                    <strong>Sizes:</strong> 4 (xs, sm, md, lg)
                  </li>
                  <li>
                    <strong>Modes:</strong> 3 (Default, Icon, Link)
                  </li>
                  <li>
                    <strong>States:</strong> 3 (Default, Hover, Disabled)
                  </li>
                  <li>
                    <strong>Radius:</strong> 2 (Default, Full)
                  </li>
                  <li>
                    <strong>Total possible combinations:</strong> 10 × 4 × 3 × 3 × 2 = 720 variants
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Figma Component Set Structure:</p>
                <ul className="space-y-1 text-xs">
                  <li>Create Component Set with 5 Variant Properties</li>
                  <li>Variant Property: 10 values (all variants)</li>
                  <li>Size Property: 4 values (xs, sm, md, lg)</li>
                  <li>Mode Property: 3 values (Default, Icon, Link)</li>
                  <li>State Property: 3 values (Default, Hover, Disabled)</li>
                  <li>Radius Property: 2 values (Default, Full)</li>
                  <li>Use Auto Layout with size-based padding</li>
                  <li>Map all CSS variables to Figma variables</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* All Variants with Leading and Trailing Icons */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">All Variants with Icons (Leading & Trailing)</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary">
                  <UserPen /> Primary
                </Button>
                <Button variant="secondary">
                  <UserPen /> Secondary
                </Button>
                <Button variant="outline">
                  <UserPen /> Outline
                </Button>
                <Button variant="ghost">
                  <UserPen /> Ghost
                </Button>
                <Button variant="dim">
                  <UserPen /> Dim
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="destructive">
                  <UserPen /> Destructive
                </Button>
                <Button variant="foreground">
                  <UserPen /> Foreground
                </Button>
                <Button variant="inverse">
                  <UserPen /> Inverse
                </Button>
                <Button variant="mono">
                  <UserPen /> Mono
                </Button>
                <Button variant="dashed">
                  <UserPen /> Dashed
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary">
                  Primary <ChevronRight className="ms-2 h-4 w-4" />
                </Button>
                <Button variant="outline">
                  Outline <ChevronRight className="ms-2 h-4 w-4" />
                </Button>
                <Button variant="ghost">
                  Ghost <ChevronRight className="ms-2 h-4 w-4" />
                </Button>
                <Button variant="destructive">
                  Destructive <ChevronRight className="ms-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Leading icon: Icon before text,{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">gap-2</code> → 8px gap
                      </li>
                      <li>
                        Trailing icon: Icon after text,{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">ms-2</code> → 8px
                        margin-start
                      </li>
                      <li>Icon size: Matches font size (xs=12px, sm=14px, md=16px, lg=20px)</li>
                      <li>
                        Icon color: Inherits{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">text-foreground</code> or
                        variant text color
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>All 10 variants support both leading and trailing icons</li>
                      <li>Gap: 8px between icon and text</li>
                      <li>Icon color: Use same CSS variable as text color for each variant</li>
                      <li>Icon size: Match font size for the button size</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* All Variants Disabled */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">All Variants Disabled</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" disabled>
                Primary
              </Button>
              <Button variant="secondary" disabled>
                Secondary
              </Button>
              <Button variant="outline" disabled>
                Outline
              </Button>
              <Button variant="ghost" disabled>
                Ghost
              </Button>
              <Button variant="dim" disabled>
                Dim
              </Button>
              <Button variant="destructive" disabled>
                Destructive
              </Button>
              <Button variant="foreground" disabled>
                Foreground
              </Button>
              <Button variant="inverse" disabled>
                Inverse
              </Button>
              <Button variant="mono" disabled>
                Mono
              </Button>
              <Button variant="dashed" disabled>
                Dashed
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Opacity:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">disabled:opacity-50</code> →
                        50% opacity
                      </li>
                      <li>
                        Cursor:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          disabled:cursor-not-allowed
                        </code>
                      </li>
                      <li>
                        Pointer Events:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          disabled:pointer-events-none
                        </code>
                      </li>
                      <li>All variant CSS variables remain unchanged (opacity applied on top)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>All 10 variants support disabled state</li>
                      <li>Apply 50% opacity to entire button component</li>
                      <li>Maintain all original colors but at reduced opacity</li>
                      <li>Set cursor to "not-allowed" in interactive component settings</li>
                      <li>Disable interactions in Figma prototype</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Input Mode Variations */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Input Mode Variations</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="space-y-4 w-full max-w-md">
              <Button
                type="button"
                variant="outline"
                mode="input"
                placeholder={true}
                className="w-full"
              >
                <CalendarIcon />
                <span>Pick a date</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                mode="input"
                placeholder={false}
                className="w-full"
              >
                <CalendarIcon />
                <span>January 15, 2024</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                mode="input"
                placeholder={true}
                size="sm"
                className="w-full"
              >
                <CalendarIcon />
                <span>Small Input</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                mode="input"
                placeholder={false}
                size="lg"
                className="w-full"
              >
                <CalendarIcon />
                <span>Large Input</span>
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Background:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">bg-transparent</code>
                      </li>
                      <li>
                        Border: <code className="bg-muted px-1 py-0.5 rounded">border</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--border)</code> (1px
                        solid)
                      </li>
                      <li>
                        Placeholder:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">text-muted-foreground</code>{" "}
                        →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          var(--muted-foreground)
                        </code>
                      </li>
                      <li>
                        Regular text:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">text-foreground</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--foreground)</code>
                      </li>
                      <li>
                        Width: <code className="bg-muted px-1 py-0.5 rounded">w-full</code> → 100%
                        width
                      </li>
                      <li>
                        Gap: <code className="bg-muted px-1 py-0.5 rounded">gap-2</code> → 8px
                        between icon and text
                      </li>
                      <li>All sizes (xs, sm, md, lg) support input mode</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Apply <code className="bg-muted px-1 py-0.5 rounded">mode="input"</code>{" "}
                        prop
                      </li>
                      <li>
                        Border: Use <code className="bg-muted px-1 py-0.5 rounded">--border</code>{" "}
                        variable (1px solid)
                      </li>
                      <li>
                        Placeholder text: Use{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">--muted-foreground</code>{" "}
                        variable
                      </li>
                      <li>
                        Regular text: Use{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">--foreground</code> variable
                      </li>
                      <li>Background: Transparent (no fill)</li>
                      <li>
                        All 4 sizes support input mode with size-specific padding and typography
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Badge Combinations */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Badge Combinations</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Button variant="primary" mode="icon" className="relative">
                  <Bell />
                  <Badge
                    variant="primary"
                    shape="circle"
                    size="sm"
                    className="absolute top-0 start-full -translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2"
                  >
                    5
                  </Badge>
                </Button>
                <Button variant="destructive" mode="icon" className="relative">
                  <Mail />
                  <Badge
                    variant="destructive"
                    shape="circle"
                    size="sm"
                    className="absolute top-0 start-full -translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2"
                  >
                    3
                  </Badge>
                </Button>
                <Button variant="outline" mode="icon" className="relative">
                  <Bell />
                  <span className="border-2 border-background rounded-full size-3 bg-primary absolute -top-1 -end-1 animate-bounce" />
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="primary" className="relative">
                  <MailCheck /> Messages
                  <Badge
                    variant="destructive"
                    shape="circle"
                    size="sm"
                    className="absolute top-0 start-full -translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2"
                  >
                    12
                  </Badge>
                </Button>
                <Button variant="outline" className="relative">
                  <Bell /> Notifications
                  <Badge
                    variant="primary"
                    shape="circle"
                    size="sm"
                    className="absolute top-0 start-full -translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2"
                  >
                    99+
                  </Badge>
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline">
                  <CircleCheckBig /> Inline Badge
                  <Badge variant="primary" shape="circle" size="sm">
                    10+
                  </Badge>
                </Button>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Badge Positioning:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Absolute:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          absolute top-0 start-full
                        </code>
                      </li>
                      <li>
                        Transform:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          -translate-y-1/2 -translate-x-1/2
                        </code>{" "}
                        → Center on top-right
                      </li>
                      <li>
                        Dot badge:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">size-3 bg-primary</code> →
                        12px circle
                      </li>
                      <li>
                        Number badge: <code className="bg-muted px-1 py-0.5 rounded">size-sm</code>{" "}
                        → Small badge variant
                      </li>
                      <li>Inline badge: Next to text in Auto Layout flow</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Badge CSS Variables:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Primary badge:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">bg-primary</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--primary)</code>
                      </li>
                      <li>
                        Destructive badge:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">bg-destructive</code> →{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--destructive)</code>
                      </li>
                      <li>
                        Border:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          border-2 border-background
                        </code>{" "}
                        → <code className="bg-muted px-1 py-0.5 rounded">var(--background)</code>{" "}
                        (2px)
                      </li>
                      <li>
                        Text:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          text-primary-foreground
                        </code>{" "}
                        or{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">
                          text-destructive-foreground
                        </code>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Complex Combinations */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Complex Combinations</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[26px] border-4 border-border flex items-center justify-center p-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Button variant="primary" size="lg" radius="full">
                  <UserPen />
                  Large Primary Full Radius
                  <ChevronRight className="ms-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" mode="icon" className="relative">
                  <Bell />
                  <Badge
                    variant="primary"
                    shape="circle"
                    size="sm"
                    className="absolute top-0 start-full -translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2"
                  >
                    3
                  </Badge>
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" disabled radius="full">
                  <Settings />
                  Disabled Ghost Full
                </Button>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <p className="font-semibold">Figma Specifications:</p>
                <div className="space-y-2 font-mono text-foreground">
                  <div>
                    <p className="font-semibold mb-1">Tailwind Classes:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>
                        Multiple classes combine:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">variant-*</code> +{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">size-*</code> +{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">radius-*</code> +{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">mode-*</code>
                      </li>
                      <li>
                        All CSS variables apply:{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--primary)</code>,{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">var(--radius)</code>, etc.
                      </li>
                      <li>
                        Badge: <code className="bg-muted px-1 py-0.5 rounded">absolute</code>{" "}
                        positioning with transforms
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Figma Implementation:</p>
                    <ul className="space-y-0.5 text-xs list-disc list-inside">
                      <li>Combine multiple properties: variant + size + radius + mode + state</li>
                      <li>Test all combinations to ensure they work correctly</li>
                      <li>Use Component Properties in Figma to enable easy switching</li>
                      <li>Ensure all CSS variables are properly mapped in Figma variables</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
