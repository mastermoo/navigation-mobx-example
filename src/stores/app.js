import { observable } from 'mobx';


class AppStore {
  @observable root = undefined; // 'login' / 'after-login'

  constructor() {}

  appInitialized() {
    this.root = 'login';
  }

  login() {
    this.root = 'after-login';
  }
}

export default new AppStore();