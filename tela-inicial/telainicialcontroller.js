angular.module("paginainicial")
.controller("paginaincialctrl",['$scope','pessoaApi',function ($scope,pessoaApi){
    pessoaApi.buscarPessoa().then(function(response){
        $scope.pessoas= response.data;
    });

    $scope.apagar = function(){
        pessoaApi.apagarPessoa($scope.dadosFormulario).then(
            function(response){}
        ).catch(function(error){}
        )
    }
}])


