import Header from '../header/header.jsx'
import bolinaoBeach from '../assets/Pangasinan.jpg'

function Home() {
  const scrollToDestinations = () => {
    document.querySelector('#destinations')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero-section">
      <img className="hero-background" src={bolinaoBeach} alt="Blue water and shoreline at Bolinao Beach, Pangasinan" />
      <div className="hero-overlay" />
      <Header />

      <div className="hero-content">
        <p className="eyebrow"><span /> Discover the heart of Pangasinan</p>
        <h1>Where islands,<br />heritage, and adventure meet.</h1>
        <p className="hero-description">
          Journey through storied coastlines, living traditions, and natural wonders that make
          every corner of Pangasinan worth discovering.
        </p>
        <div className="hero-actions">
          <button className="primary-action" type="button" onClick={scrollToDestinations}>Explore destinations <span aria-hidden="true">→</span></button>
          <a className="text-action" href="#culture">Our stories <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      <div className="hero-footer" aria-label="Featured location">
        <div>
          <span className="location-pin" aria-hidden="true">●</span>
          <p><small>Featured destination</small>Bolinao Beach</p>
        </div>
        <p className="location-count"><strong>01</strong> / 06</p>
      </div>
    </section>
  )
}

export default Home
