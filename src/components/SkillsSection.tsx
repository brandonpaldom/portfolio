import Chip from './Chip'

const skills: string[] = [
  'Desarrollo web',
  'Diseño visual',
  'Marketing digital',
  'Next.js',
  'React',
  'JavaScript',
  'CSS',
  'HTML',
]

export default function SkillsSection() {
  return (
    <section className="card">
      <ul className="flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <li key={skill}>
            <Chip color="chip-blue">{skill}</Chip>
          </li>
        ))}
      </ul>
    </section>
  )
}
