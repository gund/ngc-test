import { TestService } from './test.service';

export class TestInContextService<T> extends TestService {

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
