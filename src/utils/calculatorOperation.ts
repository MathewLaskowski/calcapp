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
      if (operation === '+') {
        console.log(value1 + value2)
        result = value1 + value2
        operationText = `${operationText} ${label} ${value1 + value2}`
        calculatorReset()
      } else if (operation === '-') {
        console.log(value1 - value2)
        result = value1 - value2
        operationText = `${operationText} ${label} ${value1 - value2}`
        calculatorReset()
      }
    }
  }

  return {
    operationText,
    result
  }

}

export default calculatorOperation
