'use strict';

describe('Controller: WorkordersCtrl', function () {

  // load the controller's module
  beforeEach(module('microWorkApp'));

  var WorkordersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkordersCtrl = $controller('WorkordersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
