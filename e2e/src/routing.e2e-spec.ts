import { AppPage } from './app.po';
import { Config, browser } from 'protractor';
import { element, by, By, $, $$, ExpectedConditions } from 'protractor';
import protractor = require('protractor');

describe('Resistance App - Routing Tests', () => {
  var page: AppPage;

  beforeEach(() => {
    browser.get('/');
  });

  it('should load the app with title', function() {
    expect(element(by.tagName('h1')).getText()).toEqual('Welcome to Resistance Calculator!');
  });

  it('should load the component with Select bands sub-title', function() {
    expect(element.all(by.tagName('p')).getText()).toContain('Select bands');
  });

  it('should load the component with Resistance sub-title and default resistance value', function() {
    expect(element.all(by.tagName('p')).getText()).toContain('Resistance: 100 ± 1%');
  });

  it('should load the component with brown color for digit1', function() {
    expect(element(by.id('band1color')).getCssValue('background-color')).toBe('rgb(102, 51, 0)');
  });

  it('should load the component with black color for digit2', function() {
    expect(element(by.id('band2color')).getCssValue('background-color')).toBe('rgb(0, 0, 0)');
  });

  it('should load the component with black color for digit3', function() {
    expect(element(by.id('band3color')).getCssValue('background-color')).toBe('rgb(0, 0, 0)');
  });

  it('should load the component with black color for multiplier', function() {
    expect(element(by.id('band4color')).getCssValue('background-color')).toBe('rgb(0, 0, 0)');
  });

  it('should load the component with brown color for tolerance', function() {
    expect(element(by.id('band5color')).getCssValue('background-color')).toBe('rgb(102, 51, 0)');
  });

  it('should return the correct resistance and color for random bands', function() {
    element(by.css('#digit1')).element(by.cssContainingText('option', '3 orange')).click();
    expect(element.all(by.tagName('p')).getText()).toContain('Resistance: 100 ± 1%');
  });
});
