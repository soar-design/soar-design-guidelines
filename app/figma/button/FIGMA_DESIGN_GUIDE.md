# Button Component - Figma Design Guide

This guide provides step-by-step instructions for creating the Button component in Figma, matching the Soar Design System specifications.

## Overview

The Button component is a versatile, interactive element with multiple variants, sizes, and states. This guide will help you create a comprehensive component set in Figma with proper variants and properties.

## Component Structure

### Base Button Properties

1. **Variants** (10 total)
   - Primary
   - Secondary
   - Outline
   - Ghost
   - Dim
   - Destructive
   - Foreground
   - Inverse
   - Mono
   - Dashed

2. **Sizes** (4 total)
   - XSmall (xs)
   - Small (sm)
   - Medium (md) - Default
   - Large (lg)

3. **Modes** (3 total)
   - Default (text + optional icon)
   - Icon Only
   - Link

4. **States** (3 total)
   - Default
   - Hover
   - Disabled

5. **Radius** (2 total)
   - Default (rounded corners)
   - Full (pill shape)

## Step-by-Step Creation Guide

### Step 1: Create Base Button Frame

1. Create a new Frame: `Button / Base`
2. Set dimensions: Width = Auto, Height = Auto
3. Add Auto Layout:
   - Direction: Horizontal
   - Padding: 16px 16px (will vary by size)
   - Gap: 8px
   - Alignment: Center
   - Resizing: Hug contents

### Step 2: Create Text Layer

1. Add a Text layer inside the frame
2. Set text: "Button"
3. Font: Inter (or your system font)
4. Font weight: 500 (Medium)
5. Text alignment: Center

### Step 3: Create Variant Styles

Create Component Properties for each variant:

#### Primary

- Background: `#2563EB` (Blue 600)
- Text color: `#FFFFFF` (White)
- Border: None
- Hover background: `#1D4ED8` (Blue 700)

#### Secondary

- Background: `#E5E7EB` (Gray 200)
- Text color: `#111827` (Gray 900)
- Border: None
- Hover background: `#D1D5DB` (Gray 300)

#### Outline

- Background: Transparent
- Text color: `#111827` (Gray 900)
- Border: 1px solid `#D1D5DB` (Gray 300)
- Hover background: `#F9FAFB` (Gray 50)

#### Ghost

- Background: Transparent
- Text color: `#111827` (Gray 900)
- Border: None
- Hover background: `#F3F4F6` (Gray 100)

#### Dim

- Background: `#F3F4F6` (Gray 100)
- Text color: `#374151` (Gray 700)
- Border: None
- Hover background: `#E5E7EB` (Gray 200)

#### Destructive

- Background: `#DC2626` (Red 600)
- Text color: `#FFFFFF` (White)
- Border: None
- Hover background: `#B91C1C` (Red 700)

#### Foreground

- Background: `#111827` (Gray 900)
- Text color: `#FFFFFF` (White)
- Border: None
- Hover background: `#1F2937` (Gray 800)

#### Inverse

- Background: `#FFFFFF` (White)
- Text color: `#111827` (Gray 900)
- Border: 1px solid `#D1D5DB` (Gray 300)
- Hover background: `#F9FAFB` (Gray 50)

#### Mono

- Background: `#1F2937` (Gray 800)
- Text color: `#FFFFFF` (White)
- Border: None
- Hover background: `#374151` (Gray 700)

#### Dashed

- Background: Transparent
- Text color: `#111827` (Gray 900)
- Border: 2px dashed `#D1D5DB` (Gray 300)
- Hover background: `#F9FAFB` (Gray 50)

### Step 4: Create Size Variants

Set up Auto Layout padding for each size:

#### XSmall (xs)

- Padding: 4px 8px
- Font size: 12px
- Line height: 16px
- Icon size: 12px

#### Small (sm)

- Padding: 6px 14px
- Font size: 14px
- Line height: 20px
- Icon size: 14px

#### Medium (md) - Default

- Padding: 8px 16px
- Font size: 16px
- Line height: 24px
- Icon size: 16px

#### Large (lg)

- Padding: 10px 20px
- Font size: 18px
- Line height: 28px
- Icon size: 20px

### Step 5: Create Icon Variants

1. Add an Icon component (24x24px) inside the button frame
2. Create variants for:
   - No icon
   - Leading icon (icon before text)
   - Trailing icon (icon after text)
   - Icon only (no text)

For Icon Only mode:

- Set frame to square dimensions matching size
- Remove text layer
- Center icon
- Adjust padding to maintain square shape

### Step 6: Create State Variants

#### Default State

- Use base styles as defined above

#### Hover State

- Create interactive component with hover state
- Adjust background colors (see variant specifications above)
- Add subtle transition effect

#### Disabled State

- Opacity: 50%
- Cursor: Not allowed
- Reduce contrast:
  - Primary: `#9CA3AF` (Gray 400) background
  - Outline: `#E5E7EB` (Gray 200) border, `#9CA3AF` (Gray 400) text
  - Ghost: `#9CA3AF` (Gray 400) text

### Step 7: Create Radius Variants

#### Default Radius

- Corner radius: 6px (or your design system standard)

#### Full Radius

- Corner radius: 999px (pill shape)

### Step 8: Create Link Mode Variant

1. Create a separate variant for Link mode
2. Remove background and border
3. Text color: `#2563EB` (Blue 600)
4. Add underline variants:
   - Solid underline
   - Dashed underline
   - No underline (default)

### Step 9: Create Input Mode Variant

