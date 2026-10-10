// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { portfolioData } from './portfolioData'

describe('portfolioData', () => {
  it('keeps Qinghong Chef and AI capability without unverified commercial claims', () => {
    expect(portfolioData.qinghongChef.title).toBe('青红厨师2')
    expect(portfolioData.capabilities.some((item) => item.title === 'AI 制作系统')).toBe(true)

    const serialized = JSON.stringify(portfolioData)
    expect(serialized).not.toMatch(/日薪|报价|预算|客户名称|传播数据/)
  })
})
