
angular.module('yourFace', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', 
	function ($routeProvider, $locationProvider) {
          //$locationProvider.html5Mode(true);
          //$locationProvider.hashPrefix('!');
	
	$routeProvider
	.when('/', {
		templateUrl : 'paginas/login.html',
		controller  : 'loginCtrl'
	})
	.when('/home', {
		templateUrl : 'paginas/home.html',
		controller  : 'homeCtrl'
	})
	.otherwise({redirectTo: '/'});
}]);