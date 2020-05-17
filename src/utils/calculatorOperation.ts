import { calculateValue } from './calculateValue';
import { generateOperationText } from './generateOperationText';
import operationsMap, { operationsMapData } from './operationsMap';

type ValuesType = number | undefined
type TypeOfValue = 'integer' | 'float'

export type calculateDataType = {
  calculateValue1: ValuesType,
  calculateTypeOfValue1: TypeOfValue
  calculateValue2: ValuesType
  calculateTypeOfValue2: TypeOfValue
}

type calculatorOperationType = {
  (
    label: string,
    type: string,
    value1: ValuesType,
    value2: ValuesType,
    typeOfValue1: TypeOfValue,
    typeOfValue2: TypeOfValue,
    lastButton: string | undefined,
    operation: string | undefined
  ) : {
    operationText: string,
    result: ValuesType,
    currentOperation: string | undefined,
    calculateValue1: ValuesType,
    calculateValue2: ValuesType,
    calculateTypeOfValue1: TypeOfValue,
    calculateTypeOfValue2: TypeOfValue
  }
}


const calculatorOperation: calculatorOperationType = (
  label,
  type,
  value1,
  value2,
  typeOfValue1,
  typeOfValue2,
  lastButton,
  operation
) => {
  let result = undefined
  let currentOperation = operation
  let calculateData: calculateDataType = {
    calculateValue1: value1,
    calculateTypeOfValue1: typeOfValue1,
    calculateValue2: value2,
    calculateTypeOfValue2: typeOfValue2
  }

  if (type === 'separator') {
    const { calculateValue1, calculateValue2 } = calculateData
    if (!calculateValue1 && !calculateValue2) {
      calculateData.calculateValue1 = 0
      calculateData.calculateTypeOfValue1 = 'float'
    } else if (calculateValue1 && !calculateValue2) {
      calculateData.calculateValue2 = 0
      calculateData.calculateTypeOfValue2 = 'float'
    }
  }

  if (type === 'value' || type === 'separator') {
    calculateData = calculateValue(calculateData, label, lastButton)
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
    calculateData,
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
