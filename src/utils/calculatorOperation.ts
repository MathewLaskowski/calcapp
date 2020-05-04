import { calculateValue } from './calculateValue';
import { generateOperationText } from './generateOperationText';
import operationsMap, { operationsMapData } from './operationsMap';

type ValuesType = number | undefined

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
    } else if (currentOperation && calculateData.calculateValue1 && calculateData.calculateValue2 && label === '=') {
      result = operationsMap(operationsMapData, currentOperation)(calculateData.calculateValue1, calculateData.calculateValue2)
    } else {
      currentOperation = label
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
