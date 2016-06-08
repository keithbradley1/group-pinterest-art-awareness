angular.module("app")
  .factory("boardsFactory", firebaseFactory => {
    let currentUserId = "";

    return {
      setUserId: userId => currentUserId = userId,
      getBoards: () => firebaseFactory.getUserBoards(currentUserId),

      createBoard: (newBoard) =>
        firebaseFactory.postBoard(Object.assign(newBoard, {userId:currentUserId}))
    };
  });
