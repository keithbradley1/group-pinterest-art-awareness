angular.module("app")
  .config(($routeProvider) => {
    $routeProvider
      .when("/", {
        templateUrl: "app/landing/landing.html"
      })
      .otherwise("/");
  });
