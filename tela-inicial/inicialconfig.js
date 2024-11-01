angular.module("paginainicial", ['ngRoute'])
    .config(function($routeProvider) {
    $routeProvider
    .when('/telainicial', {
        templateUrl: 'tela-inicial/telainicial.html',
        controller: 'paginaincialctrl'
    })
    .when('/cadastro',{
        templateUrl:'cadastro/cadastro.html',
        controller: 'cadastroctrl'
    })
    .otherwise({
        redirectTo: '/telainicial'
    });

})