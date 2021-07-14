import { AppPage } from './app.po';
import { Config, browser, logging } from 'protractor';
import { element, by, $, $$, ExpectedConditions } from 'protractor';
import protractor = require('protractor');

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('cs6261project4 app is running!');
  });
});
