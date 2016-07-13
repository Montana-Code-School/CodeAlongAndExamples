angular.module("firstApp").controller("mainCtrl", function($scope, mainServ){

$scope.things;
$scope.tools = mainServ.tools;

$scope.getThings = function(){
  mainServ.getServThings()
  .then(function(response){
    $scope.things = response.data;
    console.log($scope.things);
  })
}


});
