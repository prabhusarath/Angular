import { FoodProjectPage } from './app.po';

describe('food-project App', () => {
  let page: FoodProjectPage;

  beforeEach(() => {
    page = new FoodProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
