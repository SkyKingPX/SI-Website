# Breadcrumb Component Fix

## Issue

There was a hydration error in the breadcrumb component with the following message:

```
Error: In HTML, <li> cannot be a descendant of <li>.
This will cause a hydration error.
```

The error occurred because the `BreadcrumbSeparator` component was defined as a `<li>` element, but it was being used inside `BreadcrumbItem` components, which are also `<li>` elements. This created an invalid HTML structure where a `<li>` element was nested inside another `<li>` element.

## Solution

The solution was to change the `BreadcrumbSeparator` component to use a `<span>` element instead of a `<li>` element, while maintaining its visual appearance and functionality.

### Changes Made

In `components/ui/breadcrumb.tsx`:

```diff
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
- }: React.ComponentProps<"li">) => (
-  <li
+  }: React.ComponentProps<"span">) => (
+  <span
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
-  </li>
+  </span>
)
```

## Why This Works

This fix works because:

1. A `<span>` element can be safely nested inside a `<li>` element, unlike another `<li>` element.
2. The visual appearance and functionality remain the same because we've kept all the styling classes and attributes.
3. The semantic meaning of the separator is preserved with the `role="presentation"` and `aria-hidden="true"` attributes.

## Usage in WikiPageTemplate

The `BreadcrumbSeparator` component is used in the `WikiPageTemplate` component in the following ways:

1. Directly after a `BreadcrumbItem`:
   ```jsx
   <BreadcrumbItem>
     <BreadcrumbLink href="/wiki">Wiki</BreadcrumbLink>
   </BreadcrumbItem>
   <BreadcrumbSeparator />
   ```

2. Inside a `BreadcrumbItem` when rendering breadcrumbs in a loop:
   ```jsx
   <BreadcrumbItem key={i}>
     {i === breadcrumbs.length - 1 ? (
       <span>{crumb.title}</span>
     ) : (
       <>
         <BreadcrumbLink href={crumb.href}>{crumb.title}</BreadcrumbLink>
         <BreadcrumbSeparator />
       </>
     )}
   </BreadcrumbItem>
   ```

With the fix, both usages are now valid HTML structures.

## Date of Fix

July 25, 2025