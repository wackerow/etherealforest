import { Link2 as LinkIcon } from "lucide-react"
import { Link } from "./Link"

export const IdAnchor = ({ id }: { id?: string }) => {
  if (!id) return null
  return (
    <Link
      href={"#" + id}
      className="absolute right-full opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-100 ease-in-out"
      aria-label={id.replaceAll("-", " ") + " permalink"}
    >
      <LinkIcon className="text-xl me-1" />
    </Link>
  )
}
