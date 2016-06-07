angular.module("app")
  .controller("pinsCtrl", function(firebaseFactory, $timeout) {
    const pins = this;

    firebaseFactory.getBoardPins("-K66hzzzyyyy").then(data => {
      pins.list = data;
      $timeout();
    });
  });
