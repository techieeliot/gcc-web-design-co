# Button Component

The Button component is a versatile interactive element that supports multiple variants, sizes, and states.

## Import

```tsx
import { Button } from "@/components/ui/button";
```

## Usage

```tsx
<Button variant="default">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
```

## Props

| Prop    | Type                                             | Default   | Description                    |
| ------- | ------------------------------------------------ | --------- | ------------------------------ |
| variant | 'default' \| 'outline' \| 'secondary' \| 'ghost' | 'default' | Visual style of the button     |
| size    | 'default' \| 'sm' \| 'lg' \| 'icon'              | 'default' | Size of the button             |
| asChild | boolean                                          | false     | Merge props with child element |

## Variants

### Default

Primary action button with solid background

- Use for primary calls to action
- Example: "Submit", "Save", "Continue"

### Outline

Secondary action with border outline

- Use for secondary actions
- Example: "Cancel", "Back", "Reset"

### Secondary

Alternative primary styling

- Use for alternative primary actions
- Example: "Next", "Edit", "Preview"

## Accessibility

- Buttons use native `button` elements for proper keyboard navigation
- Disabled state is properly conveyed to screen readers
- Focus states are clearly visible for keyboard users
