import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { portfolioData } from '../data/portfolioData'

export function ProjectGrid() {
  const [selected, setSelected] = useState<number | null>(null)
  const origin = useRef<HTMLButtonElement | null>(null)
  const dialog = useRef<HTMLDivElement>(null)
  const opened = selected !== null
  useEffect(() => {
    if (!opened) return
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const main = document.querySelector('main')
    const wasInert = main?.inert ?? false
    if (main) main.inert = true
    dialog.current?.querySelector<HTMLButtonElement>('button')?.focus()
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null)
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault()
        const offset = event.key === 'ArrowRight' ? 1 : -1
        setSelected(current => current === null ? null : (current + offset + portfolioData.projects.length) % portfolioData.projects.length)
      }
      if (event.key === 'Tab') {
        const controls = dialog.current?.querySelectorAll<HTMLButtonElement>('button')
        if (!controls?.length) return
        const first = controls[0], last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', keydown)
    return () => {
      document.body.style.overflow = overflow
      if (main) main.inert = wasInert
      document.removeEventListener('keydown', keydown)
      origin.current?.focus()
    }
  }, [opened])
  const project = selected === null ? null : portfolioData.projects[selected]
  return (
    <>
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
              <button className="project-card__art" type="button" aria-label={`放大查看${project.title}`} onClick={event => {
                origin.current = event.currentTarget; setSelected(index)
              }} onPointerMove={event => {
                if (event.pointerType === 'touch') return
                const box = event.currentTarget.getBoundingClientRect()
                event.currentTarget.style.setProperty('--card-x', `${(event.clientX - box.left) / box.width * 100}%`)
                event.currentTarget.style.setProperty('--card-y', `${(event.clientY - box.top) / box.height * 100}%`)
              }}>
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span>{project.label}</span>
                <i className="project-card__expand" aria-hidden="true">↗</i>
              </button>
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
    {project && createPortal(
      <div className="lightbox" onClick={event => { if (event.target === event.currentTarget) setSelected(null) }}>
        <div className="lightbox__panel" role="dialog" aria-modal="true" aria-labelledby="viewer-title" ref={dialog}>
          <div className="lightbox__bar"><span>SELECTED WORK / 0{(selected ?? 0) + 1}</span><button type="button" aria-label="关闭图片" onClick={() => setSelected(null)}>关闭 ×</button></div>
          <img src={project.image} alt={project.alt} className="lightbox__image" />
          <div className="lightbox__caption"><div><p>{project.category}</p><h2 id="viewer-title">{project.title}</h2><p>{project.description}</p></div>
            <div className="lightbox__controls"><button type="button" aria-label="上一个项目" onClick={() => setSelected(current => ((current ?? 0) + 3) % 4)}>←</button><button type="button" aria-label="下一个项目" onClick={() => setSelected(current => ((current ?? 0) + 1) % 4)}>→</button></div>
          </div>
        </div>
      </div>, document.body
    )}
    </>
  )
}
