import { useMemo, useState } from 'react'
import bolinaoBeach from '../assets/bolinao-beach.jpg'
import dasolBeach from '../assets/Dasol-beach.jpg'
import lingayenBeach from '../assets/Lingayen-beach.jpg'
import tondolBeach from '../assets/tondol-beach-anda.jpg'
import sanFabianBeach from '../assets/San-Fabian-beach.jpg'

const attractions = [
  { name: 'Bolinao Beach', location: 'Bolinao', category: 'Coastal escape', image: bolinaoBeach, description: 'A relaxed shoreline for clear water, slow afternoons, and west-coast sunsets.' },
  { name: 'Dasol Beach', location: 'Dasol', category: 'Beach day', image: dasolBeach, description: 'Enjoy a quiet stretch of coast with soft sand and open sea views.' },
  { name: 'Lingayen Beach', location: 'Lingayen', category: 'Seaside walk', image: lingayenBeach, description: 'A broad beach for morning walks, local food, and easy sea breezes.' },
  { name: 'Tondol Beach, Anda', location: 'Anda', category: 'Island views', image: tondolBeach, description: 'A calm beachfront with shallow water and views toward nearby islets.' },
  { name: 'San Fabian Beach', location: 'San Fabian', category: 'Beach retreat', image: sanFabianBeach, description: 'A simple beach stop for fresh air, family time, and mountain views.' },
]

function Destination() {
  const [query, setQuery] = useState('')
  const filteredAttractions = useMemo(() => {
    const search = query.trim().toLowerCase()
    return search ? attractions.filter(({ name, location }) => `${name} ${location}`.toLowerCase().includes(search)) : attractions
  }, [query])

  return (
    <section id="destinations" className="destinations-section page-section">
      <div className="section-heading">
        <div>
          <p className="section-label">Places to visit</p>
          <h2>Explore the coast.</h2>
        </div>
        <p>Six simple stops for a slower trip around Pangasinan.</p>
      </div>

      <label className="destination-search">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m16 16 5 5" /></svg>
        <span className="sr-only">Search destinations by name</span>
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search places" />
        {query && <button type="button" onClick={() => setQuery('')} aria-label="Clear destination search">×</button>}
      </label>
      <p className="search-summary" aria-live="polite">Showing {filteredAttractions.length} {filteredAttractions.length === 1 ? 'place' : 'places'}</p>

      {filteredAttractions.length ? (
        <div className="destination-grid">
          {filteredAttractions.map((attraction) => (
            <article className="destination-card" key={attraction.name}>
              <div className="card-image-wrap"><img src={attraction.image} alt={`${attraction.name} in ${attraction.location}, Pangasinan`} /><span>{attraction.category}</span></div>
              <div className="card-content">
                <p className="card-location">{attraction.location}, Pangasinan</p>
                <h3>{attraction.name}</h3>
                <p>{attraction.description}</p>
                <a href="#plan">Plan a visit <span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-results"><h3>No place found</h3><p>Try “Bolinao,” “Dasol,” “Lingayen,” or “Anda.”</p><button type="button" onClick={() => setQuery('')}>View all places</button></div>
      )}
    </section>
  )
}

export default Destination
