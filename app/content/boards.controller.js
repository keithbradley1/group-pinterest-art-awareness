angular.module("app")
  .controller("boardsCtrl", function(boardsFactory, pinFactory, $timeout, $location) {
    const boards = this;

    boards.goToBoard = (boardId) => {
      pinFactory.setBoardId(boardId);
      $location.path("/pins");
    };

    boardsFactory.setUserId("-K84hddnjx9v");
    boardsFactory.getBoards().then(data => {
      boards.list = data;
      $timeout();
    });
  });
