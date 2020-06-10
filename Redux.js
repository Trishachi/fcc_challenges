//Notes
//Redux is a state management framework that can be used with a number of different web technologies, including React.
// The first important principle to understand when learning Redux: the Redux store is the single source of truth
// when it comes to application state.
// You can retrieve the current state held in the Redux store object with the getState() method.
// An action creator is simply a JavaScript function that returns an action.
// The reducer is simply a pure function that takes state and action, then returns new state.




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
// const store = Redux.createStore(
//   (state = 5) => state
// );
// // change code below this line
// let currentState = store.getState();
// console.log(currentState);

// Redux - 3: Define a Redux Action
// Declare an object action and give it a property type set to the string 'LOGIN'.
// Define an action here:
// const action = {
//   type: 'LOGIN'
// }

// Redux - 4: Define an Action Creator
// Define a function named actionCreator() that returns the action object when called.
// const action = {
//   type: 'LOGIN'
// }
// // Define an action creator here:
// function actionCreator(){
//   return action;
// }

// Redux - 5: Dispatch an Action Event
// Dispatch the LOGIN action to the Redux store by calling the dispatch method,
// and pass in the action created by loginAction().
// const store = Redux.createStore(
//   (state = {login: false}) => state
// );
// const loginAction = () => {
//   return {
//     type: 'LOGIN'
//   }
// };
// // Dispatch the action here:
// store.dispatch(loginAction());

// Redux - 6: Handle an Action in the Store
// Fill in the body of the reducer function so that if it receives an action of
// type 'LOGIN' it returns a state object with login set to true. Otherwise, it returns the current state.
const defaultState = {
  login: false
};
const reducer = (state = defaultState, action) => {
  // change code below this line
  if (action.type === 'LOGIN') {
    return { login: true}
  }
  // change code above this line
  return state
};
const store = Redux.createStore(reducer);
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
