angular.module("app")
  .factory("boardsFactory", firebaseFactory => {
    let currentUserId = "";

    return {
      setUserId: userId => currentUserId = userId,
      getBoards: () => firebaseFactory.getUserBoards(currentUserId),
      removeBoard: boardId => firebaseFactory.deleteUserBoards(boardId),
      createBoard: newBoard =>
        firebaseFactory.postBoard(Object.assign(newBoard, {userid:currentUserId}))
    };
  });
