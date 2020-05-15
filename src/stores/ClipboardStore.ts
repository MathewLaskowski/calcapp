import { observable, action } from "mobx"

type num = undefined | number
type str = undefined | string

export interface CalculatorStoreType {
  value1: num
  value2: num
  lastButton: str
  operation: str
  setValue1: (value: num) => void,
  setValue2: (value: num) => void,
  setLastButton: (value: str) => void,
  setOperation: (value: str) => void
}

export default class CalculatorStore {
  @observable value1: num
  @observable value2: num
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
  setLastButton = (value: str) => {
    this.lastButton = value
  }

  @action
  setOperation = (value: str) => {
    this.operation = value
  }
}
