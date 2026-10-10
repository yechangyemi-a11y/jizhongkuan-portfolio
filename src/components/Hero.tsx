import { useEffect, useRef, useState } from 'react'
import { portfolioData } from '../data/portfolioData'
import { HeroActor } from './HeroActor'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Hero({ onMotionChange }: { onMotionChange?: (paused: boolean) => void }) {
  const surface = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const [paused, setPaused] = useState(false)
  const [active, setActive] = useState(true)
  useEffect(() => {
    let visible = true
    const update = () => setActive(visible && !document.hidden)
    const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      update()
    }, { threshold: 0.05 })
    if (surface.current) observer?.observe(surface.current)
    document.addEventListener('visibilitychange', update)
    return () => { observer?.disconnect(); document.removeEventListener('visibilitychange', update) }
  }, [])
  return (
    <section className="hero" aria-labelledby="hero-title" ref={surface} data-motion={paused || reduced || !active ? 'paused' : 'running'}
      onPointerMove={(event) => {
        if (reduced || paused || event.pointerType === 'touch') return
        const bounds = event.currentTarget.getBoundingClientRect()
        surface.current?.style.setProperty('--pointer-x', `${(event.clientX - bounds.left) / bounds.width * 12 - 6}px`)
        surface.current?.style.setProperty('--pointer-y', `${(event.clientY - bounds.top) / bounds.height * 12 - 6}px`)
        surface.current?.style.setProperty('--light-x', `${(event.clientX - bounds.left) / bounds.width * 100}%`)
        surface.current?.style.setProperty('--light-y', `${(event.clientY - bounds.top) / bounds.height * 100}%`)
      }} onPointerLeave={() => {
        surface.current?.style.setProperty('--pointer-x', '0px')
        surface.current?.style.setProperty('--pointer-y', '0px')
      }}>
      <div className="hero__slats" aria-hidden="true" /><div className="hero__ambient" aria-hidden="true" />
      <div className="site-shell hero__content">
        <header className="site-nav">
          <a className="wordmark" href="#top" aria-label="姬忠宽首页">JZK<span>姬忠宽 / VISUAL CREATOR</span></a>
          <nav aria-label="主导航">
            <a href="#about">关于我</a>
            <a href="#services">拍摄与制作</a>
            <a href="#projects">精选作品</a>
            <a href="#qinghong">微综艺与 AI</a>
            <a className="nav-contact" href="#contact">联系合作 <span>↗</span></a>
          </nav>
        </header>

        <div className="hero__main">
          <div className="hero__copy">
          <p className="eyebrow"><span className="status-dot" /> INDEPENDENT IMAGE MAKER · SHANGHAI</p>
          <div className="hero__display" aria-hidden="true">FRAME<br /><span>THE NEXT.</span></div>
          <h1 id="hero-title">{portfolioData.profile.statement}</h1>
          <p className="hero__intro">{portfolioData.profile.introduction}</p>
          <div className="hero__actions">
            <a className="button button--solid" href="#projects">查看作品 <span>↗</span></a>
            <a className="button button--quiet" href="#services">拍摄与制作 <span>↘</span></a>
          </div>
          </div>
          <div className="hero__visual">
            <div className="hero__art" aria-hidden="true"><div className="hero__ring" /></div>
            <div className="hero__orbit" aria-hidden="true" />
            <HeroActor paused={paused} reduced={reduced} active={active} />
            <span className="hero__visual-label" aria-hidden="true">JZK / IMAGE MAKER</span>
          </div>
        </div>

        <div className="hero__footer"><p>FILM. PHOTOGRAPHY. AI. <span>影像，让想法发生。</span></p>
          <button className="motion-toggle" type="button" disabled={reduced} aria-label={paused ? '继续动效' : '暂停动效'} onClick={() => {
            setPaused(!paused); onMotionChange?.(!paused)
          }}>{reduced ? '静态模式' : paused ? '▷ 继续动效' : 'Ⅱ 暂停动效'}</button>
          <a href="#about" className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></a></div>
      </div>
    </section>
  )
}
