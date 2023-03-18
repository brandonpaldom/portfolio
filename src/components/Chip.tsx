import Link from 'next/link'

interface Props {
  children: React.ReactNode
  href?: string
  color:
    | 'chip-neutral'
    | 'chip-blue'
    | 'chip-purple'
    | 'chip-amber'
    | 'chip-red'
  icon?: JSX.Element
}

export default function Chip({ href, color, icon, children }: Props) {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={`chip ${color} flex items-center gap-2`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon && <div className="-ml-1.5">{icon}</div>}
          <span>{children}</span>
        </Link>
      ) : (
        <div className={`chip ${color} flex items-center gap-1.5`}>
          {icon && <div className="-ml-1.5">{icon}</div>}
          <span>{children}</span>
        </div>
      )}
    </>
  )
}
