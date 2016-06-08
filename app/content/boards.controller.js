angular.module("app")
  .controller("boardsCtrl", function(boardsFactory, pinFactory, $timeout, $location) {
    const boards = this;

    boards.goToBoard = (boardId) => {
      pinFactory.setBoardId(boardId);
      $location.path("/pins");
    };

    boards.deleteBoard = (boardId) => {
      boardsFactory.removeBoard(boardId)
        .then(boardsFactory.getBoards().then(data => {
          boards.list = data;
          $timeout();
        }));
    };

    boards.editBoard = () => {

    };

    boardsFactory.setUserId("Iqfc3hT88iXDOh2l0lpNzkpg5zH2");
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
