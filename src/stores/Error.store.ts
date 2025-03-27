import { action, makeAutoObservable, observable } from 'mobx';

class ErrorStore {
  currentError = '';

  constructor() {
    makeAutoObservable(this, {
      currentError: observable,
      setCurrentError: action,
    });
  }

  setCurrentError(error: any) {
    this.currentError = error;
  }
}

export default ErrorStore;
