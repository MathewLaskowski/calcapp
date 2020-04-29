let value1: undefined | number
let value2: undefined | number
let lastButton: undefined | string
let operation: undefined | string
let operationText: undefined | string
let result: undefined | number

const calculatorReset = () => {
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

const calculatorOperation = (label: string, type: string) => {

  if (type === 'value') {
    if (!value1 && !value2) {
      value1 = parseInt(label)
      result = undefined
      operationText =  value1.toString()
    } else if (value1 && !value2 && lastButton !== 'operation') {
      value1 = parseInt(value1 + label)
      operationText =  value1.toString()
    } else if (!value2 && value1 && lastButton === 'operation') {
      value2 = parseInt(label)
      operationText =  `${operationText} ${value2}`
    } else if (value2 && value1) {
      value2 = parseInt(value2 + label)
      operationText =  `${operationText}${label}`
    }
  }

  lastButton = type

  if (type === 'operation') {
    if (!operation) {
      operation = label
      operationText = `${operationText} ${operation}`
    } else if (operation && value1 && value2 && label === '=') {
      const method: (a: number, b: number) => number = operationsMap(operation)
      result = method(value1, value2)
      operationText = `${operationText} ${label} ${result}`
      calculatorReset()
    }
  }

  return {
    operationText,
    result
  }

}

export default calculatorOperation
