import { AppPage } from './app.po';
import { Config, browser } from 'protractor';
import { element, by, By, $, $$, ExpectedConditions } from 'protractor';
import protractor = require('protractor');

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(element(by.tagName('h1')).getText()).toEqual('Welcome to Resistance Calculator!');
  });
});
