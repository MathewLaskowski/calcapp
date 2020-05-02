let value1: undefined | number
let value2: undefined | number
let lastButton: undefined | string
let operation: undefined | string

export const calculatorReset = (): void => {
  value1 = undefined
  value2 = undefined
  lastButton = undefined
  operation = undefined
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
    type: string
  ) : {
    operationText: string,
    result: ValuesType
  }
}


const calculatorOperation: calculatorOperationType = (label, type) => {
  let result = undefined

  if (type === 'value') {
    const { calculateValue1, calculateValue2 } = calculateValue(value1, value2, label, lastButton)
    value1 = calculateValue1;
    value2 = calculateValue2;
  }

  lastButton = type

  if (type === 'operation') {
    if (!operation && !value1) {
      return { operationText: '', result }
    } else if (!operation) {
      operation = label
    } else if (operation && value1 && value2 && label === '=') {
      result = operationsMap(operationsMapData, operation)(value1, value2)
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
