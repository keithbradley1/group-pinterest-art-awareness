angular.module("app")
  .factory("firebaseFactory", ($timeout) => {
    const db = firebase.database();
    const pinsRef = db.ref("pins");
    const boardsRef = db.ref("boards");
    const usersRef = db.ref("users");

    return {
      getPin: id => db.ref(`pins/${id}`).once("value").then(snapshot => snapshot.val()),
      listenPins: listener => pinsRef.on("value", snapshot => listener(snapshot.val())),
      getBoardPins: boardid => pinsRef.once("value").then(snapshot => {
        const pins = snapshot.val();
        for(const pid in pins) {
          if(pins[pid].boardid !== boardid) {
            delete pins[pid];
          }
        }

        return pins;
      }),
      postPin: pin => $timeout().then(() => {
        const newKeyId = pinsRef.push().key;
        pinsRef.update({[newKeyId]:pin});
      }),
      deletePin: id => pinsRef.child(id).remove(),
      getBoard: id => db.ref(`boards/${id}`).once("value").then(snapshot => snapshot.val()),
      listenBoards: listener => boardsRef.on("value", snapshot => listener(snapshot.val())),
      getUserBoards: userid => boardsRef.once("value").then(snapshot => {
        const boards = snapshot.val();
        for(const bid in boards) {
          if(boards[bid].uid !== userid) {
            delete boards[bid];
          }
        }
        return boards;
      }),
      postBoard: board => $timeout().then(() => {
        const newKeyId = boardsRef.push().key;
        boardsRef.update({[newKeyId]:board});
      }),
      deleteUserBoards: id => boardsRef.child(id).remove()
    };
  });
