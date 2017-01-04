(function(){

    'use strict';

    angular
        .module("app", [
            "ngRoute"
        ])
        .config(configFunction)

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }

})();
