angular.module("routerApp", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "home.html"
  }).state("about",{
    url: "/about",
    templateUrl: "about.html"
  }).state("contact", {
    url: "/contact",
    templateUrl: "contact.html"
  });

  $urlRouterProvider.otherwise("/");

});
