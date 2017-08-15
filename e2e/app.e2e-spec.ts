import { SearchusavePage } from './app.po';

describe('searchusave App', () => {
  let page: SearchusavePage;

  beforeEach(() => {
    page = new SearchusavePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
