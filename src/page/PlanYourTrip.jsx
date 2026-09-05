function PlanYourTrip() {
  return (
    <section id="plan" className="plan-section page-section">
      <div className="plan-heading">
        <p className="section-label">Plan your trip</p>
        <h2>Start your Pangasinan journey.</h2>
        <p>Build an easy, responsible, and memorable visit with these quick travel essentials.</p>
      </div>
      <div className="plan-grid">
        <article><span aria-hidden="true">☀</span><div><h3>Best time to visit</h3><p>Plan coastal adventures during drier months and always check local weather before island trips.</p></div></article>
        <article><span aria-hidden="true">↗</span><div><h3>Getting around</h3><p>Major towns are linked by buses and vans; local tricycles are useful for shorter destination transfers.</p></div></article>
        <article><span aria-hidden="true">♻</span><div><h3>Travel responsibly</h3><p>Respect heritage sites, support local businesses, and bring reusable essentials to reduce waste.</p></div></article>
      </div>
      <a className="back-home" href="#home">Back to top <span aria-hidden="true">↑</span></a>
    </section>
  )
}

export default PlanYourTrip
