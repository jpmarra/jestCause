var angular = require('angular');
angular.module('hang', [
  require('angular-mocks/ngMock')
]);

describe('eventPageCtrl', function() {
  var scope, $sce, $location, Insert, Users, Events, UserInsert, createController;

  beforeEach(inject(function($rootScope, $controller, _$location_) {
    $location = _$location_;
    scope = $rootScope.new();

    createController = function() {
      return $controller('eventPageCtrl', {
        '$scope':scope
      });
    };
  }));

  it('should have a method that returns one', function() {
    var controller = createController();
    expect(scope.returnOne()).toBe('one');
  })

})








//
// describe('Routing', function(){
//   var $route;
//   beforeEach(module('hang'))
// });
//
// beforeEach(inject(function($injector){
//   $route = $injector.get('$route');
// }));
//
// it('Should have /signup route, template, and controller', function () {
//   expect($route.routes['/signup']).to.be.defined;
//   expect($route.routes['/signup'].controller).to.equal('AuthController');
//   expect($route.routes['/signup'].templateUrl).to.equal('/api/users/signin');
// });
