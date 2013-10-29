window.angular.module('rz.controllers.header', [])
  .controller('HeaderController', ['$scope', 'Global',
    function($scope, Global) {
    	$scope.global = Global;

    	$scope.navbarEntries = [ {
			"title": "Test", "link": "#" 
			}
		];

    }]);