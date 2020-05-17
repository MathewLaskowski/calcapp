type ValuesType = number | undefined
type TypeOfValue = undefined | 'integer' | 'float'

type CalculateValueType = {
  (
    value1: ValuesType,
    value2: ValuesType,
    label: string,
    lastButton: string | undefined
  ): {
    calculateValue1: ValuesType,
    typeOfValue1: TypeOfValue,
    calculateValue2: ValuesType,
    typeOfValue2: TypeOfValue
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
  } else {
    calculateValue2 = parseInt(value2 + label)
  }

  return {
    calculateValue1,
    typeOfValue1: undefined,
    calculateValue2,
    typeOfValue2: undefined
  }
}
