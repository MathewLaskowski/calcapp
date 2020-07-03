import { observable, action } from 'mobx';

export interface UIStoreType {
  selectedMenuText: undefined | string
}

export default class UIStore {
  @observable selectedMenuText: undefined | string = 'Calculator'

  @action
  setSelectedMenuText = (value: string) => {
    this.selectedMenuText = value
  }
}
