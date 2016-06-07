angular.module("app")
  .factory("firebaseFactory", () => {
    const db = firebase.database();
    const pinsRef = db.ref("pins");
    const boardsRef = db.ref("boards");
    const usersRef = db.ref("users");

    return {
      getPin: id => db.ref(`pins/${id}`).once("value").then(snapshot => snapshot.val()),
      getBoardPins: boardid => pinsRef.once("value").then(snapshot => {
        const pins = snapshot.val();
        for(const pid in pins) {
          if(pins[pid].boardid !== boardid) {
            delete pins[pid];
          }
          return pins;
        }
      })
    };
  });
