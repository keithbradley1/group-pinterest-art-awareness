angular.module("app")
  .controller("pinsCtrl", function(pinFactory, $timeout) {
    const pins = this;

    pinFactory.setBoardId("-K66hzzzyyyy");
    pinFactory.getPins().then(data => {
      pins.list = data;
      $timeout();
    });
    pinFactory.submit = () => {
      pinFactory.create(pins.newPin);
    };
  });
