import { TavantexpensePage } from './app.po';

describe('tavantexpense App', () => {
  let page: TavantexpensePage;

  beforeEach(() => {
    page = new TavantexpensePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
