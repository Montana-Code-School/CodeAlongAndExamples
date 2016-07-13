angular.module("firstApp").service("mainServ", function($http){
  this.tools = [{name: "hammer", description: "hits things"}, {name: "spear", description: "stabs things"}, {name: "jons club", description: "bludgeon"}];

  this.getServThings = function(){
    return $http({
      method: "GET",
      url: "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC"
    }).then(function(response){
      return response.data;
    })
  };


});
