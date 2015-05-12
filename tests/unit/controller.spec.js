'use strict';

describe('Freelance App Contrl', function(){
  var scope, controller;
  beforeEach(module('freelanceApp'));

  beforeEach(inject(function($controller, $rootScope){
    scope = $rootScope.$new();
    controller = $controller('freelanceCtrl', {
      $scope: scope
    });
  }));
  it('should be defined', function($controller) {
    expect(controller).toBeDefined();
  });
});
