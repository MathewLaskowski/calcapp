import calculatorOperation from './calculatorOperation'

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

    const results = calculatorOperation(
      '=',
      'operation',
      10,
      10,
      'value',
      '+'
    )
    expect(results).toMatchObject(expectedObject)
    expect(results.result).toBe(20)
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
