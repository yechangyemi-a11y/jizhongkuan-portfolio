import { portfolioData } from '../data/portfolioData'

export function Services() {
  return (
    <section className="services section" id="services" aria-labelledby="services-title">
      <div className="site-shell">
        <div className="section-heading">
          <p className="section-index">02 / WHAT I DO</p>
          <div>
            <p className="section-kicker">拍摄的场景很多，合作从你的需求开始</p>
            <h2 id="services-title">这些内容，<br />我们都可以聊。</h2>
            <p className="section-description">从品牌的一条产品视频，到一场活动、一组人物内容或一档微综艺。选择适合项目的制作方式，让画面、表达和交付各有着落。</p>
          </div>
        </div>
        <div className="industry-focus">
          <p>涉及的行业与场景</p>
          <div>{portfolioData.industryFocus.map((industry) => <span key={industry}>{industry}</span>)}</div>
        </div>
        <div className="services-grid">
          {portfolioData.services.map((service, index) => (
            <article className="service" key={service.title}>
              <div className="service__meta"><span>{String(index + 1).padStart(2, '0')}</span><span>{service.english}</span></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service__formats">{service.formats}</div>
            </article>
          ))}
        </div>
        <div className="collaboration">
          <p className="collaboration__label">合作的方式<br /><span>HOW WE WORK TOGETHER</span></p>
          {portfolioData.collaboration.map((mode) => (
            <div key={mode.title}><h3>{mode.title}</h3><p>{mode.description}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}
