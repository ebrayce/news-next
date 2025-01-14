import { getNewsUrl, formatDateTime, capitalizeFirstLetter } from './utils'
import { describe, it, expect } from '@jest/globals'

describe('getNewsUrl', () => {
  it('should generate the correct URL', () => {
    const id = '123'
    const title = 'Test News Title'
    const expectedUrl = '/news/123/test-news-title'
    expect(getNewsUrl(id, title)).toBe(expectedUrl)
  })

  it('should handle titles with special characters', () => {
    const id = '456'
    const title = 'News! Title with Special# Characters'
    const expectedUrl = '/news/456/news-title-with-special-characters'
    expect(getNewsUrl(id, title)).toBe(expectedUrl)
  })
})

describe('formatDateTime', () => {
  it('should format the date and time correctly', () => {
    const date = new Date(
      'Sat Jan 11 2025 16:04:24 GMT+0000 (Coordinated Universal Time)'
    )
    const expectedFormattedDateTime = '11 January 2025 at 16:04'
    expect(formatDateTime(date)).toBe(expectedFormattedDateTime)
  })

  it('should handle different date and time', () => {
    const date = new Date(
      'Mon Feb 15 2021 08:30:00 GMT+0000 (Coordinated Universal Time)'
    )
    const expectedFormattedDateTime = '15 February 2021 at 08:30'
    expect(formatDateTime(date)).toBe(expectedFormattedDateTime)
  })
})

describe('capitalizeFirstLetter', () => {
  it('should capitalize the first letter of a lowercase string', () => {
    const input = 'example'
    const expectedOutput = 'Example'
    expect(capitalizeFirstLetter(input)).toBe(expectedOutput)
  })

  it('should capitalize the first letter of an uppercase string', () => {
    const input = 'Example'
    const expectedOutput = 'Example'
    expect(capitalizeFirstLetter(input)).toBe(expectedOutput)
  })

  it('should handle an empty string', () => {
    const input = ''
    const expectedOutput = ''
    expect(capitalizeFirstLetter(input)).toBe(expectedOutput)
  })

  it('should handle a string with the first character already capitalized', () => {
    const input = 'Example'
    const expectedOutput = 'Example'
    expect(capitalizeFirstLetter(input)).toBe(expectedOutput)
  })

  it('should handle a string with special characters', () => {
    const input = '!example'
    const expectedOutput = '!example'
    expect(capitalizeFirstLetter(input)).toBe(expectedOutput)
  })
})
