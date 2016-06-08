angular.module("app")
  .factory("pinFactory", (firebaseFactory) => {
    let currentBoardId = null;

    return {
      setBoardId: boardId => currentBoardId = boardId,
      getPins: () => {
        return firebaseFactory.getBoardPins(currentBoardId);
      },

      createPin: (newPin) =>
        firebaseFactory.postPin(Object.assign(newPin, {boardid:currentBoardId})),

      deletePin: id => firebaseFactory.deletePin(id),
      updatePin: (id, data) => db.ref(`pins/${id}`).update(data)
    };
  });
