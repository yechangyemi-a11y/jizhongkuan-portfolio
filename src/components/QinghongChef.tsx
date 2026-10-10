import { portfolioData } from '../data/portfolioData'

export function QinghongChef() {
  const project = portfolioData.qinghongChef

  return (
    <section className="qinghong section" id="qinghong" aria-labelledby="qinghong-title">
      <div className="site-shell">
        <div className="qinghong__intro">
          <p className="section-index">04 / FEATURED CASE</p>
          <div>
            <p className="section-kicker">{project.kicker}</p>
            <h2 id="qinghong-title">{project.title}<span className="case-badge">CASE STUDY</span></h2>
            <p>{project.summary}</p>
          </div>
        </div>
        <div className="qinghong__stage" style={{ backgroundImage: `url(${project.image})` }} aria-label="青红厨师2项目画面">
          <p>青红厨师2 / AI 视觉片段<br />VARIETY PRODUCTION / AI ASSISTED</p>
        </div>
        <div className="chapter-grid">
          {project.chapters.map((chapter, index) => (
            <article className="chapter" key={chapter.title}>
              <span>0{index + 1}</span>
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
