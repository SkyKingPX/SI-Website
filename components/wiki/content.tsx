"use client"

import { useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { ComponentProps } from 'react'
import { Link } from 'lucide-react'
import {h} from "hastscript";
import JSX = h.JSX;

interface WikiContentProps {
  content: string
  className?: string
  isLoading?: boolean
}

interface CodeProps extends ComponentProps<'code'> {
  inline?: boolean
  className?: string
  children?: React.ReactNode
}

const HeadingComponent = ({ level, children }: { level: number, children: React.ReactNode }) => {
  const text = children?.toString() || ''
  const slug = text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  useEffect(() => {
    // Handle direct navigation to hash
    if (window.location.hash === `#${slug}`) {
      const element = document.getElementById(slug)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    // Handle clicks on anchor links
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [slug])

  return (
    <Tag id={slug} className="group relative flex items-center gap-2">
      <a
        href={`#${slug}`}
        className="opacity-0 group-hover:opacity-100 transition-opacity absolute -left-7"
        aria-label={`Link to ${text}`}
      >
        <Link className="h-4 w-4" />
      </a>
      {children}
    </Tag>
  )
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

  return (
    <div className={cn("prose prose-neutral dark:prose-invert max-w-none prose-pre:p-0", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          h1: ({ children }) => <HeadingComponent level={1}>{children}</HeadingComponent>,
          h2: ({ children }) => <HeadingComponent level={2}>{children}</HeadingComponent>,
          h3: ({ children }) => <HeadingComponent level={3}>{children}</HeadingComponent>,
          h4: ({ children }) => <HeadingComponent level={4}>{children}</HeadingComponent>,
          h5: ({ children }) => <HeadingComponent level={5}>{children}</HeadingComponent>,
          h6: ({ children }) => <HeadingComponent level={6}>{children}</HeadingComponent>,
          code({inline, className, children, ...props}: CodeProps) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={tomorrow}
                language={match[1]}
                customStyle={{
                  margin: 0,
                  padding: '1rem',
                  borderRadius: '0.375rem',
                  background: '#1a1b26'
                }}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}