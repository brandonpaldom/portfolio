import Link from 'next/link'

interface Props {
  icon: JSX.Element
  url: string
}

export default function ContactLink({ url, icon }: Props) {
  return (
    <Link
      href={url}
      className="flex h-12 w-12 justify-center rounded-full bg-neutral-800 text-neutral-50 transition-colors duration-300 hover:bg-neutral-700"
      target="_blank"
      rel="noopener"
    >
      {icon}
    </Link>
  )
}
