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
// const defaultState = {
//   login: false
// };
// const reducer = (state = defaultState, action) => {
//   // change code below this line
//   if (action.type === 'LOGIN') {
//     return { login: true}
//   }
//   // change code above this line
//   return state
// };
// const store = Redux.createStore(reducer);
// const loginAction = () => {
//   return {
//     type: 'LOGIN'
//   }
// };

// Redux - 7: Use a Switch Statement to Handle Multiple Actions
// const defaultState = {
//   authenticated: false
// };
// const authReducer = (state = defaultState, action) => {
//   // change code below this line
// switch(action.type) {
//   case 'LOGIN':
//     return {authenticated: true};
//   case 'LOGOUT':
//         return {authenticated: false};
//   default:
//     return state
// }
//   // change code above this line
// };
// const store = Redux.createStore(authReducer);
// const loginUser = () => {
//   return {
//     type: 'LOGIN'
//   }
// };
// const logoutUser = () => {
//   return {
//     type: 'LOGOUT'
//   }
// };

// Redux - 8: Use const for Action Types
// Declare LOGIN and LOGOUT as const values and assign them
// to the strings 'LOGIN' and 'LOGOUT', respectively.
// Then, edit the authReducer() and the action creators to reference
// these constants instead of string values.
// change code below this line
// const LOGIN = 'LOGIN';
// const LOGOUT = 'LOGOUT';
// // change code above this line
// const defaultState = {
//   authenticated: false
// };
// const authReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case LOGIN:
//       return {
//         authenticated: true
//       }
//     case LOGOUT:
//       return {
//         authenticated: false
//       }
//     default:
//       return state;
//   }
// };
//
// const store = Redux.createStore(authReducer);
// const loginUser = () => {
//   return {
//     type: LOGIN
//   }
// };
// const logoutUser = () => {
//   return {
//     type: LOGOUT
//   }
// };

// Redux - 9: Register a Store Listener
// const ADD = 'ADD';
// const reducer = (state = 0, action) => {
//   switch(action.type) {
//     case ADD:
//       return state + 1;
//     default:
//       return state;
//   }
// };
// const store = Redux.createStore(reducer);
// // global count variable:
// let count = 0;
// // change code below this line
// store.subscribe(() => { count++ });
// // change code above this line
// store.dispatch({type: ADD});
// console.log(count);
// store.dispatch({type: ADD});
// console.log(count);
// store.dispatch({type: ADD});
// console.log(count);

// Redux - 10: Combine Multiple Reducers
// There are counterReducer() and authReducer() functions provided in the code editor,
// along with a Redux store. Finish writing the rootReducer() function using
// the Redux.combineReducers() method.
// Assign counterReducer to a key called count and authReducer to a key called auth.
// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';
// const counterReducer = (state = 0, action) => {
//   switch(action.type) {
//     case INCREMENT:
//       return state + 1;
//     case DECREMENT:
//       return state - 1;
//     default:
//       return state;
//   }
// };
// const LOGIN = 'LOGIN';
// const LOGOUT = 'LOGOUT';
// const authReducer = (state = {authenticated: false}, action) => {
//   switch(action.type) {
//     case LOGIN:
//       return {
//         authenticated: true
//       }
//     case LOGOUT:
//       return {
//         authenticated: false
//       }
//     default:
//       return state;
//   }
// };
// const rootReducer = Redux.combineReducers({
//   count: counterReducer,
//   auth: authReducer
// });
// const store = Redux.createStore(rootReducer);

// Redux - 11: Send Action Data to the Store
const ADD_NOTE = 'ADD_NOTE';
const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // change code below this line
case ADD_NOTE:
  return action.text
    // change code above this line
    default:
      return state;
  }
};
const addNoteText = (note) => {
  // change code below this line
return {
  type: ADD_NOTE,
  text: note
}
  // change code above this line
};
const store = Redux.createStore(notesReducer);
console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
