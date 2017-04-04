// A reducer takes in two things

// 1. The Action
// 2. Copy of the current state

function comments(state = [], action) {
  console.log(state, action);
  return state;
}

export default comments;
