declare namespace EventKit {
  class Emitter {
    clear(): void;
    dispose(): void;
    on(eventName: string, handler: (value: any) => void): Disposable;
    preempt(eventName: string, handler: (value: any) => void): Disposable;
    emit(eventName: string, value: any): void;
  }

  class Disposable {
    static isDisposable(object: Object): boolean;
    constructor(disposalAction: Function);
    dispose(): void;
  }

  class CompositeDisposable {
    constructor(...disposables: { dispose: () => any }[]);
    dispose(): void;
    add(...disposables: { dispose: () => any }[]): void;
    remove(disposable: { dispose: () => any }): void;
    clear(): void;
  }

  interface EventCallback {
    (event: any): void;
  }

  interface EventHandler {
    (callback: () => void): Disposable;
  }
}

export = EventKit;
