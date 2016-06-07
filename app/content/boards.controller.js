angular.module("app")
  .controller("boardsCtrl", function(firebaseFactory, $timeout) {
    const boards = this;

    firebaseFactory.getUserBoards("-K84hddnjx9v").then(data => {
      boards.list = data;
      $timeout();
    });
  });
