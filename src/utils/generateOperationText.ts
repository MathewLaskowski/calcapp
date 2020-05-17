type ValuesType = number | undefined

type generateOperationTextType = {
  (
    calculatedData: any,
    operation: string | undefined,
    result: ValuesType
  ) : string
}

export const generateOperationText: generateOperationTextType = (
  calculatedData,
  operation,
  result
) => {
  const { calculateValue1: value1, calculateValue2: value2 } = calculatedData
  return `${typeof value1 !== 'undefined' ? value1 : ''} ${operation ? operation : ''} ${value2 ? value2 : ''} ${result ? `= ${result}` : ''}`.trim()
}
