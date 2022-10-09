import React from 'react'
import { createRoot } from 'react-dom/client'
import { act } from '@testing-library/react'
import Barrier from './Barrier'

describe('test Barrier component', () => {
  describe('test main component', () => {
    it('renders without crashing for barrier remarks', () => {
      act(() => {
        const code = 'bf'
        const div = document.createElement('div')
        const root = createRoot(div)
        const remarks = [{ code }]
        root.render(<Barrier remarks={remarks} />)
      })
    })

    it('renders without crashing without barrier remarks', () => {
      act(() => {
        const code = 'FB'
        const div = document.createElement('div')
        const root = createRoot(div)
        const remarks = [{ code }]
        root.render(<Barrier remarks={remarks} />)
      })
    })
  })
})