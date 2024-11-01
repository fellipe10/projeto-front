angular.module("paginainicial").controller("cadastroctrl", function($scope,enderecoApi,pessoaApi,bairroApi,profissaoApi) {

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
        $scope.codigoBairro = $scope.selecionado.id;
        $scope.valorIPTU = $scope.selecionado.valorIptu;
    }
    $scope.atualizarInformacoesEndereco = function(){
        $scope.codigoEndereco = $scope.enderecoSelecionado.idEndereco;
        $scope.numeroEndereco = $scope.enderecoSelecionado.rua;
        $scope.complementoEndereco = $scope.enderecoSelecionado.complemento;
        $scope.numeroEndereco = $scope.enderecoSelecionado.numero;
        $scope.bairroEndereco = $scope.enderecoSelecionado.bairro.nome;        
    }
    $scope.atualizarInformacoesProfissao = function(){
        $scope.codigoprofissao = $scope.profissaoSelecionado.idprofissao;
        $scope.salarioprofissao = $scope.profissaoSelecionado.salario;
    }
    

});