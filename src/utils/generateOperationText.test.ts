import { generateOperationText } from './generateOperationText';

describe('generateOperationText method', () => {
  it ('should return string of value1', () => {
    expect(generateOperationText(6, undefined, undefined, undefined)).toBe('6')
  })

  it ('should return string of value2', () => {
    expect(generateOperationText(undefined, 5, undefined, undefined)).toBe('5')
  })
})
