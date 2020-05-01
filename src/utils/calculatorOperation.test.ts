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
  let value1: undefined | number
  let value2: undefined | number
  let lastButton: undefined | string
  let operation: undefined | string
  const expectObject: {
    operationText: string,
    result: undefined | number
  } = {
    operationText: '',
    result: undefined
  }

  beforeEach(() => {
    value1 = undefined
    value2 = undefined
    lastButton = undefined
    operation = undefined
    expectObject.operationText = ''
    expectObject.result = undefined
  })

  it('should return object with operationText and result keys', () => {
    expect(calculatorOperation('=', 'operation')).toStrictEqual(expectObject)
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
