angular.module("paginainicial").factory("bairroApi", function($http,config){
    const baseUrl =  `${config.baseURL}/bairro`;
    return{
        buscarBairro:function(){
            return $http.get(baseUrl)
        },
        salvarBairro:function(dadosBairro){
            return $http.post(baseUrl,dadosBairro)
        },
        apagarBairro:function(id){
            return $http.delete(`${baseUrl}/${id}`)
        }
    }
});