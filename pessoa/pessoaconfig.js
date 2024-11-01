angular.module("paginainicial").config(function($routeProvider) {
    $routeProvider
    .when("/cadastro",{
        templateUrl:"cadastro/cadastro.html",
        controller:"cadastroctrl",
        resolve:{
            pessoa: function(pessoaApi){
                return pessoaApi.buscarPessoa();
            }
        }
    })
    .otherwise({
        redirectTo: "/cadastro"
    });

});
