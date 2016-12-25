import { Injectable, Injector } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }

  getInContext<T>(context: T) {
    return new TestServiceInContext<T>(context, this);
  }

}

export class TestServiceInContext<T> extends TestService {

  constructor(
    private _context: T,
    private _test: TestService
  ) {
    super();
  }

  getContext() {
    return this._context;
  }

}
