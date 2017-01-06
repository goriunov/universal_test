import { UvWebAppPage } from './app.po';

describe('uv-web-app App', function() {
  let page: UvWebAppPage;

  beforeEach(() => {
    page = new UvWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
