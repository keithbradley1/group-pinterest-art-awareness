angular.module("app")
  .controller("boardsCtrl", function(boardsFactory, pinFactory, $timeout, $location) {
    const boards = this;

    boards.goToBoard = (boardId) => {
      pinFactory.setBoardId(boardId);
      $location.path("/pins");
    };

    boardsFactory.getBoards().then(data => {
      boards.list = data;
      $timeout();
    });

    boards.submit = () =>
      boardsFactory.createBoard(boards.newBoard)
        .then(boardsFactory.getBoards().then(data => {
          boards.list = data;
          boards.newBoard = null;
          $timeout();
        }));
  });
