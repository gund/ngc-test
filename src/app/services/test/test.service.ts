import { Injectable, Injector } from '@angular/core';
import { TestInContextService } from './test-in-context.service';

@Injectable()
export class TestService {

  constructor() { }

  getInContext(context: string) {
    return new TestInContextService<string>(context, this);
  }

}
