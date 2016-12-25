import { Injectable, Injector } from '@angular/core';
import { TestInContextService } from './test-in-context.service';

@Injectable()
export class TestService {

  constructor() { }

  getInContext<T>(context: T) {
    return new TestInContextService<T>(context, this);
  }

}
