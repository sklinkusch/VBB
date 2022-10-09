import React from 'react'
import { createRoot } from 'react-dom/client'
import { act } from '@testing-library/react'
import Product from './Product'

describe('test Product component', () => {
  describe('test main component', () => {
    it('renders without crashing for express', () => {
      act(() => {
        const line = {
          express: false,
          metro: false,
          name: 'Ex',
          night: false,
          product: 'express'
        }
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Product line={line} />)
      })
    })

    it('renders without crashing for regional', () => {
      act(() => {
        const line = {
          express: false,
          metro: false,
          name: 'Ex',
          night: false,
          product: 'regional'
        }
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Product line={line} />)
      })
    })

    it('renders without crashing for suburban', () => {
      act(() => {
        const line = {
          express: false,
          metro: false,
          name: 'Ex',
          night: false,
          product: 'suburban'
        }
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Product line={line} />)
      })
    })

    it('renders without crashing for subway', () => {
      act(() => {
        const line = {
          express: false,
          metro: false,
          name: 'Ex',
          night: false,
          product: 'subway'
        }
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Product line={line} />)
      })
    })

    it('renders without crashing for tram', () => {
      act(() => {
        const line = {
          express: false,
          metro: false,
          name: 'Ex',
          night: false,
          product: 'tram'
        }
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Product line={line} />)
      })
    })

    it('renders without crashing for metro tram', () => {
      act(() => {
        const line = {
          express: false,
          metro: true,
          name: 'Ex',
          night: false,
          product: 'tram'
        }
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Product line={line} />)
      })
    })

    it('renders without crashing for bus', () => {
      act(() => {
        const line = {
          express: false,
          metro: false,
          name: 'Ex',
          night: false,
          product: 'bus'
        }
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Product line={line} />)
      })
    })

    it('renders without crashing for express bus', () => {
      act(() => {
        const line = {
          express: true,
          metro: false,
          name: 'Ex',
          night: false,
          product: 'bus'
        }
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Product line={line} />)
      })
    })

    it('renders without crashing for metro bus', () => {
      act(() => {
        const line = {
          express: false,
          metro: true,
          name: 'Ex',
          night: false,
          product: 'bus'
        }
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Product line={line} />)
      })
    })

    it('renders without crashing for A05', () => {
      act(() => {
        const line = {
          express: false,
          metro: false,
          name: 'A05',
          night: false,
          product: 'bus'
        }
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Product line={line} />)
      })
    })

    it('renders without crashing for night bus', () => {
      act(() => {
        const line = {
          express: false,
          metro: false,
          name: 'Ex',
          night: true,
          product: 'bus'
        }
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Product line={line} />)
      })
    })

    it('renders without crashing for regional', () => {
      act(() => {
        const line = {
          express: false,
          metro: false,
          name: 'Ex',
          night: false,
          product: 'ferry'
        }
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Product line={line} />)
      })
    })

    it('renders without crashing for regional', () => {
      act(() => {
        const line = {
          express: false,
          metro: false,
          name: 'Ex',
          night: false,
          product: 'bla'
        }
        const div = document.createElement('div')
        const root = createRoot(div)
        root.render(<Product line={line} />)
      })
    })
  })
})