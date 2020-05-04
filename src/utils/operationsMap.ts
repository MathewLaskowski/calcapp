type operationsMapDataType = {
  [key: string]: (a: number, b: number) => number
}

export const operationsMapData: operationsMapDataType = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  'x': (a, b) => a * b,
  '/': (a, b) => a / b
}

const operationsMap = (operationsMapData: operationsMapDataType, operation: string): (a: number, b: number) => number => {
  return operationsMapData[operation]
}

export default operationsMap
