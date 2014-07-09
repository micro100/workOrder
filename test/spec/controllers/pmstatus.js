'use strict';

describe('Controller: PmstatusCtrl', function () {

  // load the controller's module
  beforeEach(module('microWorkApp'));

  var PmstatusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PmstatusCtrl = $controller('PmstatusCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
