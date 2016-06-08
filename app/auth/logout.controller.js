angular.module("app")
  .controller("logoutCtrl", function($location) {
    $location.path("/");
  });
