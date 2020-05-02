
export const calculatorReset = (): void => {
}

type operationsMapDataType = {
  [key: string]: (a: number, b: number) => number
}

export const operationsMapData: operationsMapDataType = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  'x': (a, b) => a * b,
  '/': (a, b) => a / b
}

export const operationsMap = (operationsMapData: operationsMapDataType, operation: string): (a: number, b: number) => number => {
  return operationsMapData[operation]
}

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

type CalculateValueType = {
  (
    value1: ValuesType,
    value2: ValuesType,
    label: string,
    lastButton: string | undefined
  ): {
    calculateValue1: ValuesType,
    calculateValue2: ValuesType
  }
}

export const calculateValue: CalculateValueType = (value1, value2, label, lastButton) => {
  let calculateValue1 = value1
  let calculateValue2 = value2

  if (!calculateValue1 && !calculateValue2) {
    calculateValue1 = parseInt(label)
  } else if (calculateValue1 && !calculateValue2 && lastButton !== 'operation') {
    calculateValue1 = parseInt(value1 + label)
  } else if (!calculateValue2 && calculateValue1 && lastButton === 'operation') {
    calculateValue2 = parseInt(label)
  } else if (calculateValue2 && calculateValue1) {
    calculateValue2 = parseInt(value2 + label)
  }

  return {
    calculateValue1,
    calculateValue2
  }
}

type calculatorOperationType = {
  (
    label: string,
    type: string,
    value1: ValuesType,
    value2: ValuesType,
    lastButton: string | undefined,
    operation: string | undefined
  ) : {
    operationText: string,
    result: ValuesType,
    currentOperation: string | undefined,
    calculateValue1: ValuesType,
    calculateValue2: ValuesType
  }
}


const calculatorOperation: calculatorOperationType = (
  label,
  type,
  value1,
  value2,
  lastButton,
  operation
) => {
  let result = undefined
  let currentOperation = operation
  let calculateData: {
    calculateValue1: ValuesType
    calculateValue2: ValuesType
  } = {
    calculateValue1: value1,
    calculateValue2: value2
  }


  if (type === 'value') {
    calculateData = calculateValue(value1, value2, label, lastButton)
  }

  if (type === 'operation') {
    if (!currentOperation && !value1) {
      return {
        operationText: '',
        result,
        currentOperation,
        ...calculateData
      }
    } else if (!currentOperation) {
      currentOperation = label
    } else if (currentOperation && calculateData.calculateValue1 && calculateData.calculateValue2 && label === '=') {
      result = operationsMap(operationsMapData, currentOperation)(calculateData.calculateValue1, calculateData.calculateValue2)
    }
  }

  const operationText = generateOperationText(
    calculateData.calculateValue1,
    calculateData.calculateValue2,
    currentOperation,
    result
  )

  return {
    operationText,
    result,
    currentOperation,
    ...calculateData
  }

}

export default calculatorOperation
