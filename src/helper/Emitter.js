import EventEmitter from 'events';

class Emitter {
  constructor() {
    this.eventEmitter = new EventEmitter()
  }

  add(key, fn) {
    this.eventEmitter.on(key, fn);
  }

  call(key, params, error) {
    this.eventEmitter.emit(key, params, error);
  }

  remove(key, fn) {
    this.eventEmitter.removeListener(key, fn);
  }

  getEmitter() {
    return this.eventEmitter
  }
}


export default new Emitter()
