import calculatorOperation, { generateOperationText, operationsMap, operationsMapData } from './calculatorOperation'

describe('generateOperationText method', () => {
  it ('should return string of value1', () => {
    expect(generateOperationText(6, undefined, undefined, undefined)).toBe('6')
  })

  it ('should return string of value2', () => {
    expect(generateOperationText(undefined, 5, undefined, undefined)).toBe('5')
  })
})

describe('calculatorOperation method', () => {
  const expectedObject = {
    operationText: '1',
    result: undefined,
    currentOperation: undefined,
    calculateValue1: 1,
    calculateValue2: undefined
  }
  it('should return only value1 and operationText', () => {
    expect(calculatorOperation(
      '1',
      'value',
      undefined,
      undefined,
      undefined,
      undefined
    )).toMatchObject(expectedObject)
  })
})

describe('operationsMap method', () => {
  it('on "+" should return sum function', () => {
    expect(operationsMap(operationsMapData, '+')).toBe(operationsMapData['+'])
  })

  it('on "-" should return sub function', () => {
    expect(operationsMap(operationsMapData, '-')).toBe(operationsMapData['-'])
  })

  it('on "/" should return div function', () => {
    expect(operationsMap(operationsMapData, '/')).toBe(operationsMapData['/'])
  })

  it('on "x" should return multi function', () => {
    expect(operationsMap(operationsMapData, 'x')).toBe(operationsMapData['x'])
  })
})
