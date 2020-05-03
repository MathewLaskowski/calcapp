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
  it('should return only value1 and operationText', () => {
    const expectedObject = {
      operationText: '1',
      result: undefined,
      currentOperation: undefined,
      calculateValue1: 1,
      calculateValue2: undefined
    }
    expect(calculatorOperation(
      '1',
      'value',
      undefined,
      undefined,
      undefined,
      undefined
    )).toMatchObject(expectedObject)
  })

  it('should return result on value1 and value2', () => {
    const expectedObject = {
      operationText: '10 + 10 = 20',
      result: 20,
      currentOperation: '+',
      calculateValue1: 10,
      calculateValue2: 10
    }
    expect(calculatorOperation(
      '=',
      'operation',
      10,
      10,
      'value',
      '+'
    )).toMatchObject(expectedObject)
  })

  it('should set operation after value1', () => {
    const expectedObject = {
      operationText: '10 +',
      result: undefined,
      currentOperation: '+',
      calculateValue1: 10,
      calculateValue2: undefined
    }
    expect(calculatorOperation(
      '+',
      'operation',
      10,
      undefined,
      'value',
      undefined
    )).toMatchObject(expectedObject)
  })

  it('should return default object', () => {
    const expectedObject = {
      operationText: '',
      result: undefined,
      currentOperation: undefined,
      calculateValue1: undefined,
      calculateValue2: undefined
    }
    expect(calculatorOperation(
      '+',
      'operation',
      undefined,
      undefined,
      'value',
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
