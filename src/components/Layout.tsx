import Head from 'next/head'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import Cover from './Cover'
import Footer from './Footer'
import Navbar from './Navbar'
import SkillsSection from './SkillsSection'

interface Props {
  title: string
  description?: string
  children: React.ReactNode
}

export default function Layout({ title, description, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dlomynswh/image/upload/v1678916234/portfolio/og-image.png"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* cover */}
      <Cover />
      {/* two columns */}
      <div className="mx-auto -mt-[3.75rem] flex max-w-7xl flex-col gap-4 px-4 lg:-mt-[6.25rem] lg:flex-row">
        {/* sidebar or aside */}
        <aside className="flex shrink-0 flex-col gap-4 lg:w-80">
          {/* about section */}
          <AboutSection />
          <ContactSection />
          <SkillsSection />
          {/* contact section */}
          {/* skills section */}
        </aside>
        {/* second column */}
        <div className="flex grow flex-col gap-4">
          {/* navbar */}
          <Navbar />
          {/* page content */}
          <main className="card flex flex-col">{children}</main>
          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  )
}
