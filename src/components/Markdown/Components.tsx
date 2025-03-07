import { type Components } from "react-markdown"
import { cn } from "@/lib/utils"
import { Link } from "@/components/Link"
// We'll assume you'll create a new Table component compatible with tailwind
// import { markdownTableComponents, Table } from "@/components/Table"

import "katex/dist/katex.min.css"

export const MarkdownComponents: Components = {
  p: ({ children }) => (
    <p className="text-lg leading-relaxed mb-4 md:mb-6">
      {children}
    </p>
  ),
  a: ({ children, href }) => (
    <Link href={href as string}>
      {children}
    </Link>
  ),
  h1: ({ children, id }) => (
    // h1 rendered from page template using title
    // Only one h1 per page; markdown h1's (#) will be rendered as h2's
    <h2 
      id={id} 
      className="text-3xl font-normal tracking-wide text-body mt-10 md:mt-14 mb-4 md:mb-6"
    >
      {children}
    </h2>
  ),
  h2: ({ children, id }) => (
    <h2 
      id={id}
      className="text-3xl font-normal tracking-wide text-body mt-10 md:mt-14 mb-4 md:mb-6"
    >
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3 
      id={id}
      className="text-2xl font-normal tracking-wide text-body mt-8 md:mt-12 mb-4 md:mb-6"
    >
      {children}
    </h3>
  ),
  h4: ({ children, id }) => (
    <h4 
      id={id}
      className="text-lg font-normal tracking-wide uppercase text-body mt-6 md:mt-10 mb-4 md:mb-6"
    >
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className="text-md font-normal tracking-wide uppercase text-body">
      {children}
    </h5>
  ),
  h6: ({ children }) => (
    <h6 className="text-sm font-normal tracking-wide uppercase text-body">
      {children}
    </h6>
  ),
  pre: ({ children }) => (
    <div className="mb-5 stack">
      <pre>{children}</pre>
    </div>
  ),
  img: (img: any) => (
    <img className="block mx-auto" src={img.src} alt={img.alt} />
  ),
  hr: () => <hr className="my-6 border-t border-border" />,
  ol: ({ children }) => <ol className="mb-6 list-decimal pl-6">{children}</ol>,
  ul: ({ children }) => <ul className="mb-6 list-disc pl-6">{children}</ul>,
  li: ({ children }) => <li className="mb-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="bg-muted p-4 mb-8 [&_p:last-of-type]:mb-0">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse border border-border">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
  th: ({ children }) => (
    <th className="border border-border p-2 text-left font-medium">
      {children}
    </th>
  ),
  tr: ({ children }) => <tr>{children}</tr>,
  td: ({ children }) => (
    <td className="border border-border p-2">
      {children}
    </td>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>
}
