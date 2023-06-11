import Layout from '@/components/Layout'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/db/projects'

export default function HomePage() {
  return (
    <Layout
      title="Brandon Palmeros"
      description="Aquí encontrarás una selección de mis proyectos más destacados y una descripción de mi experiencia en el campo de la tecnología y el diseño web."
    >
      <h1>Portafolio</h1>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Layout>
  )
}
