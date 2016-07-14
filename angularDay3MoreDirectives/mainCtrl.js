angular.module("loginlist").controller("mainCtrl", function($scope, mainServ){
  $scope.changer = false;
  $scope.cathat = false;
  $scope.listofthings = mainServ.list;
  $scope.fakelogin = function(user, pw) {
    $scope.displayname = user;
  };


});
