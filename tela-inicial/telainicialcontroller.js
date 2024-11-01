angular.module("paginainicial")
.controller("paginaincialctrl",['$scope','pessoaApi',function ($scope,pessoaApi){
    pessoaApi.buscarPessoa().then(function(response){
        $scope.pessoas= response.data;
        console.log(response.data);
    });
}])


