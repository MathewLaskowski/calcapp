import { calculateValue } from './calculateValue';
import { generateOperationText } from './generateOperationText';
import operationsMap, { operationsMapData } from './operationsMap';

type ValuesType = number | undefined
type TypeOfValue = undefined | 'integer' | 'float'

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
    calculateValue1: ValuesType,
    typeOfValue1: TypeOfValue
    calculateValue2: ValuesType
    typeOfValue2: TypeOfValue
  } = {
    calculateValue1: value1,
    typeOfValue1: 'integer',
    calculateValue2: value2,
    typeOfValue2: 'integer'
  }

  if (type === 'separator') {
    const { calculateValue1, calculateValue2 } = calculateData
    if (!calculateValue1 && !calculateValue2) {
      calculateData.calculateValue1 = 0
      calculateData.typeOfValue1 = 'float'
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
