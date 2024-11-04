angular.module("paginainicial").controller("cadastroctrl", function($scope,$http,enderecoApi,pessoaApi,bairroApi,profissaoApi) {

    $scope.dadosFormulario = {
        endereco : {},
        profissao : {},
        bairro : {}
    }
    pessoaApi.buscarPessoa().then(function(response) { 
        $scope.pessoas = response.data; 
    });

    $scope.salvarPessoa = function(dadosPessoa) { 
        pessoaApi.salvarPessoa(dadosPessoa);
    };

    enderecoApi.buscarEndereco().then(function(response){
        $scope.enderecos = response.data;
    });

    $scope.salvarEndereco = function(dadosEndereco){
        enderecoApi.salvarEndereco(dadosEndereco);
    };

    $scope.apagarEndereco = function(id){
        enderecoApi.apagarEndereco(id);
    };

    bairroApi.buscarBairro().then(function(response){
        $scope.bairros = response.data;
    })
    
    $scope.salvarBairro = function(dadosBairro){
        bairroApi.salvarBairro(dadosBairro);
    }

    $scope.apagarBairro = function(id){
        bairroApi.apagarBairro(id);
    }

    profissaoApi.buscarProfissao().then(function(response){
        $scope.profissoes = response.data;
    })

    $scope.salvarProfissao = function(dadosProfissao){
        profissaoApi.salvarProfissao(dadosProfissao)
    }

    $scope.apagarProfissao = function(id){
        profissaoApi.apagarProfissao(id)
    }

    $scope.atualizarInformacoes = function(){
        $scope.dadosFormulario.bairro = $scope.selecionado;
    }
    $scope.atualizarInformacoesEndereco = function(){
        $scope.dadosFormulario.endereco = $scope.enderecoSelecionado;     
    }
    $scope.atualizarInformacoesProfissao = function(){
        $scope.dadosFormulario.profissao = $scope.profissaoSelecionado;
    }


    $scope.salvar = function() {
        pessoaApi.salvarPessoa($scope.dadosFormulario).then(
            function(response){
                console.log(response)
            }
        ).catch(function(error){
            console.log(error)
        })
    }

});