import Link from 'next/link'

interface Props {
  children: React.ReactNode
  href: string
  className: string
}

export default function Button({ href, className, children }: Props) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
