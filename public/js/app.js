window.app = angular.module('revuz', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ngRoute', 'rz.controllers', 'rz.directives', 'rz.services']);

// bundling dependencies
window.angular.module('rz.controllers', ['rz.controllers.header','rz.controllers.index']);
window.angular.module('rz.services', ['rz.services.global']);