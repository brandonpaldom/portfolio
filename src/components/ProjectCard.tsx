import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/interfaces/project'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="rounded-lg bg-neutral-800 transition-colors duration-300 hover:bg-neutral-700"
    >
      <Image
        src={project.coverImage}
        alt=""
        width={800}
        height={600}
        quality={100}
        priority
        className="rounded-t-lg"
      />
      <div className="rounded-b-lg px-4 py-3">
        <p className="font-medium">{project.name}</p>
      </div>
    </Link>
  )
}
