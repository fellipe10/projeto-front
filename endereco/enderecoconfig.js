angular.module("paginainicial").config(function($routeProvider) {
    $routeProvider
    .when("/cadastro",{
        templateUrl:"cadastro/cadastro.html",
        controller:"cadastroctrl"
    })
    .otherwise({
        redirectTo: "/cadastro"
    });
    $routeProvider.when("/inicial", {
        templateUrl: "inicial/telainicial.html",
        controller: "paginainicialctrl",
    });

});
