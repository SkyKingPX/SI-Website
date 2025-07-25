# Wiki Components Documentation

This document provides information on how to use the wiki components to create and maintain wiki pages for the Soncresity Industries website.

## Overview

The wiki system consists of three main components:

1. **WikiLayout**: Provides the overall layout for wiki pages, including the navigation sidebar and search functionality.
2. **WikiContent**: Renders markdown content with proper styling.
3. **WikiPageTemplate**: A template for individual wiki pages that includes breadcrumbs, title, actions, and navigation.

## Installation

To use these components, you need to have the following dependencies installed:

```bash
# If you're using npm
npm install react-markdown rehype-highlight remark-gfm

# If you're using pnpm
pnpm add react-markdown rehype-highlight remark-gfm
```

> **Note**: The current implementation includes a placeholder for markdown rendering. To fully implement markdown support, you need to uncomment the relevant code in the `WikiContent` component and install the dependencies mentioned above.

## Usage

### Creating a New Wiki Page

1. Create a new directory under `app/wiki/` for your wiki page (e.g., `app/wiki/my-project/`).
2. Create a `page.tsx` file in the directory with the following structure:

```tsx
import { Metadata } from "next"
import WikiLayout from "@/components/wiki/layout"
import WikiPageTemplate from "@/components/wiki/page-template"

export const metadata: Metadata = {
  title: "My Project - Wiki",
  description: "Information about My Project",
}

// Markdown content for the wiki page
const wikiContent = `
# My Project

This is a wiki page for My Project.

## Features

- Feature 1
- Feature 2
- Feature 3

## Getting Started

Instructions for getting started with My Project.
`

export default function MyProjectWikiPage() {
  return (
    <WikiLayout>
      <WikiPageTemplate
        title="My Project"
        content={wikiContent}
        lastUpdated="Month Day, Year"
        breadcrumbs={[
          { title: "Category", href: "/wiki#category" },
          { title: "My Project", href: "/wiki/my-project" }
        ]}
        prevPage={{
          title: "Previous Page",
          href: "/wiki/previous-page"
        }}
        nextPage={{
          title: "Next Page",
          href: "/wiki/next-page"
        }}
        editUrl="https://github.com/soncresity/si-website/edit/main/app/wiki/my-project/page.tsx"
      />
    </WikiLayout>
  )
}
```

### Adding to Navigation

To add your wiki page to the navigation sidebar, update the `wikiNavItems` array in the `WikiLayout` component:

```tsx
// components/wiki/layout.tsx
const wikiNavItems = [
  // ... existing items
  {
    title: "My Category",
    items: [
      // ... existing items
      {
        title: "My Project",
        href: "/wiki/my-project",
      },
    ],
  },
]
```

## Component Props

### WikiLayout

The `WikiLayout` component takes a single `children` prop, which should be the content of your wiki page.

### WikiContent

The `WikiContent` component takes the following props:

- `content` (string, required): The markdown content to render.
- `className` (string, optional): Additional CSS classes to apply to the content container.
- `isLoading` (boolean, optional): Whether the content is loading. Defaults to `false`.

### WikiPageTemplate

The `WikiPageTemplate` component takes the following props:

- `title` (string, required): The title of the wiki page.
- `content` (string, required): The markdown content to render.
- `lastUpdated` (string, optional): The date when the page was last updated.
- `breadcrumbs` (array, optional): An array of breadcrumb items, each with a `title` and `href`.
- `prevPage` (object, optional): Information about the previous page, with a `title` and `href`.
- `nextPage` (object, optional): Information about the next page, with a `title` and `href`.
- `editUrl` (string, optional): URL to edit the page (e.g., GitHub edit link).
- `className` (string, optional): Additional CSS classes to apply to the container.

## Markdown Support

The wiki system supports standard markdown syntax, including:

- Headers (# to ######)
- Bold and italic text
- Lists (ordered and unordered)
- Links
- Code blocks
- Inline code
- Blockquotes
- Tables

## Styling

The wiki components use Tailwind CSS for styling and are designed to be responsive. The content is styled using Tailwind's typography plugin (`prose`), which provides sensible defaults for markdown content.

## Customization

To customize the appearance of the wiki components, you can modify the following files:

- `components/wiki/layout.tsx`: For the overall layout and navigation.
- `components/wiki/content.tsx`: For the markdown rendering.
- `components/wiki/page-template.tsx`: For the page template.

## Best Practices

1. **Keep content in markdown**: Store the content as markdown strings to make it easy to edit and maintain.
2. **Use descriptive titles**: Make sure your page titles are descriptive and include relevant keywords.
3. **Provide navigation**: Always include breadcrumbs and prev/next links to help users navigate the wiki.
4. **Keep content up to date**: Regularly update the `lastUpdated` field to indicate when the content was last reviewed.
5. **Include edit links**: Provide an `editUrl` to allow users to suggest improvements to the content.