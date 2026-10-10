import { cleanup, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { App } from './App'

afterEach(cleanup)

describe('App', () => {
  it('shows the personal avatar in the opening section without repeating it in the biography', () => {
    render(<App />)

    const opening = within(screen.getByRole('region', { name: '把一场内容项目，从想法做成现场。' }))
    expect(opening.getByRole('img', { name: /姬忠宽的 3D 潮玩形象/ })).toBeInTheDocument()
    const identity = within(screen.getByRole('group', { name: '姬忠宽个人名片' }))
    expect(identity.queryByRole('img', { name: /姬忠宽的 3D 潮玩形象/ })).not.toBeInTheDocument()
    expect(identity.getByText('姬忠宽')).toBeInTheDocument()
    expect(identity.getByText(/商业影像项目负责人/)).toBeInTheDocument()
  })

  it('renders the primary navigation and contact paths', () => {
    render(<App />)

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByText('把一场内容项目，从想法做成现场。')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /青红厨师2/i })).toBeInTheDocument()
    expect(screen.getAllByText(/vibe coding/i).length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: /查看作品/i })).toHaveAttribute('href', '#projects')
    expect(screen.getAllByRole('link', { name: /联系/i })[0]).toHaveAttribute('href', '#contact')
  })

  it('shows real-work cards and links to the photography albums', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('img[alt*="项目画面"]')).toHaveLength(4)
    expect(container.querySelector('a[href="https://www.pailixiang.com/m/album_ia10113949854.html"]')).toHaveTextContent('摄影作品集一')
    expect(container.querySelector('a[href="https://www.pailixiang.com/m/album_ia10113949854.html"]')).toHaveAttribute(
      'href',
      'https://www.pailixiang.com/m/album_ia10113949854.html',
    )
  })

  it('makes the creator role and working scope explicit', () => {
    const { container } = render(<App />)

    expect(container).toHaveTextContent('从内容判断到落地交付')
    expect(container).toHaveTextContent('品牌内容')
    expect(container).toHaveTextContent('活动现场')
    expect(container).toHaveTextContent('人物与口播')
    expect(container).toHaveTextContent('AI 视觉')
  })
})
