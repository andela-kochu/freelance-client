'use strict';

describe('Freelance App', function() {

  browser.get('#/anyother');

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });
/*
  describe('Home View', function() {
    beforeEach(function() {
      browser.get('#/home');
    });
    it('should open the landing page', function() {
      expect(browser.getLocationAbsUrl()).toMatch("/home");
    });
  });

  describe(' View', function() {
    beforeEach(function() {
      browser.get('#/');
    });
    it('should open the main palette page', function() {
      expect(browser.getLocationAbsUrl()).toMatch("/");
    });
  });*/
});
