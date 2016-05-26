import tape = require('blue-tape');

import EventKit = require('event-kit');

tape('has all classes', (test) => {
  test.plan(3);
  let cd = new EventKit.CompositeDisposable();
  test.true(cd instanceof EventKit.CompositeDisposable);

  let d = new EventKit.Disposable(() => { });
  test.true(d instanceof EventKit.Disposable);

  let e = new EventKit.Emitter();
  test.true(e instanceof EventKit.Emitter);
});
