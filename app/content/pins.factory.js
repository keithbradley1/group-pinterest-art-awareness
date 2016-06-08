angular.module("app")
  .factory("pinFactory", (firebaseFactory, authFactory) => {
    let currentBoardId = null;

    return {
      setBoardId: boardId => currentBoardId = boardId,
      getPins: () => firebaseFactory.getBoardPins(currentBoardId),

      createPin: (newPin) =>
        firebaseFactory.postPin(Object.assign(newPin, {uid:authFactory.user(), boardid:currentBoardId}))
    };
  });
