import './db-fitness.css'
import Nav from '@/components/db-fitness/Nav'
import Hero from '@/components/db-fitness/Hero'
import Marquee from '@/components/db-fitness/Marquee'
import Stats from '@/components/db-fitness/Stats'
import About from '@/components/db-fitness/About'
import Team from '@/components/db-fitness/Team'
import Services from '@/components/db-fitness/Services'
import Quote from '@/components/db-fitness/Quote'
import Kursplan from '@/components/db-fitness/Kursplan'
import Booking from '@/components/db-fitness/Booking'
import Reviews from '@/components/db-fitness/Reviews'
import Instagram from '@/components/db-fitness/Instagram'
import Contact from '@/components/db-fitness/Contact'
import Footer from '@/components/db-fitness/Footer'

export default function Page() {
  return (
    <div className="db-body">
      <a className="db-skip-link" href="#main">Zum Hauptinhalt springen</a>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Stats />
        <About />
        {/* <Team /> */}
        <Services />
        <Quote />
        <Kursplan />
        <Booking />
        <Reviews />
        <Instagram />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
