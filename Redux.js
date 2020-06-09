//Notes
//Redux is a state management framework that can be used with a number of different web technologies, including React.
// The first important principle to understand when learning Redux: the Redux store is the single source of truth
// when it comes to application state.
You can retrieve the current state held in the Redux store object with the getState() method




//Codes
// Redux - 1: Create a Redux Store
// Declare a store variable and assign it to the createStore() method, passing in the reducer as an argument.
// const reducer = (state = 5) => {
//   return state;
// }
// // Redux methods are available from a Redux object
// // For example: Redux.createStore()
// // Define the store here:
// let store = Redux.createStore(reducer);

// Redux - 2: Get State from the Redux Store
// Use store.getState() to retrieve the state from the store,
// and assign this to a new variable currentState.
const store = Redux.createStore(
  (state = 5) => state
);
// change code below this line
let currentState = store.getState();
console.log(currentState);
