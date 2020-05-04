import operationsMap, { operationsMapData } from './operationsMap';

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

describe('operationsMapData object', () => {
  it('check sum method', () => {
    const sum = operationsMapData['+']
    expect(sum(2,3)).toBe(5)
  })

  it('check sub method', () => {
    const sub = operationsMapData['-']
    expect(sub(5,3)).toBe(2)
  })

  it('check multi method', () => {
    const multi = operationsMapData['x']
    expect(multi(5,3)).toBe(15)
  })

  it('check division method', () => {
    const division = operationsMapData['/']
    expect(division(8,4)).toBe(2)
  })
})
