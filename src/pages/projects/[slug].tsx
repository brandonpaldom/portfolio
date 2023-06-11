import { GetStaticPaths, GetStaticProps } from 'next'
import Alert from '@/components/Alert'
import Gallery from '@/components/Gallery'
import Layout from '@/components/Layout'
import ProjectLinks from '@/components/ProjectLinks'
import ProjectsGallery from '@/components/ProjectsGallery'
import Tags from '@/components/Tags'
import { getProjectBySlug, getProjects } from '@/utils'
import { Project } from '@/interfaces/project'

interface Props {
  project: Project
}

export default function ProjectPage({ project }: Props) {
  const {
    name,
    tags,
    description,
    client,
    url,
    github,
    offline,
    images,
    projects,
    squareImage,
    development,
  } = project
  return (
    <Layout
      title={name}
      description="Aquí encontrarás una selección de mis proyectos más destacados y una descripción de mi experiencia en el campo de la tecnología y el diseño web."
    >
      <h1>{name}</h1>
      <div className="mt-4 flex flex-col items-start gap-4">
        {development && (
          <Alert>
            Este proyecto aún está en desarrollo. Es posible que algunas
            funciones no funcionen como se espera.
          </Alert>
        )}
        <Tags tags={tags} />
        <p>{description}</p>
        {client || url || github || offline ? (
          <ProjectLinks project={project} />
        ) : null}
        {images && <Gallery images={images} squareImage={squareImage} />}
        {projects && <ProjectsGallery projects={projects} />}
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = getProjects()

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = getProjectBySlug((params as { slug: string }).slug)

  return { props: { project } }
}
