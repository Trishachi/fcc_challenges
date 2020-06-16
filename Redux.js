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
// const ADD_NOTE = 'ADD_NOTE';
// const notesReducer = (state = 'Initial State', action) => {
//   switch(action.type) {
//     // change code below this line
// case ADD_NOTE:
//   return action.text
//     // change code above this line
//     default:
//       return state;
//   }
// };
// const addNoteText = (note) => {
//   // change code below this line
// return {
//   type: ADD_NOTE,
//   text: note
// }
//   // change code above this line
// };
// const store = Redux.createStore(notesReducer);
// console.log(store.getState());
// store.dispatch(addNoteText('Hello!'));
// console.log(store.getState());

// Redux - 12: Use Middleware to Handle Asynchronous Actions
// const REQUESTING_DATA = 'REQUESTING_DATA'
// const RECEIVED_DATA = 'RECEIVED_DATA'
// const requestingData = () => { return {type: REQUESTING_DATA} }
// const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }
// const handleAsync = () => {
//   return function(dispatch) {
//     // dispatch request action here
//     dispatch(requestingData());
//     setTimeout(function() {
//       let data = {
//         users: ['Jeff', 'William', 'Alice']
//       }
//       // dispatch received data action here
//     dispatch(receivedData(data));
//     }, 2500);
//   }
// };
//
// const defaultState = {
//   fetching: false,
//   users: []
// };
//
// const asyncDataReducer = (state = defaultState, action) => {
//   switch(action.type) {
//     case REQUESTING_DATA:
//       return {
//         fetching: true,
//         users: []
//       }
//     case RECEIVED_DATA:
//       return {
//         fetching: false,
//         users: action.users
//       }
//     default:
//       return state;
//   }
// };
//
// const store = Redux.createStore(
//   asyncDataReducer,
//   Redux.applyMiddleware(ReduxThunk.default)
// );

// Redux - 13: Write a Counter with Redux
// const INCREMENT = 'INCREMENT'; // define a constant for increment action types
// const DECREMENT = 'DECREMENT'; // define a constant for decrement action types
// const counterReducer = (state = 0, action) => {
//   switch(action.type) {
//     case INCREMENT:
//       return state + 1;
//     case DECREMENT:
//       return state - 1;
//     default:
//       return state;
//   }
// }; // define the counter reducer which will increment or decrement the state based on the action it receives
// const incAction = () => {
//   return {
//     type: INCREMENT
//   }
// }; // define an action creator for incrementing
//
// const decAction = () => {
//   return {
//     type: DECREMENT
//   }
// }; // define an action creator for decrementing
// const store = Redux.createStore(counterReducer);; // define the Redux store here, passing in your reducers

// Redux - 14: Never Mutate State
// const ADD_TO_DO = 'ADD_TO_DO';
// // A list of strings representing tasks to do:
// const todos = [
//   'Go to the store',
//   'Clean the house',
//   'Cook dinner',
//   'Learn to code',
// ];
// const immutableReducer = (state = todos, action) => {
//   switch(action.type) {
//     case ADD_TO_DO:
//       // don't mutate state here or the tests will fail
//       return todos.concat(action.todo)
//     default:
//       return state;
//   }
// };
// // an example todo argument would be 'Learn React',
// const addToDo = (todo) => {
//   return {
//     type: ADD_TO_DO,
//     todo
//   }
// }
// const store = Redux.createStore(immutableReducer);

// Redux - 15: Use the Spread Operator on Arrays
// Use the spread operator to return a new copy of state when a to-do is added.
// const immutableReducer = (state = ['Do not mutate state!'], action) => {
//   switch(action.type) {
//     case 'ADD_TO_DO':
//       // don't mutate state here or the tests will fail
//       let myArr = [...state, action.todo];
//       return myArr;
//     default:
//       return state;
//   }
// };
// const addToDo = (todo) => {
//   return {
//     type: 'ADD_TO_DO',
//     todo
//   }
// }
// const store = Redux.createStore(immutableReducer);

// Redux - 16: Remove an Item from an Array
// The reducer and action creator were modified to remove an
// item from an array based on the index of the item.
// Finish writing the reducer so a new state array is returned with the item at the specific index removed.
// const immutableReducer = (state = [0,1,2,3,4,5], action) => {
//   switch(action.type) {
//     case 'REMOVE_ITEM':
//       // don't mutate state here or the tests will fail
//       return [...state.slice(0, action.index),
//         ...state.slice(action.index + 1, state.length)];
//     default:
//       return state;
//   }
// };
// const removeItem = (index) => {
//   return {
//     type: 'REMOVE_ITEM',
//     index
//   }
// }
// const store = Redux.createStore(immutableReducer);

Redux - 17: Copy an Object with Object.assign