1. Create variant that looks like an input field
2. Background: Transparent
3. Border: 1px solid `#D1D5DB` (Gray 300)
4. Text color: `#6B7280` (Gray 500) for placeholder
5. Include calendar/icon on the left
6. Full width capability

### Step 10: Set Up Component Properties

In Figma, configure Component Properties:

1. **Variant Property**: "Variant"
   - Values: Primary, Secondary, Outline, Ghost, Dim, Destructive, Foreground, Inverse, Mono, Dashed

2. **Size Property**: "Size"
   - Values: XSmall, Small, Medium, Large

3. **Mode Property**: "Mode"
   - Values: Default, Icon Only, Link

4. **State Property**: "State"
   - Values: Default, Hover, Disabled

5. **Radius Property**: "Radius"
   - Values: Default, Full

6. **Icon Property**: "Icon"
   - Values: None, Leading, Trailing

### Step 11: Create Badge Integration

For buttons with badges:

1. Create a Badge component (separate)
2. Position badges:
   - Icon buttons: Top-right corner, absolute position
   - Text buttons: Inline with text or top-right corner
3. Badge variants:
   - Dot (small circle)
   - Number (circle with text)
   - Inline (next to text)

### Step 12: Create Loading State

1. Add spinner icon component
2. Create loading variant:
   - Replace text with spinner + "Loading..." text
   - Or spinner only for icon-only buttons
3. Spinner specs:
   - Size: Match icon size for the button size
   - Color: Match text color
   - Animation: Rotating (use Figma's animation if available)

### Step 13: Organize Component Structure

Create a component structure like this:

```
Button
├── Variants
│   ├── Primary
│   ├── Secondary
│   ├── Outline
│   ├── Ghost
│   ├── Dim
│   ├── Destructive
│   ├── Foreground
│   ├── Inverse
│   ├── Mono
│   └── Dashed
├── Sizes
│   ├── XSmall
│   ├── Small
│   ├── Medium
│   └── Large
├── Modes
│   ├── Default
│   ├── Icon Only
│   └── Link
└── States
    ├── Default
    ├── Hover
    └── Disabled
```

### Step 14: Create Component Set

1. Combine all variants into a single Component Set
2. Use Figma's Variant Properties to organize:
   - Variant = [All 10 variants]
   - Size = [All 4 sizes]
   - Mode = [All 3 modes]
   - State = [All 3 states]
   - Radius = [Default, Full]

### Step 15: Add Documentation

Create a documentation page in Figma:

1. **Usage Guidelines**
   - When to use each variant
   - Size recommendations
   - Accessibility considerations

2. **Examples**
   - Common button combinations
   - Real-world use cases
   - Do's and Don'ts

3. **Specifications**
   - Spacing values
   - Typography specs
   - Color tokens
   - Border radius values

## Design Tokens Reference

### Colors

- Primary: `#2563EB` / `#1D4ED8` (hover)
- Secondary: `#E5E7EB` / `#D1D5DB` (hover)
- Destructive: `#DC2626` / `#B91C1C` (hover)
- Text Primary: `#111827`
- Text Secondary: `#6B7280`
- Border: `#D1D5DB`
- Background: `#FFFFFF`
- Background Hover: `#F9FAFB`

### Typography

- Font Family: Inter
- Font Weight: 500 (Medium)
- Font Sizes:
  - XSmall: 12px
  - Small: 14px
  - Medium: 16px
  - Large: 18px

### Spacing

- Padding XSmall: 4px 8px
- Padding Small: 6px 14px
- Padding Medium: 8px 16px
- Padding Large: 10px 20px
- Gap (icon to text): 8px

### Border Radius

- Default: 6px
- Full: 999px

### Border Width

- Default: 1px
- Dashed: 2px

## Best Practices

1. **Use Auto Layout**: Always use Auto Layout for buttons to ensure proper spacing and resizing
2. **Component Properties**: Use Figma's Component Properties for easy variant switching
3. **Naming Convention**: Follow consistent naming: `Button / Variant / Size / Mode / State`
4. **Interactive States**: Create interactive components with hover and pressed states
5. **Accessibility**: Ensure sufficient color contrast (WCAG AA minimum)
6. **Icon Library**: Create a separate icon component library for consistency
7. **Documentation**: Keep component documentation up to date
8. **Testing**: Test all variant combinations to ensure they work correctly

## Common Patterns

### Button with Icon

- Icon size should match text size proportionally
- Gap between icon and text: 8px
- Icon color matches text color

### Icon Only Button

- Square dimensions
- Icon centered
- Padding equal on all sides

### Full Width Button

- Width: 100% of container
- Use constraints: Left & Right
- Maintain padding and height

### Button Group

- Gap between buttons: 8px or 12px
- Use Auto Layout with gap
- Align buttons to same baseline

## Export Settings

For development handoff:

- Export as SVG for icons
- Provide CSS specifications
- Include spacing measurements
- Document color tokens
- Specify font weights and sizes

## Checklist

- [ ] All 10 variants created
- [ ] All 4 sizes implemented
- [ ] All 3 modes (Default, Icon Only, Link) created
- [ ] All 3 states (Default, Hover, Disabled) created
- [ ] Radius variants (Default, Full) set up
- [ ] Component Properties configured
- [ ] Interactive states added
- [ ] Badge integration examples created
- [ ] Loading state created
- [ ] Documentation page added
- [ ] Design tokens documented
- [ ] All combinations tested

## Additional Resources

- Reference the live component page at `/figma/button` for visual examples
- Check the static HTML file for exact styling
- Review the React component code for behavior specifications

---

**Last Updated**: December 2024
**Design System Version**: Soar DS v1.0
