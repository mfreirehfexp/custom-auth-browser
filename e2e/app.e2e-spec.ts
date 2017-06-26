import { BasicProjectPage } from './app.po';

describe('basic-project App', () => {
  let page: BasicProjectPage;

  beforeEach(() => {
    page = new BasicProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
