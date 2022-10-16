import React from 'react'
import { render } from "@testing-library/react"
import Arrival, { getDelay, getPlanTime, getTime } from './Arrival'

describe('tests on Arrival component', () => {
  describe('tests on main component', () => {
    it('renders without crashing (real time)', () => {
        const remarks = [
          { 
            type: 'bf', 
            code: undefined, 
            summary: undefined, 
            validFrom: undefined, 
            validUntil: undefined, 
            text: undefined 
          }, 
          { 
            type: 'FB',
            code: undefined, 
            summary: undefined, 
            validFrom: undefined, 
            validUntil: undefined, 
            text: undefined 
          }]
        const arr = {
          cancelled: undefined,
          delay: 120,
          direction: 'bla',
          line: {
            express: false,
            metro: false,
            mode: 'string',
            name: 'string',
            night: false,
            product: 'bus',
            type: 'string'
          },
          platform: '2',
          prognosisType: undefined,
          provenance: null,
          remarks: remarks,
          stop: {
            id: '1',
            name: '1'
          },
          tripId: '2',
          when: '2022-10-10T12:00'
        }
        render(<Arrival arr={arr} />)
    })

    it('renders without crashing (cancelled)', () => {
        const remarks = [
          { 
            type: 'bf', 
            code: undefined, 
            summary: undefined, 
            validFrom: undefined, 
            validUntil: undefined, 
            text: undefined 
          }, 
          { 
            type: 'FB',
            code: undefined, 
            summary: undefined, 
            validFrom: undefined, 
            validUntil: undefined, 
            text: undefined 
          }]
        const arr = {
          cancelled: true,
          delay: null,
          direction: 'bla',
          line: {
            express: false,
            metro: false,
            mode: 'string',
            name: 'string',
            night: false,
            product: 'bus',
            type: 'string'
          },
          prognosedPlatform: '2',
          prognosisType: undefined,
          provenance: null,
          remarks: remarks,
          stop: {
            id: '1',
            name: '1'
          },
          tripId: '2'
        }
        render(<Arrival arr={arr} />)
    })

    it('renders without crashing (unknown)', () => {
        const remarks = [
          { 
            type: 'bf', 
            code: undefined, 
            summary: undefined, 
            validFrom: undefined, 
            validUntil: undefined, 
            text: undefined 
          }, 
          { 
            type: 'FB',
            code: undefined, 
            summary: undefined, 
            validFrom: undefined, 
            validUntil: undefined, 
            text: undefined 
          }]
        const arr = {
          cancelled: undefined,
          delay: null,
          direction: 'bla',
          line: {
            express: false,
            metro: false,
            mode: 'string',
            name: 'string',
            night: false,
            product: 'bus',
            type: 'string'
          },
          prognosedPlatform: '2',
          prognosisType: undefined,
          provenance: null,
          remarks: remarks,
          stop: {
            id: '1',
            name: '1'
          },
          tripId: '2',
          when: '2022-10-10T12:00',
        }
        render(<Arrival arr={arr} />)
    })
  })

  describe('test on getDelay', () => {
    it('delay as a number', () => {
      const delay = 120
      const cancelled = undefined
      const result = getDelay(delay, cancelled)
      const expectedResult = 2
      expect(result).toEqual(expectedResult)
    })

    it('delay null, cancelled true', () => {
      const delay = null
      const cancelled = true
      const result = getDelay(delay, cancelled)
      const expectedResult = 'X'
      expect(result).toBe(expectedResult)
    })

    it('delay null, cancelled false', () => {
      const delay = null
      const cancelled = false
      const result = getDelay(delay, cancelled)
      const expectedResult = '?'
      expect(result).toBe(expectedResult)
    })
  })

  describe('tests on getPlanTime', () => {
    it('without going over full hour', () => {
      const realtime = '12:40'
      const delay = 2
      const expectedResult = '12:38'
      const result = getPlanTime(realtime, delay)
      expect(result).toBe(expectedResult)
    })

    it('going to negative minutes', () => {
      const realtime = '00:01'
      const delay = 2
      const expectedResult = '23:59'
      const result = getPlanTime(realtime, delay)
      expect(result).toBe(expectedResult)
    })

    it('going above 60 minutes', () => {
      const realtime = '23:59'
      const delay = -2
      const expectedResult = '00:01'
      const result = getPlanTime(realtime, delay)
      expect(result).toBe(expectedResult)
    })
  })

  describe('tests on getTime', () => {
    it('with a string', () => {
      const timestamp = '2022-10-10T00:45'
      const expectedResult = '00:45'
      const result = getTime(timestamp)
      expect(result).toEqual(expectedResult)
    })

    it('with null', () => {
      const timestamp = null
      const expectedResult = ''
      const result = getTime(timestamp)
      expect(result).toEqual(expectedResult)
    })
  })
})