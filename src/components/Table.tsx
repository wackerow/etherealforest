import type { ReactNode } from "react"

type TableProps = {
  children: ReactNode
  className?: string
}

export const Table = ({ className = "", ...props }: TableProps) => (
  <div className={`whitespace-normal mb-4 ${className}`}>
    <table className="w-full" {...props} />
  </div>
)

export const markdownTableComponents = {
  table: (props: any) => <table className="w-full" {...props} />,
  thead: (props: any) => <thead className="border-b" {...props} />,
  th: (props: any) => <th className="p-2 text-left font-semibold" {...props} />,
  tbody: (props: any) => <tbody {...props} />,
  tr: (props: any) => <tr className="border-b" {...props} />,
  td: (props: any) => <td className="p-2" {...props} />,
}