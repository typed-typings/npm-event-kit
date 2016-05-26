import tape = require('blue-tape');

import EventKit = require('event-kit');

tape('has all classes', (test) => {
  test.plan(3);
  test.true(EventKit.CompositeDisposable);
  test.true(EventKit.Disposable);
  test.true(EventKit.Emitter);
});
