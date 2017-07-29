import { AngularInputsOutputsPage } from './app.po';

describe('angular-inputs-outputs App', () => {
  let page: AngularInputsOutputsPage;

  beforeEach(() => {
    page = new AngularInputsOutputsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
