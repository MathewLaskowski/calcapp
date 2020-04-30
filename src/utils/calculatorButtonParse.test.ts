import calculatorButtonParse from './calculatorButtonParse'

const testCasesArr = [
  ['/', 'operation'],
  ['x', 'operation'],
  ['-', 'operation'],
  ['+', 'operation'],
  ['=', 'operation'],
  ['1', 'value'],
  ['2', 'value'],
  ['3', 'value'],
  ['4', 'value'],
  ['5', 'value'],
  ['6', 'value'],
  ['7', 'value'],
  ['8', 'value'],
  ['9', 'value'],
  ['0', 'value'],
  ['.', 'separator']
]

describe('calculatorButtonParse method', () => {
  it.each(testCasesArr)('should on %s return "%s" string', (a, expected) => {
    expect(calculatorButtonParse(a)).toBe(expected);
  });
  it('should return "unknown" string on default case', () => {
    expect(calculatorButtonParse('sdf')).toBe('unknown')
  })
})
