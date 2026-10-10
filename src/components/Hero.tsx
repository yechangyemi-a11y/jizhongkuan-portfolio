import { useRef } from 'react'
import { portfolioData } from '../data/portfolioData'
import personalToy from '../assets/jizhongkuan-toy.png'

export function Hero() {
  const surface = useRef<HTMLElement>(null)
  return (
    <section className="hero" aria-labelledby="hero-title" ref={surface}
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect()
        surface.current?.style.setProperty('--pointer-x', `${(event.clientX - bounds.left) / bounds.width * 12 - 6}px`)
        surface.current?.style.setProperty('--pointer-y', `${(event.clientY - bounds.top) / bounds.height * 12 - 6}px`)
      }}>
      <div className="hero__grain" aria-hidden="true" />
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
            <div className="hero__art" aria-hidden="true" />
            <img className="hero__avatar" src={personalToy} alt="姬忠宽的 3D 潮玩形象，戴银框眼镜、手持相机" width="1024" height="1536" fetchPriority="high" />
            <span className="hero__visual-label" aria-hidden="true">JZK / IMAGE MAKER</span>
          </div>
        </div>

        <div className="hero__footer"><p>FILM. PHOTOGRAPHY. AI. <span>影像，让想法发生。</span></p><a href="#about" className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></a></div>
      </div>
    </section>
  )
}
