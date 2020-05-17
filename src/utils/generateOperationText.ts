import { calculateDataType } from './calculatorOperation'

type ValuesType = number | undefined

type generateOperationTextType = {
  (
    calculatedData: calculateDataType,
    operation: string | undefined,
    result: ValuesType
  ) : string
}

export const generateOperationText: generateOperationTextType = (
  calculatedData,
  operation,
  result
) => {
  const { calculateValue1: value1, calculateValue2: value2, calculateTypeOfValue1, calculateTypeOfValue2 } = calculatedData
  const valueText1 = typeof value1 !== 'undefined' ? value1 === 0 && calculateTypeOfValue1 === 'float' ? '0.' : value1  : ''
  const valueText2 = typeof value2 !== 'undefined' ? value2 === 0 && calculateTypeOfValue2 === 'float' ? '0.' : value2  : ''

  return `${valueText1} ${operation ? operation : ''} ${valueText2} ${result ? `= ${result}` : ''}`.trim()
}
