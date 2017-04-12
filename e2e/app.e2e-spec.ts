import { CountriesCapitalsPage } from './app.po';

describe('countries-capitals App', function() {
  let page: CountriesCapitalsPage;

  beforeEach(() => {
    page = new CountriesCapitalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
