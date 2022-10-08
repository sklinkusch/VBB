import React from 'react'
import { createRoot } from 'react-dom/client'
import { act, render, screen } from '@testing-library/react'
import Status from './Status'

describe('test Status component', () => {
  it('renders without crashing', () => {
    act(() => {
      const div = document.createElement('div')
      const root = createRoot(div)
      const remarks = [{ type: 'status', text: 'cancelled'}]
      root.render(<Status remarks={remarks} />)
    })
  })

  it('passed text is in the title', async () => {
    const text = 'departure is cancelled'
    const type = 'status'
    const remarks = [{ type, text }]
    render(<Status remarks={remarks} />)
    const span = await screen.queryAllByTitle(text)
    expect(span.length).toBe(1)
  })

  it('passed text is not in the title when no status', async () => {
    const text = 'departure is cancelled'
    const type = 'warning'
    const remarks = [{ type, text }]
    render(<Status remarks={remarks} />)
    const span = await screen.queryAllByTitle(text)
    expect(span.length).toBe(0)
  })
})