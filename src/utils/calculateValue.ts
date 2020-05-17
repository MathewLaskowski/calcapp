type ValuesType = number | undefined
type TypeOfValue = 'integer' | 'float'

type CalculateValueType = {
  (
    calculateData: any,
    label: string,
    lastButton: string | undefined
  ): {
    calculateValue1: ValuesType,
    calculateTypeOfValue1: TypeOfValue,
    calculateValue2: ValuesType,
    calculateTypeOfValue2: TypeOfValue
  }
}

export const calculateValue: CalculateValueType = (calculateData, label, lastButton) => {
  const {
    calculateValue1: value1,
    calculateValue2: value2,
    calculateTypeOfValue1,
    calculateTypeOfValue2
  } = calculateData

  let calculateValue1 = value1
  let calculateValue2 = value2

  const checkForUndefined = (value: any) => typeof value !== 'undefined'

  if (!checkForUndefined(calculateValue1) && !checkForUndefined(calculateValue2)) {
    calculateValue1 = parseFloat(label)
  } else if (checkForUndefined(calculateValue1) && !checkForUndefined(calculateValue2) && lastButton !== 'operation') {
    if (calculateTypeOfValue1 === 'float' && calculateValue1 === 0 && label !== '.') {
      calculateValue1 = parseFloat(`0.${label}`)
    } else {
      calculateValue1 = parseFloat(value1 + label)
    }
  } else if (!checkForUndefined(calculateValue2) && checkForUndefined(calculateValue1) && lastButton === 'operation') {
    calculateValue2 = parseFloat(label)
  } else {
    if (calculateTypeOfValue2 === 'float' && calculateValue2 === 0 && label !== '.') {
      calculateValue2 = parseFloat(`0.${label}`)
    } else {
      calculateValue2 = parseFloat(value2 + label)
    }
  }

  return {
    calculateValue1,
    calculateTypeOfValue1,
    calculateValue2,
    calculateTypeOfValue2
  }
}
