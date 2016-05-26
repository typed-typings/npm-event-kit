import EmitterS = require('./emitter');
import DisposableS = require('./disposable');
import CompositeDisposableS = require('./composite-disposable');

declare namespace EventKit {
  export class Emitter extends EmitterS {}
  export class Disposable extends DisposableS {}
  export class CompositeDisposable extends CompositeDisposableS {}
}
export = EventKit;
