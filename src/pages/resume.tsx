import Layout from '@/components/Layout'
import ResumeInfo from '@/components/ResumeInfo'
import { certifications, education, experience } from '@/db/resume'

export default function ResumePage() {
  return (
    <Layout
      title="Currículum | Brandon Palmeros"
      description="Conozca mis habilidades y experiencia profesional en el desarrollo web y el diseño gráfico en mi página de currículum."
    >
      <h1>Currículum</h1>
      <div className="mt-4 flex flex-col gap-4">
        <h2>Educación</h2>
        {education.map((data) => (
          <ResumeInfo key={data.title} {...data} />
        ))}
        <h2>Experiencia</h2>
        {experience.map((data) => (
          <ResumeInfo key={data.title} {...data} />
        ))}
        <h2>Certificaciones</h2>
        {certifications.map((data) => (
          <ResumeInfo key={data.title} {...data} />
        ))}
      </div>
    </Layout>
  )
}
