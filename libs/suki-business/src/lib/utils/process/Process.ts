import _head from "lodash/head";
import _size from "lodash/size";

class Process {
  handlers: any;

  constructor() {
    this.handlers = [];
  }

  addHandler = (callback: any) => {
    this.handlers.push(callback);
    return this;
  };

  next =
    (nextIndex: number) =>
    (...params: any) => {
      if (nextIndex >= _size(this.handlers)) {
        return undefined;
      }
      const nextHandler = this.handlers[nextIndex];
      return nextHandler(this.next(nextIndex + 1), ...params);
    };

  run = (...params: any[]) => {
    const firstHandler = _head(this.handlers) as any;
    if (!firstHandler) {
      return undefined;
    }
    const nextIndex = 1;
    return firstHandler(this.next(nextIndex), ...params);
  };
}

export default Process;

export { Process };
