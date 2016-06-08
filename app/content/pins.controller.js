angular.module("app")
  .controller("pinsCtrl", function(pinFactory, $timeout) {
    const pins = this;

    pinFactory.getPins().then(data => {
      pins.list = data;
      $timeout();
    });
  });
