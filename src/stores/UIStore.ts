import { observable, action } from 'mobx';

export default class UIStore {
  @observable selectedMenuText: undefined | string

  @action
  setSelectedMenuText = (value: string) => {
    this.selectedMenuText = value
  }
}
