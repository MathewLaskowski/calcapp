import { calculateValue } from './calculateValue';

describe('calculateValue method', () => {
  it('when value1 and value2 are undefined create value1', () => {
    const expectObject = {
      calculateValue1: 1,
      calculateValue2: undefined
    }

    const result = calculateValue(undefined, undefined, '1', undefined)
    expect(result).toMatchObject(expectObject)
  })

  it('for value1, value2 and operation value update value2', () => {
    const expectObject = {
      calculateValue1: 10,
      calculateValue2: 28
    }

    expect(calculateValue(10, 2, '8', 'value'))
      .toMatchObject(expectObject)
  })

  it('for value1 and lastButton operation create value2', () => {
    const expectObject = {
      calculateValue1: 10,
      calculateValue2: 2
    }

    expect(calculateValue(10, undefined, '2', 'operation'))
      .toMatchObject(expectObject)
  })

  it('for value1 and lastButton value update value1', () => {
    const expectObject = {
      calculateValue1: 10,
      calculateValue2: undefined
    }

    expect(calculateValue(1, undefined, '0', 'value'))
      .toMatchObject(expectObject)
  })
})
