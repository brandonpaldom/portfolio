import Chip from './Chip'
import { Project, SubProject } from '@/interfaces/project'

const githubIcon = (
  <svg className="h-auto w-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
  </svg>
)

const publicIcon = (
  <svg className="h-auto w-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>{' '}
  </svg>
)

interface Props {
  project: Project | SubProject
}

export default function ProjectLinks({ project }: Props) {
  const { client, url, github, offline } = project

  return (
    <div className="flex gap-2">
      {client && <Chip color="chip-amber">{client}</Chip>}
      {url && (
        <Chip href={url} icon={publicIcon} color="chip-blue">
          Ir al sitio web
        </Chip>
      )}
      {github && (
        <Chip href={github} icon={githubIcon} color="chip-neutral">
          Ver en GitHub
        </Chip>
      )}
      {offline && <Chip color="chip-red">Offline</Chip>}
    </div>
  )
}
