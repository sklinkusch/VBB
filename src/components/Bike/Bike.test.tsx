import React from 'react'
import { createRoot } from 'react-dom/client'
import { act } from '@testing-library/react'
import Bike from './Bike'

describe('test Bike component', () => {
  describe('test main component', () => {
    it('renders without crashing with a bike remark', () => {
      act(() => {
        const code = 'FB'
        const div = document.createElement('div')
        const root = createRoot(div)
        const remarks = [{ code }]
        root.render(<Bike remarks={remarks} />)
      })
    })

    it('renders without crashing without a bike remark', () => {
      act(() => {
        const code = 'bf'
        const div = document.createElement('div')
        const root = createRoot(div)
        const remarks = [{ code }]
        root.render(<Bike remarks={remarks} />)
      })
    })
  })
})