"use client"

import * as React from "react"
import { Button } from "@soar-design/soar-react-components"
import { Checkbox } from "@soar-design/soar-react-components"
import { Input } from "@soar-design/soar-react-components"
import { Label } from "@soar-design/soar-react-components"
import { RadioGroup, RadioGroupItem } from "@soar-design/soar-react-components"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@soar-design/soar-react-components"
import { Separator } from "@soar-design/soar-react-components"
import { Field, FieldDescription, FieldLabel } from "@soar-design/soar-react-components"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@soar-design/soar-react-components"
import { ChevronDown, Trash2 } from "lucide-react"

interface OrderItem {
    id: string
    name: string
    color: string
    size: string
    price: string
    quantity: number
}

interface DeliveryMethod {
    id: string
    label: string
    description: string
}

interface PaymentMethod {
    id: string
    label: string
}

interface BreakpointDesktopProps {
    orderItems?: OrderItem[]
    deliveryMethods?: DeliveryMethod[]
    paymentMethods?: PaymentMethod[]
}

const defaultOrderItems: OrderItem[] = [
    { id: "1", name: "Urban Runner Pro", color: "Navy Blue", size: "US 10", price: "$89.99", quantity: 1 },
    { id: "2", name: "Classic Timepiece", color: "Silver", size: "42mm", price: "$149.99", quantity: 1 },
    { id: "3", name: "Travel Explorer Pack", color: "Charcoal Gray", size: "One Size", price: "$64.99", quantity: 1 },
    { id: "4", name: "Premium Camera", color: "Black", size: "Standard", price: "$299.99", quantity: 1 },
    { id: "5", name: "Wireless Headphones", color: "Matte Black", size: "One Size", price: "$79.99", quantity: 1 }
]

const defaultDeliveryMethods: DeliveryMethod[] = [
    { id: "standard", label: "Standard", description: "4–10 business days · $8.00" },
    { id: "express", label: "Express", description: "2-5 business days · $24.00" }
]

const defaultPaymentMethods: PaymentMethod[] = [
    { id: "credit", label: "Credit card" },
    { id: "paypal", label: "PayPal" },
    { id: "crypto", label: "Cryptocurrency" }
]

