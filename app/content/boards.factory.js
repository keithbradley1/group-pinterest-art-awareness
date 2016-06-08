angular.module("app")
  .factory("boardsFactory", firebaseFactory => {
    let currentUserId = "";

    return {
      setUserId: uid => currentUserId = uid,
      getBoards: () => firebaseFactory.getUserBoards(currentUserId),
      removeBoard: boardId => firebaseFactory.deleteUserBoards(boardId),
      createBoard: newBoard =>
        firebaseFactory.postBoard(Object.assign(newBoard, {uid:currentUserId}))
    };
  });
