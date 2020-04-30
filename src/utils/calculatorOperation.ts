let value1: undefined | number
let value2: undefined | number
let lastButton: undefined | string
let operation: undefined | string

const calculatorReset = (): void => {
  value1 = undefined
  value2 = undefined
  lastButton = undefined
  operation = undefined
}

const operationsMap = (operation: string): (a: number, b: number) => number => {
  const operationsMap: {[key: string]: (a: number, b: number) => number } = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    'x': (a, b) => a * b,
    '/': (a, b) => a / b
  }
  return operationsMap[operation]
}

const generateOperationText =
  (
    value1: number | undefined,
    value2: number | undefined,
    operation: string | undefined,
    result: number | undefined
  ): string => {
  return `${value1 ? value1 : ''} ${operation ? operation : ''} ${value2 ? value2 : ''} ${result ? `= ${result}` : ''}`
}

type ValuesType = number | undefined

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

const calculateValue: CalculateValueType = (value1, value2, label, lastButton) => {
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

const calculatorOperation = (label: string, type: string) => {
  let result = undefined

  if (type === 'value') {
    const { calculateValue1, calculateValue2 } = calculateValue(value1, value2, label, lastButton)
    value1 = calculateValue1;
    value2 = calculateValue2;
  }

  lastButton = type

  if (type === 'operation') {
    if (!operation) {
      operation = label
    } else if (operation && value1 && value2 && label === '=') {
      const method: (a: number, b: number) => number = operationsMap(operation)
      result = method(value1, value2)
    }
  }

  const operationText = generateOperationText(value1, value2, operation, result)

  if (result) calculatorReset()

  return {
    operationText,
    result
  }

}

export default calculatorOperation
