import { portfolioData } from '../data/portfolioData'

export function Contact() {
  const { contact } = portfolioData
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="site-shell contact__layout">
        <p className="section-index">06 / CONTACT</p>
        <div>
          <p className="section-kicker">有项目，聊聊怎么把它做出来</p>
          <div className="contact__display" aria-hidden="true">LET’S MAKE<br /><span>IT HAPPEN.</span></div>
          <h2 id="contact-title">让下一个现场<br />从一次对话开始。</h2>
          <p className="contact__brief">可以聊拍摄、摄影、剪辑，也可以聊完整的内容项目。告诉我内容用途、拍摄时间、地点与交付需求，我们一起确定合适的制作方式。</p>
          <div className="contact__links">
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>
        <p className="contact__location">{contact.location}<br />商业影像 / AI 制作 / 项目执行</p>
      </div>
    </section>
  )
}
