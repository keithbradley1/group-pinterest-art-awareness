angular.module("app")
  .factory("pinFactory", (firebaseFactory) => {
    let currentBoardId = null;

    return {
      setBoardId: boardId => currentBoardId = boardId,
      getPins: () => {
        console.log(currentBoardId)
        return firebaseFactory.getBoardPins(currentBoardId)
      },

      createPin: (newPin) =>
        firebaseFactory.postPin(Object.assign(newPin, {boardid:currentBoardId}))
    };
  });
