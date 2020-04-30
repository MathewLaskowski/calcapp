import { generateOperationText } from './calculatorOperation'

it ('should return string of value1', () => {
  expect(generateOperationText(6, undefined, undefined, undefined)).toBe('6')
})
