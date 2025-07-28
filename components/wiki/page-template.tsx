"use client"

import { useState, ReactNode } from "react"
import Link from "next/link"
import { WikiContent } from "@/components/wiki/content"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  Edit,
  Copy,
  Check,
  Share2,
  ArrowUp
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface WikiPageTemplateProps {
  title: string
  titleImage: string
  content: string | ReactNode
  lastUpdated?: string
  prevPage?: {
    title: string
    href: string
  }
  nextPage?: {
    title: string
    href: string
  }
  breadcrumbs?: {
    title: string
    href: string
  }[]
  editUrl?: string
  className?: string
}

export function WikiPageTemplate({
                                   title,
                                   titleImage,
                                   content,
                                   lastUpdated,
                                   prevPage,
                                   nextPage,
                                   breadcrumbs = [],
                                   editUrl,
                                   className
                                 }: WikiPageTemplateProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const renderContent = () => {
    if (typeof content === 'string') {
      return <WikiContent content={content} className="mb-10" />
    }
    return <div className="mb-10">{content}</div>
  }

  return (
    <div className={cn("max-w-4xl mx-auto", className)}>
      {/* Breadcrumbs */}
      {/*{breadcrumbs.length > 0 && (*/}
      {/*  <Breadcrumb className="mb-6">*/}
      {/*    <BreadcrumbItem>*/}
      {/*      <BreadcrumbLink href="/wiki">Wiki</BreadcrumbLink>*/}
      {/*    </BreadcrumbItem>*/}
      {/*    <ChevronRight className="h-4 w-4" />*/}
      {/*    {breadcrumbs.map((crumb, i) => (*/}
      {/*      <BreadcrumbItem key={i}>*/}
      {/*        {i === breadcrumbs.length - 1 ? (*/}
      {/*          <span>{crumb.title}</span>*/}
      {/*        ) : (*/}
      {/*          <>*/}
      {/*            <BreadcrumbLink href={crumb.href}>{crumb.title}</BreadcrumbLink>*/}
      {/*            <ChevronRight className="h-4 w-4" />*/}
      {/*          </>*/}
      {/*        )}*/}
      {/*      </BreadcrumbItem>*/}
      {/*    ))}*/}
      {/*  </Breadcrumb>*/}
      {/*)}*/}

      {/* Title and Actions */}
      <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 text-center sm:text-left">
        {/* Image */}
        {titleImage && titleImage !== "#" && (
          <img className="h-16 w-16" src={titleImage} alt="Title Image" />
        )}

        {/* Title & Subtitle */}
        <div className="sm:flex-1">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {lastUpdated && (
            <div className="text-sm text-muted-foreground mt-1">
              Last updated: {lastUpdated}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-2 sm:mt-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={copyToClipboard}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{copied ? "Copied!" : "Copy URL"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {editUrl && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={editUrl}>
                    <Button variant="outline" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit this page</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: title,
                        url: window.location.href,
                      })
                    } else {
                      copyToClipboard()
                    }
                  }}
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share this page</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Content */}
      {renderContent()}

      {/* Navigation and Footer */}
      <Separator className="my-6" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex-1">
          {prevPage && (
            <Link href={prevPage.href} className="inline-block">
              <Button variant="ghost" className="flex items-center gap-2 hover:bg-muted">
                <ChevronLeft className="h-4 w-4" />
                <span className="flex flex-col items-start">
                  <span className="text-xs text-muted-foreground">Previous</span>
                  <span className="text-sm font-medium">{prevPage.title}</span>
                </span>
              </Button>
            </Link>
          )}
        </div>

        <div>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover-lift"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 flex justify-end">
          {nextPage && (
            <Link href={nextPage.href} className="inline-block">
              <Button variant="ghost" className="flex items-center gap-2 hover:bg-muted">
                <span className="flex flex-col items-end">
                  <span className="text-xs text-muted-foreground">Next</span>
                  <span className="text-sm font-medium">{nextPage.title}</span>
                </span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default WikiPageTemplate