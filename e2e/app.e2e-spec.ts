import { ManufactuerGatewayPage } from './app.po';

describe('manufactuer-gateway App', () => {
  let page: ManufactuerGatewayPage;

  beforeEach(() => {
    page = new ManufactuerGatewayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
