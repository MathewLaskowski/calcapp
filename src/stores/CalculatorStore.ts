import { observable, action } from "mobx"

type num = undefined | number
type str = undefined | string
type typeOfValue = 'integer' | 'float'

export interface CalculatorStoreType {
  value1: num
  value2: num
  typeOfValue1: typeOfValue
  typeOfValue2: typeOfValue
  lastButton: str
  operation: str
  setTypeOfValue1: (value: typeOfValue) => void,
  setTypeOfValue2: (value: typeOfValue) => void,
  setValue1: (value: num) => void,
  setValue2: (value: num) => void,
  setLastButton: (value: str) => void,
  setOperation: (value: str) => void
}

export default class CalculatorStore {
  @observable value1: num
  @observable value2: num
  @observable typeOfValue1: typeOfValue = 'integer'
  @observable typeOfValue2: typeOfValue = 'integer'
  @observable lastButton: str
  @observable operation: str

  @action
  setValue1 = (value: num) => {
    this.value1 = value
  }

  @action
  setValue2 = (value: num) => {
    this.value2 = value
  }

  @action
  setTypeOfValue1 = (value: typeOfValue): void => {
    this.typeOfValue1 = value
  }

  @action
  setTypeOfValue2 = (value: typeOfValue): void => {
    this.typeOfValue2 = value
  }

  @action
  setLastButton = (value: str) => {
    this.lastButton = value
  }

  @action
  setOperation = (value: str) => {
    this.operation = value
  }
}