export default function BreakpointDesktop({
    orderItems = defaultOrderItems,
    deliveryMethods = defaultDeliveryMethods,
    paymentMethods = defaultPaymentMethods
}: BreakpointDesktopProps) {
    const [deliveryMethod, setDeliveryMethod] = React.useState("standard")
    const [paymentMethod, setPaymentMethod] = React.useState("credit")
    const [sameAsShipping, setSameAsShipping] = React.useState(true)

    return (
        <div className="min-h-screen bg-muted/60 py-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex gap-10 flex-row lg:items-start lg:gap-16">
                    <div className="w-full lg:flex-1">
                        <div className="rounded-3xl border bg-card p-6 shadow-sm">
                            <div className="flex flex-col gap-7">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col">
                                        <h2 className="pb-3 text-base font-medium leading-6 text-foreground">Contact information</h2>
                                        <p className="text-sm leading-5 text-muted-foreground">We'll use this email to send you order confirmations and updates</p>
                                    </div>
                                    <Field>
                                        <FieldLabel htmlFor="email">Email address</FieldLabel>
                                        <Input id="email" placeholder="johndoe@mail.com" />
                                    </Field>
                                </div>

                                <Separator />

                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col">
                                        <h2 className="pb-3 text-base font-medium leading-6 text-foreground">Shipping information</h2>
                                        <p className="text-sm leading-5 text-muted-foreground">Enter the address where you want your order delivered</p>
                                    </div>
                                    <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-4">
                                        <Field>
                                            <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                                            <Input id="firstName" placeholder="John" />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                                            <Input id="lastName" placeholder="Doe" />
                                        </Field>
                                    </div>
                                    <Field>
                                        <FieldLabel htmlFor="company">Company</FieldLabel>
                                        <Input id="company" />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="address">Address</FieldLabel>
                                        <Input id="address" />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="apartment">Apartment, suite, etc.</FieldLabel>
                                        <Input id="apartment" />
                                    </Field>
                                    <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-4">
                                        <Field>
                                            <FieldLabel htmlFor="city">City</FieldLabel>
                                            <Input id="city" placeholder="London" />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor="country">Country</FieldLabel>
                                            <Select defaultValue="uk">
                                                <SelectTrigger id="country">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                                    <SelectItem value="us">United States</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </Field>
                                    </div>
                                    <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-4">
                                        <Field>
                                            <FieldLabel htmlFor="state">State / Province</FieldLabel>
                                            <Input id="state" />
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor="postal">Postal code</FieldLabel>
                                            <Input id="postal" />
                                        </Field>
                                    </div>
                                    <Field>
                                        <FieldLabel htmlFor="phone">Phone</FieldLabel>
                                        <Input id="phone" />
                                    </Field>
                                </div>

                                <Separator />

                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col">
                                        <h2 className="pb-3 text-base font-medium leading-6 text-foreground">Billing address</h2>
                                        <p className="text-sm leading-5 text-muted-foreground">The billing address associated with your payment method</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="sameAddress" checked={sameAsShipping} onCheckedChange={(checked) => setSameAsShipping(checked as boolean)} />
                                        <Label htmlFor="sameAddress" className="font-normal">Same as shipping address</Label>
                                    </div>
                                </div>

                                <Separator />

                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col">
                                        <h2 className="pb-3 text-base font-medium leading-6 text-foreground">Delivery method</h2>
                                        <p className="text-sm leading-5 text-muted-foreground">Choose how you want to receive your order</p>
                                    </div>
                                    <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                                        {deliveryMethods.map((method) => (
                                            <Label key={method.id} htmlFor={method.id} className="cursor-pointer">
                                                <div className="flex items-start gap-3 rounded-2xl border p-4 data-[state=checked]:border-primary data-[state=checked]:bg-primary/5" data-state={deliveryMethod === method.id ? "checked" : "unchecked"}>
                                                    <div className="flex flex-1 flex-col gap-1.5">
                                                        <div className="text-sm font-medium leading-none">{method.label}</div>
                                                        <div className="text-sm leading-5 text-muted-foreground">{method.description}</div>
                                                    </div>
                                                    <RadioGroupItem value={method.id} id={method.id} className="mt-0.5" />
                                                </div>
                                            </Label>
                                        ))}
                                    </RadioGroup>
                                </div>

                                <Separator />

                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col">
                                        <h2 className="pb-3 text-base font-medium leading-6 text-foreground">Payment</h2>
                                        <p className="text-sm leading-5 text-muted-foreground">All transactions are secure and encrypted</p>
                                    </div>
                                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                                        {paymentMethods.map((method) => (
                                            <Label key={method.id} htmlFor={`payment-${method.id}`} className="cursor-pointer">
                                                <div className="flex items-center gap-3 rounded-2xl border p-4 data-[state=checked]:border-primary data-[state=checked]:bg-primary/5" data-state={paymentMethod === method.id ? "checked" : "unchecked"}>
                                                    <div className="flex-1 text-sm font-medium leading-none">{method.label}</div>
                                                    <RadioGroupItem value={method.id} id={`payment-${method.id}`} />
                                                </div>
                                            </Label>
                                        ))}
                                    </RadioGroup>
                                    {paymentMethod === "credit" && (
                                        <div className="flex flex-col gap-6">
                                            <Field>
                                                <FieldLabel htmlFor="cardNumber">Card number</FieldLabel>
                                                <Input id="cardNumber" />
                                                <FieldDescription>Enter your 16-digit card number</FieldDescription>
                                            </Field>
                                            <Field>
                                                <FieldLabel htmlFor="cardName">Name on card</FieldLabel>
                                                <Input id="cardName" placeholder="John Doe" />
                                            </Field>
                                            <div className="flex flex-col gap-6 lg:grid lg:gap-4" style={{ gridTemplateColumns: "1fr auto" }}>
                                                <Field>
                                                    <FieldLabel htmlFor="expiration">Expiration date (MM/YY)</FieldLabel>
                                                    <Input id="expiration" />
                                                </Field>
                                                <Field>
                                                    <FieldLabel htmlFor="cvc">CVC</FieldLabel>
                                                    <Input id="cvc" className="w-full lg:w-24" />
                                                </Field>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <Button size="default" className="w-full lg:hidden">Confirm order</Button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:sticky lg:top-16 lg:flex-1">
                        <div className="flex flex-col">
                            <h2 className="mb-8 text-xl font-semibold leading-7 tracking-tight text-foreground lg:text-2xl lg:leading-8">Order summary</h2>
                            <div className="flex flex-col">
                                <div className="flex flex-col">
                                    {orderItems.map((item, index) => (
                                        <div key={item.id} className="flex gap-6 border-b py-4 lg:py-6">
                                            <img src="https://ui.shadcn.com/placeholder.svg" alt={item.name} className="size-20 shrink-0 rounded-lg object-cover" />
                                            <div className="flex min-w-0 flex-1 flex-col gap-2">
                                                <div className="flex items-start gap-4">
                                                    <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                                                        <div className="text-sm font-medium leading-5 text-foreground">{item.name}</div>
                                                        <div className="text-xs leading-4 text-muted-foreground">{item.color}</div>
                                                        <div className="text-xs leading-4 text-muted-foreground">{item.size}</div>
                                                    </div>
                                                    <Button variant="ghost" size="icon" className="shrink-0">
                                                        <Trash2 />
                                                        <span className="sr-only">Remove item</span>
                                                    </Button>
                                                </div>
                                                <div className="flex items-center justify-between gap-4">
                                                    <div className="text-sm font-medium leading-5 text-foreground">{item.price}</div>
                                                    <Select defaultValue={item.quantity.toString()}>
                                                        <SelectTrigger className="w-16">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="1">1</SelectItem>
                                                            <SelectItem value="2">2</SelectItem>
                                                            <SelectItem value="3">3</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t pt-4">
                                    <InputGroup>
                                        <InputGroupInput placeholder="Enter code" />
                                        <InputGroupAddon align="inline-end">
                                            <InputGroupButton size="xs" variant="ghost">Apply</InputGroupButton>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    <div className="flex flex-col gap-4 py-6">
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="text-sm leading-5 text-muted-foreground">Subtotal</div>
                                            <div className="text-sm font-medium leading-5 text-foreground">$683.95</div>
                                        </div>
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="text-sm leading-5 text-muted-foreground">Shipping</div>
                                            <div className="text-sm font-medium leading-5 text-foreground">$8.00</div>
                                        </div>
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="text-sm leading-5 text-muted-foreground">Taxes</div>
                                            <div className="text-sm font-medium leading-5 text-foreground">$55.00</div>
                                        </div>
                                        <div className="flex items-center justify-between gap-2 border-t pt-4">
                                            <div className="text-base font-semibold leading-6 text-foreground">Total</div>
                                            <div className="text-base font-semibold leading-6 text-foreground">$746.95</div>
                                        </div>
                                    </div>
                                    <Button size="default" className="hidden w-full lg:flex">Confirm order</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
