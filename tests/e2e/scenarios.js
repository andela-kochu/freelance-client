'use strict';

describe('Freelance App', function() {

  browser.get('#/anyother');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  describe('Home View', function() {
    beforeEach(function() {
      browser.get('#/home');
    });
    it('should open the landing page', function() {
      expect(browser.getLocationAbsUrl()).toMatch("/home");
    });
    it('should expect the name of link to match CLick', function() {
      expect(element(by.css("#palette")).getText()).toMatch("Click");
    });
  });

  describe('Palette View', function() {
    beforeEach(function() {
      browser.get('#/palette');
    });
    it('should open the main palette page', function() {
      expect(browser.getLocationAbsUrl()).toMatch("/palette");
    });
  });
});
