import Gallery from './Gallery'
import ProjectLinks from './ProjectLinks'
import { SubProject } from '@/interfaces/project'

interface Props {
  projects: SubProject[]
}

export default function ProjectsGallery({ projects }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project) => (
        <div key={project.client}>
          {project.images && (
            <div className="rounded-lg ring-1 ring-neutral-800">
              <Gallery images={project.images} />
              <div className="p-4">
                {project.client ||
                project.url ||
                project.github ||
                project.offline ? (
                  <ProjectLinks project={project} />
                ) : null}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
