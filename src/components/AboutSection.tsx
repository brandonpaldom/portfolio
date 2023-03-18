import Link from 'next/link'
import Image from 'next/image'
import Chip from './Chip'

const locationIcon = (
  <svg className="h-auto w-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
  </svg>
)

interface Profile {
  image: string
  name: string
  title: string
  location: string
}

const profile: Profile = {
  image:
    'https://res.cloudinary.com/dlomynswh/image/upload/v1678916762/portfolio/profile/profile.jpg',
  name: 'Brandon Palmeros',
  title: 'Diseñador web y gráfico',
  location: 'Veracruz, México',
}

export default function AboutSection() {
  const { image, name, title, location } = profile

  return (
    <section className="card flex flex-col items-center">
      <Link href="/">
        <Image
          src={image}
          alt=""
          width={96}
          height={96}
          quality={100}
          priority
          className="rounded-full"
        />
      </Link>
      <p className="mt-4 font-semibold text-neutral-50">{name}</p>
      <p className="mb-2">{title}</p>
      <Chip icon={locationIcon} color="chip-neutral">
        {location}
      </Chip>
    </section>
  )
}
