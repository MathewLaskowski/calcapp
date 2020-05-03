type ValuesType = number | undefined

type generateOperationTextType = {
  (
    value1: ValuesType,
    value2: ValuesType,
    operation: string | undefined,
    result: ValuesType
  ) : string
}

export const generateOperationText: generateOperationTextType = (value1, value2, operation, result) => {
  return `${value1 ? value1 : ''} ${operation ? operation : ''} ${value2 ? value2 : ''} ${result ? `= ${result}` : ''}`.trim()
}
