import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Experiences from './components/Experiences'
import Training from './components/Training'
import Classes from './components/Classes'
import Membership from './components/Membership'
import Gallery from './components/Gallery'
import WhyUs from './components/WhyUs'
import Hours from './components/Hours'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Experiences />
        <Training />
        <Classes />
        <Membership />
        <Gallery />
        <WhyUs />
        <Hours />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
