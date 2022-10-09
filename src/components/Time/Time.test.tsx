import React from 'react'
import { createRoot } from 'react-dom/client'
import { act } from '@testing-library/react'
import Time from './Time'

describe('test Time component', () => {
  describe('test main component', () => {
    it('renders without crashing with time strings for plantime', () => {
      act(() => {
        const div = document.createElement('div')
        const root = createRoot(div)
        const time = '12:00'
        root.render(<Time class="plantime" time={time} />)
      })
    })

    it('renders without crashing with time strings for realtime', () => {
      act(() => {
        const div = document.createElement('div')
        const root = createRoot(div)
        const time = '12:00'
        root.render(<Time class="realtime" time={time} />)
      })
    })

    it('renders without crashing with empty strings for plantime', () => {
      act(() => {
        const div = document.createElement('div')
        const root = createRoot(div)
        const time = ''
        root.render(<Time class="plantime" time={time} />)
      })
    })

    it('renders without crashing with empty strings for realtime', () => {
      act(() => {
        const div = document.createElement('div')
        const root = createRoot(div)
        const time = ''
        root.render(<Time class="realtime" time={time} />)
      })
    })
  })
})