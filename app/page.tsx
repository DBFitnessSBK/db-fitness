import './db-fitness.css'
import Nav from '@/components/db-fitness/Nav'
import Hero from '@/components/db-fitness/Hero'
import Marquee from '@/components/db-fitness/Marquee'
import Stats from '@/components/db-fitness/Stats'
import About from '@/components/db-fitness/About'
import Services from '@/components/db-fitness/Services'
import Quote from '@/components/db-fitness/Quote'
import Kursplan from '@/components/db-fitness/Kursplan'
import Instagram from '@/components/db-fitness/Instagram'
import Contact from '@/components/db-fitness/Contact'
import Footer from '@/components/db-fitness/Footer'

export default function Page() {
  return (
    <div className="db-body">
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Services />
      <Quote />
      <Kursplan />
      <Instagram />
      <Contact />
      <Footer />
    </div>
  )
}
