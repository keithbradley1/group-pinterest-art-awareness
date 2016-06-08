angular.module("app")
  .factory("pinFactory", (firebaseFactory) => {
    let currentBoardId = null;

    return {
      setBoardId: boardId => currentBoardId = boardId,
      getPins: () => firebaseFactory.getBoardPins(currentBoardId),

      createPin: (newPin) => {
        Object.assign(newPin, {boardid:currentBoardId});
        firebaseFactory.postPin(newPin);
      }
    };
  });
