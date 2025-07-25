"use client"

import { useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

// Note: This is a placeholder for the actual markdown rendering
// In a real implementation, you would install and import a markdown library like:
// import ReactMarkdown from 'react-markdown'
// import rehypeHighlight from 'rehype-highlight'
// import remarkGfm from 'remark-gfm'

interface WikiContentProps {
  content: string
  className?: string
  isLoading?: boolean
}

export function WikiContent({ 
  content, 
  className, 
  isLoading = false 
}: WikiContentProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (isLoading || !mounted) {
    return (
      <div className={cn("space-y-4", className)}>
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    )
  }

  // This is a placeholder for the actual markdown rendering
  // In a real implementation, you would use a markdown library
  return (
    <div className={cn("prose prose-neutral dark:prose-invert max-w-none", className)}>
      {/* 
        In a real implementation with react-markdown, you would use:
        <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
          remarkPlugins={[remarkGfm]}
        >
          {content}
        </ReactMarkdown>
      */}
      <div dangerouslySetInnerHTML={{ __html: formatMarkdownPlaceholder(content) }} />
    </div>
  )
}

// This is a very basic placeholder function to simulate markdown rendering
// In a real implementation, you would use a markdown library
function formatMarkdownPlaceholder(markdown: string): string {
  let html = markdown
    // Headings
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    // Bold text
    .replace(/\*\*(.*)\*\*/gm, '<strong>$1</strong>')
    // Italic text
    .replace(/\*(.*)\*/gm, '<em>$1</em>')
    // Code blocks
    .replace(/```([\s\S]*?)```/gm, '<pre><code>$1</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/gm, '<code>$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gm, '<a href="$2">$1</a>')
    // Lists
    .replace(/^\- (.*$)/gm, '<li>$1</li>')
    // Paragraphs
    .replace(/^(?!<[a-z])(.*$)/gm, '<p>$1</p>')
    // Clean up empty paragraphs
    .replace(/<p><\/p>/gm, '')

  return html
}

export default WikiContent