import { portfolioData } from '../data/portfolioData'

export function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="site-shell about__layout">
        <div className="about__identity">
          <p className="section-index">01 / ABOUT</p>
          <div className="about__profile" role="group" aria-label="姬忠宽个人名片">
            <div className="about__details">
              <p className="about__name">姬忠宽<span>JI ZHONGKUAN</span></p>
              <p className="about__role">摄影师 / 摄像导演<br />商业影像项目负责人</p>
            </div>
          </div>
          <div className="metrics" aria-label="经历数据">
            {portfolioData.metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about__story">
          <p className="section-kicker">从一个镜头，到一场项目</p>
          <h2 id="about-title">有拍摄的判断，<br />也有推进项目的方法。</h2>
          {portfolioData.profile.biography.map((paragraph) => (
            <p className="about__text" key={paragraph}>{paragraph}</p>
          ))}
          <div className="about__focus" aria-label="项目类型">
            {portfolioData.serviceFocus.map((focus) => <span key={focus}>{focus}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
