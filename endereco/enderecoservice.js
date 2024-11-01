angular.module("paginainicial").factory('enderecoApi', function($http,config){
    const baseUrl = `${config.baseURL}/endereco`;
    return{
        buscarEndereco:function(){
            return $http.get(baseUrl)
        },
        salvarEndereco:function(dadosEndereco){
            return $http.post(baseUrl,dadosEndereco)
        },
        apagarEndereco: function(id){
            return $http.delete(`${baseUrl}/${id}`)
        }
    }
})