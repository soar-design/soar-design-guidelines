"use client"

import * as React from "react"
import { Tabs, TabsList, TabsTrigger } from "@soar-design/soar-react-components"
import { PropertyCard, type Property } from "../components/property-card"
import propertiesData from "../data/properties.json"

export default function AllProperties() {
  const [selectedTab, setSelectedTab] = React.useState<string>("all")

  const properties = propertiesData as Property[]

  const filteredProperties = React.useMemo(() => {
    if (selectedTab === "all") {
      return properties
    } else if (selectedTab === "ready") {
      return properties.filter((p) => p.status === "Ready to Move")
    } else if (selectedTab === "off-plan") {
      return properties.filter((p) => p.status === "Off Plan")
    }
    return properties
  }, [selectedTab, properties])

  return (
    <div className="flex min-h-screen flex-col items-center bg-background pt-20">
      <div className="container flex flex-col gap-6">
        <div className="flex w-full flex-col items-start justify-between gap-6 sm:flex-row">
          <h1 className="text-4xl font-bold leading-none text-foreground">All Properties</h1>
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-auto">
            <TabsList className="grid grid-cols-3 bg-muted">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="ready">Ready</TabsTrigger>
              <TabsTrigger value="off-plan">Off Plan</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  )
}
