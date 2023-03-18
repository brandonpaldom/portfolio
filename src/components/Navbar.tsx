import { useRouter } from 'next/router'
import Button from './Button'

interface NavItem {
  title: string
  path: string
}

const navItems: NavItem[] = [
  { title: 'Portafolio', path: '/' },
  { title: 'Currículum', path: '/resume' },
]

export default function Navbar() {
  const { asPath } = useRouter()

  return (
    <nav className="card flex flex-wrap gap-2">
      {navItems.map(({ title, path }) => (
        <Button
          key={title}
          href={path}
          className={`btn ${asPath === path ? 'btn-primary' : 'btn-secondary'}`}
        >
          {title}
        </Button>
      ))}
    </nav>
  )
}
