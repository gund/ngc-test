import { Component } from '@angular/core';
import { TestService } from './services/test/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  testInCtx = this.testService.getInContext('123');

  constructor(
    public testService: TestService
  ) {
    console.log(this.testInCtx.getContext());
  }
}
