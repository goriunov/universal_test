import { TestFooPage } from './app.po';

describe('test-foo App', function() {
  let page: TestFooPage;

  beforeEach(() => {
    page = new TestFooPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
