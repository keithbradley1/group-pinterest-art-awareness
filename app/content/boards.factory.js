angular.module("app")
  .factory("boardsFactory", firebaseFactory => {
    let currentUserId = "";

    return {
      setUserId: uid => currentUserId = uid,
      getBoards: () => firebaseFactory.getUserBoards(currentUserId),
      listenBoards: listener => firebaseFactory.listenBoards(boards => {
        for(const bid in boards) {
          if(boards[bid].uid !== currentUserId) {
            delete boards[bid];
          }
        }
        listener(boards);
      }),
      removeBoard: boardId => firebaseFactory.deleteUserBoards(boardId),
      createBoard: newBoard =>
        firebaseFactory.postBoard(Object.assign(newBoard, {uid:currentUserId}))
    };
  });
