import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'
import { ProjectGrid } from './ProjectGrid'

afterEach(() => { cleanup(); vi.useRealTimers() })

describe('hero motion controls', () => {
  it('lets the visitor pause and resume automatic movement', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: '暂停动效' }))
    expect(screen.getByRole('button', { name: '继续动效' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: '继续动效' }))
    expect(screen.getByRole('button', { name: '暂停动效' })).toBeInTheDocument()
  })

  it('keeps the back-step stage for five seconds before restarting', () => {
    vi.useFakeTimers()
    render(<Hero />)
    act(() => { vi.advanceTimersByTime(3500) })
    const avatar = screen.getByRole('img', { name: /姬忠宽的 3D 潮玩形象/ })
    expect(avatar).toHaveAttribute('data-phase', 'walk')
    act(() => { vi.advanceTimersByTime(4900) })
    expect(avatar).toHaveAttribute('data-phase', 'walk')
    act(() => { vi.advanceTimersByTime(150) })
    expect(avatar).toHaveAttribute('data-phase', 'exit')
    act(() => { vi.advanceTimersByTime(850) })
    expect(avatar).toHaveAttribute('data-phase', 'drop')
  })
})

describe('project image viewer', () => {
  it('opens a full-frame image and closes with Escape, restoring focus', () => {
    render(<ProjectGrid />)
    const trigger = screen.getByRole('button', { name: '放大查看电视内容拍摄' })
    fireEvent.click(trigger)
    expect(screen.getByRole('dialog', { name: '电视内容拍摄' })).toBeInTheDocument()
    expect(document.body.style.overflow).toBe('hidden')
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(document.body.style.overflow).not.toBe('hidden')
    expect(trigger).toHaveFocus()
  })

  it('moves between projects without closing the image viewer', () => {
    render(<ProjectGrid />)
    fireEvent.click(screen.getByRole('button', { name: '放大查看电视内容拍摄' }))
    fireEvent.click(screen.getByRole('button', { name: '下一个项目' }))
    expect(screen.getByRole('dialog', { name: '活动现场记录' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: '关闭图片' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
