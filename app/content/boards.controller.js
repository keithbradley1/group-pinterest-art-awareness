angular.module("app")
  .controller("boardsCtrl", function(boardsFactory, $timeout) {
    const boards = this;

    boardsFactory.setUserId("-K84hddnjx9v");
    boardsFactory.getBoards().then(data => {
      boards.list = data;
      $timeout();
    });
  });
