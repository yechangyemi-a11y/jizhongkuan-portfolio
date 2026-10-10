import { useEffect, useRef, useState, type CSSProperties } from 'react'
import personalToy from '../assets/jizhongkuan-toy.png'
import atlas from '../assets/jizhongkuan-motion-atlas.png'

// One turn cycle; the back-step section is exactly 5,000ms.
function poseAt(elapsed: number) {
  const t = elapsed % 9250
  if (t < 1050) return { phase: 'drop', frame: 0, flip: false, flash: false }
  if (t < 2250) return { phase: 'photo', frame: t < 1250 ? 0 : 1, flip: false, flash: t >= 1610 && t < 1730 }
  if (t < 3450) return { phase: 'turn', frame: t < 2550 ? 2 : t < 2950 ? 3 : 4, flip: false, flash: false }
  if (t < 8450) {
    const step = Math.floor((t - 3450) / 220) % 4
    return { phase: 'walk', frame: step % 2 ? 6 : 5, flip: step >= 2, flash: false }
  }
  return { phase: 'exit', frame: 6, flip: false, flash: false }
}

export function HeroActor({ paused, reduced, active }: { paused: boolean; reduced: boolean; active: boolean }) {
  const elapsed = useRef(0)
  const [time, setTime] = useState(0)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (paused || reduced || !active) return
    let previous = Date.now()
    const timer = window.setInterval(() => {
      const now = Date.now()
      elapsed.current += now - previous
      previous = now
      setTime(elapsed.current)
    }, 40)
    return () => window.clearInterval(timer)
  }, [paused, reduced, active])
  const pose = reduced ? { phase: 'still', frame: 0, flip: false, flash: false } : poseAt(time)
  const style = {
    '--sprite-x': `${(pose.frame % 4) / 3 * 100}%`,
    '--sprite-y': pose.frame < 4 ? '0%' : '100%',
    '--sprite-flip': pose.flip ? -1 : 1,
    backgroundImage: `url(${atlas})`,
  } as CSSProperties
  return <>
    <div className="hero__actor" role="img" aria-label="姬忠宽的 3D 潮玩形象，持相机拍照与双手稳定器拍摄" data-phase={pose.phase} data-ready={loaded}>
      <img className="hero__avatar-fallback" src={personalToy} alt="" aria-hidden="true" fetchPriority="high" />
      <span className="hero__sprite" style={style} aria-hidden="true" />
      <img className="asset-preload" src={atlas} alt="" aria-hidden="true" onLoad={() => setLoaded(true)} />
    </div>
    <div className="hero__floor" aria-hidden="true" />
    <span className={`hero__flash${pose.flash && active && !paused ? ' is-lit' : ''}`} aria-hidden="true" />
  </>
}
