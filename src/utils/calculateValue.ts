type ValuesType = number | undefined
type TypeOfValue = undefined | 'integer' | 'float'

type CalculateValueType = {
  (
    calculateData: any,
    label: string,
    lastButton: string | undefined
  ): {
    calculateValue1: ValuesType,
    typeOfValue1: TypeOfValue,
    calculateValue2: ValuesType,
    typeOfValue2: TypeOfValue
  }
}

export const calculateValue: CalculateValueType = (calculateData, label, lastButton) => {
  const { calculateValue1: value1, calculateValue2: value2, typeOfValue1, typeOfValue2 } = calculateData

  let calculateValue1 = value1
  let calculateValue2 = value2

  const checkForUndefined = (value: any) => typeof value !== 'undefined'

  if (!checkForUndefined(calculateValue1) && !checkForUndefined(calculateValue2)) {
    calculateValue1 = parseInt(label)
  } else if (checkForUndefined(calculateValue1) && !checkForUndefined(calculateValue2) && lastButton !== 'operation') {
    if (typeOfValue1 === 'float' && calculateValue1 === 0 && label !== '.') {
      calculateValue1 = parseFloat(`0.${label}`)
    } else {
      calculateValue1 = parseInt(value1 + label)
    }
  } else if (!checkForUndefined(calculateValue2) && checkForUndefined(calculateValue1) && lastButton === 'operation') {
    calculateValue2 = parseInt(label)
  } else {
    calculateValue2 = parseInt(value2 + label)
  }

  return {
    calculateValue1,
    typeOfValue1,
    calculateValue2,
    typeOfValue2
  }
}
