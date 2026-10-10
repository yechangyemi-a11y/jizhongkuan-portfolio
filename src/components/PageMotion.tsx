import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function PageMotion({ paused }: { paused: boolean }) {
  const progress = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.section-heading, .about__identity, .about__story, .industry-focus, .service, .project-card, .qinghong__intro, .qinghong__stage, .chapter, .capability, .contact__layout')
    if (reduced || paused || typeof IntersectionObserver === 'undefined') {
      elements.forEach(element => element.classList.remove('reveal-pending'))
      return
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' })
    elements.forEach((element, index) => {
      if (element.getBoundingClientRect().top < window.innerHeight) return
      element.style.setProperty('--reveal-delay', `${index % 2 * 70}ms`)
      element.classList.add('reveal-pending')
      observer.observe(element)
    })
    return () => { observer.disconnect(); elements.forEach(element => element.classList.remove('reveal-pending')) }
  }, [reduced, paused])
  useEffect(() => {
    let frame = 0
    const draw = () => {
      const length = document.documentElement.scrollHeight - window.innerHeight
      const amount = length > 0 ? Math.min(1, Math.max(0, window.scrollY / length)) : 0
      if (progress.current) progress.current.style.transform = `scaleX(${amount})`
      frame = 0
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(draw) }
    draw()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule) }
  }, [])
  return <div className="reading-progress" ref={progress} aria-hidden="true" />
}
