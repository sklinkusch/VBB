import React from 'react'
import { createRoot } from 'react-dom/client'
import { act, render, screen } from '@testing-library/react'
import Warntext, { formatText, formatTime, includeSpecialChars } from './Warntext'

describe('test Warning component', () => {
  describe('main component', () => {
    it('renders without crashing', () => {
      act(() => {
        const text = 'departure is cancelled'
        const summary = 'cancelled'
        const type = 'warning'
        const validFrom = '2022-10-07T00:00'
        const validUntil = '2024-12-31T23:59'
        const div = document.createElement('div')
        const root = createRoot(div)
        const remarks = [{ type, text, summary, validFrom, validUntil }]
        root.render(<Warntext remarks={remarks} />)
      })
    })
  
    it('passed text is in the text', async () => {
      const text = 'departure is cancelled'
      const summary = 'cancelled'
      const type = 'warning'
      const validFrom = '2022-10-07T00:00'
      const validUntil = '2024-12-31T23:59'
      const formattedFrom = '07.10.2022, 00:00'
      const formattedUntil = '31.12.2024, 23:59'
      const formattedText = `${formattedFrom} - ${formattedUntil}:`
      const remarks = [{ type, text, summary, validFrom, validUntil }]
      render(<Warntext remarks={remarks} />)
      const span = await screen.queryAllByText(formattedText)
      expect(span.length).toBe(1)
    })

    it('passed text is in the text when far in the future', async () => {
      const text = 'departure is cancelled'
      const summary = 'cancelled'
      const type = 'warning'
      const validFrom = '2022-10-07T00:00'
      const validUntil = '2049-12-31T23:59'
      const formattedFrom = '07.10.2022, 00:00'
      const formattedText = `${formattedFrom}:`
      const remarks = [{ type, text, summary, validFrom, validUntil }]
      render(<Warntext remarks={remarks} />)
      const span = await screen.queryAllByText(formattedText, { exact: false })
      expect(span.length).toBe(1)
    })
  
    it('passed text is not in the text when no status', async () => {
      const text = 'departure is cancelled'
      const summary = 'cancelled'
      const type = 'status'
      const validFrom = '2022-10-07T00:00'
      const validUntil = '2024-12-31T23:59'
      const remarks = [{ type, text, summary, validFrom, validUntil }]
      render(<Warntext remarks={remarks} />)
      const span = await screen.queryAllByText(text)
      expect(span.length).toBe(0)
    })

    it('passed nothing', async () => {
      const text = ''
      const summary = undefined
      const type = 'warning'
      const validFrom = undefined
      const validUntil = undefined
      const remarks = [{ type, text, summary, validFrom, validUntil }]
      act(() => {
        render(<Warntext remarks={remarks} />)
      })
      const span = await screen.queryAllByText('lala')
      expect(span.length).toBe(0)
    })
  })

  describe('tests on formatTime', () => {
    it('when timestamp is given', () => {
      const timestamp = '2022-12-24T12:00'
      const formattedTimeStamp = '24.12.2022, 12:00'
      const time = formatTime(timestamp)
      expect(time).toBeDefined()
      expect(time).toEqual(formattedTimeStamp)
    })

    it('when no timestamp', () => {
      const timestamp = undefined
      const formattedTimestamp = null
      const time = formatTime(timestamp)
      expect(time).toEqual(formattedTimestamp)
    })
  })

  describe('tests on formatText', () => {
    it('when given a string', () => {
      const arg = 'blabla'
      const text = formatText(arg)
      expect(text).toEqual(arg)
    })

    it('when given null', () => {
      const arg = undefined
      const text = formatText(undefined)
      const formattedText = ''
      expect(text).not.toEqual(arg)
      expect(text).toEqual(formattedText)
    })
  })

  describe('tests on includeSpecialCHars', () => {
    it('when given a string with special chars', () => {
      const string = '&lt;br&gt;'
      const expectedResult = '<br>'
      const result = includeSpecialChars(string)
      expect(result).toEqual(expectedResult)
    })

    it('when given a string without special chars', () => {
      const string = 'click me'
      const expectedResult = 'click me'
      const result = includeSpecialChars(string)
      expect(result).toEqual(expectedResult)
    })
  })
})