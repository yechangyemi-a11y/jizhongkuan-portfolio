import { portfolioData } from '../data/portfolioData'

export function ProjectGrid() {
  return (
    <section className="projects section" id="projects" aria-labelledby="projects-title">
      <div className="site-shell">
        <div className="section-heading">
          <p className="section-index">03 / SELECTED WORK</p>
          <div>
            <p className="section-kicker">SELECTED WORK / 不同的现场，同样的投入</p>
            <h2 id="projects-title">精选项目</h2>
          </div>
        </div>
        <div className="project-grid">
          {portfolioData.projects.map((project, index) => (
            <article className={`project-card project-card--${index + 1}`} key={project.title}>
              <div className="project-card__art">
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span>{project.label}</span>
              </div>
              <div className="project-card__content">
                <p>{project.category}<i>0{index + 1} / 04</i></p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="photo-albums" aria-label="摄影作品集链接">
          <p>PHOTOGRAPHY / MORE WORK</p>
          <div>
            {portfolioData.photoAlbums.map((album) => (
              <a key={album.href} href={album.href} target="_blank" rel="noreferrer">
                {album.title} <span>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
