angular.module("paginainicial").factory("pessoaApi", function($http,config){
    const baseUrl = `${config.baseURL}/pessoa`;
    return{
        buscarPessoa: function(){
        return $http.get(baseUrl);
        },

        salvarPessoa : function(dadosPessoa) {
            console.log("dadosPessoa",dadosPessoa)
        return $http.post(baseUrl, dadosPessoa); 
        },

        apagarPessoa : function(id){
            return $http.delete(`${baseUrl}/${id}`)
        }
    }


})