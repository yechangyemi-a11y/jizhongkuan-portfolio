import { portfolioData } from '../data/portfolioData'

export function Capabilities() {
  return (
    <section className="capabilities section" aria-labelledby="capabilities-title">
      <div className="site-shell">
        <div className="section-heading">
          <p className="section-index">05 / WORKING METHOD</p>
          <div>
            <p className="section-kicker">能力必须能被交付</p>
            <h2 id="capabilities-title">让创意，拥有执行力。</h2>
          </div>
        </div>
        <div className="capability-list">
          {portfolioData.capabilities.map((capability) => (
            <article className="capability" key={capability.index}>
              <span>{capability.index}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <i>↗</i>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
