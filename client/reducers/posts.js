// A reducer takes in two things

// 1. The Action
// 2. Copy of the current state

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
