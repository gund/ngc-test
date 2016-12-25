import { NgcTestPage } from './app.po';

describe('ngc-test App', function() {
  let page: NgcTestPage;

  beforeEach(() => {
    page = new NgcTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
