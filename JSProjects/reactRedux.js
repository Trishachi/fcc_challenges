//Notes
// React is a view library that you provide with data, then it renders the view in an efficient, predictable way.
// Redux is a state management framework that you can use to simplify the management of your application's state.
// Typically, in a React Redux app, you create a single Redux store that manages the state of your entire app.
// Your React components subscribe to only the pieces of data in the store that are relevant to their role.
// Then, you dispatch actions directly from React components, which then trigger store updates.



//Codes
// React and Redux - 1: Getting Started with React Redux
// class DisplayMessages extends React.Component {
//   // change code below this line
//   constructor(props){
//     super(props);
//     this.state = {
//       input: "",
//       messages: []
//     }
//   }
//   // change code above this line
//   render() {
//     return <div />
//   }
// };

// React and Redux - 2: Manage State Locally First
// class DisplayMessages extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: '',
//       messages: []
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.submitMessage = this.submitMessage.bind(this);
//   }
//   // add handleChange() and submitMessage() methods here
// handleChange(event){
//   this.setState({input: event.target.value,
//   messages: this.state.messages });
// }
// submitMessage(){
//   this.setState({input: "" ,messages: [...this.state.messages, this.state.input]});
// }
//   render() {
//     return (
//       <div>
//         <h2>Type in a new Message:</h2>
//         { /* render an input, button, and ul here */ }
// <input
//         type='text'
//         onChange={this.handleChange}
//         value={this.state.input}
//       />
//       <button  onClick={this.submitMessage}>Click Me!</button>
//       <ul>
//         {this.state.messages.map((x, i)=>{
//             return <li key={i}>{x}</li>
//           })}
//       </ul>
//         { /* change code above this line */ }
// </div>
//     );
//   }
// };

// React and Redux - 3: Extract State Logic to Redux
// // define ADD, addMessage(), messageReducer(), and store here:
// const ADD = 'ADD';
// const addMessage = message =>{
//   return {
//     type: ADD,
//     message
//   };
// };
// const messageReducer = (initialState = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [...initialState, action.message];
//       break;
//     default:
//       return initialState;
//   }
// };
// const store = Redux.createStore(messageReducer);
