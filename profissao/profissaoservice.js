angular.module("paginainicial").factory("profissaoApi",function($http,config){
    const baseUrl = `${config.baseURL}/profissao`;

    return{
        buscarProfissao:function(){
            return $http.get(baseUrl)
        },
        salvarProfissao:function(dadosProfissao){
            return $http.post(baseUrl,dadosProfissao)
        },
        apagarProfissao:function(id){
            return $http.delete(`${baseUrl}/${id}`)
        }
    }
})