const infoIcon = (
  <svg className="h-auto w-5 shrink-0 fill-current" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"></path>
  </svg>
)

interface Props {
  children: React.ReactNode
}

export default function Alert({ children }: Props) {
  return (
    <div className="flex items-start gap-2 rounded-lg p-3 text-[0.875rem] ring-1 ring-red-500">
      {infoIcon}
      <span>{children}</span>
    </div>
  )
}
