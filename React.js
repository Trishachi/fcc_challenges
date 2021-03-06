//Notes
//One important thing to know about nested JSX is that it must return a single element.
//This one parent element would wrap all of the other levels of nested elements.
//comments = {/*  */}
//We can render JSX directly to the HTML DOM using React's rendering API known as ReactDOM.
//Syntax - ReactDOM.render(componentToRender, targetNode)
//ReactDOM.render() must be called after the JSX element declarations, just like how you must declare variables before using them.

//HTML Vs JSX
//One key difference in JSX is that you can no longer use the word class to define HTML classes.
//Use className instead
//Any JSX element can be written with a self-closing tag, and every element must be closed

//Naming convention -
//All HTML attributes and event references in JSX become camelCase.
//onclick == onClick; onchange == onChange;

//Components
//There are two ways to create a React component.
//The first way is to use a JavaScript function. Defining a component in this way creates a stateless functional component.
//A stateless component receives and renders data, but does not manage or track changes to that data
//The other way to define a React component is with the ES6 class syntax.
 // A typical React component is an ES6 class which extends React.Component. It has a render method that returns HTML (from JSX) or null.

//Default props
//unless you specify otherwise. React assigns default props if props are undefined, but if you pass null as the value for a prop, it will remain null.

//React Inline Styles
//JSX elements use the style attribute, but because of the way JSX is transpiled, you can't set the value to a string. Instead, you set it equal to a JavaScript object
// All property value length units (like height, width, and fontSize) are assumed to be in px unless otherwise specified.
// If you want to use em, for example, you wrap the value and the units in quotes, like {fontSize: "4em"}.
// Other than the length values that default to px, all other property values should be wrapped in quotes.

//Codes
// React -1: Create a Simple JSX Element
//Instructions: The current code uses JSX to assign a div element to the constant JSX.
//Replace the div with an h1 element and add the text Hello JSX! inside it.

// const JSX = <h1>Hello JSX!</h1>;

// React-2: Create a Complex JSX Element
//Define a new constant JSX that renders a div which contains the following elements in order:
// An h1, a p, and an unordered list that contains three li items.
// You can include any text you want within each element.
// const JSX = <div>
//               <h1>Title</h1>
//               <p>Paragraph</p>
//               <ul>
//                 <li>Item 1</li>
//                 <li>Item 1</li>
//                 <li>Item 1</li>
//               </ul>
//             </div>;

// React-3: Add Comments in JSX
//Add a comment somewhere within the provided div element, without modifying the existing h1 or p elements.
// const JSX = (
//   <div>
//     <h1>This is a block of JSX</h1>
//     {/* This is a comment */}
//     <p>Here's a subtitle</p>
//   </div>
// );

// React-4: Render HTML Elements to the DOM
//The code editor has a simple JSX component.
//Use the ReactDOM.render() method to render this component to the page.
//You can pass defined JSX elements directly in as the first argument and use document.getElementById() to select the DOM node to render them to.
//There is a div with id='challenge-node' available for you to use. Make sure you don't change the JSX constant.
// const JSX = (
//   <div>
//     <h1>Hello World</h1>
//     <p>Lets render this to the DOM</p>
//   </div>
// );
// // change code below this line
// ReactDOM.render(JSX, document.getElementById('challenge-node'));

// React-5: Define an HTML Class in JSX
// Apply a class of myDiv to the div provided in the JSX code.
// const JSX = (
//   <div className="myDiv">
//     <h1>Add a class to this div</h1>
//   </div>
// );

// React-6: Learn About Self-Closing JSX Tags
//Fix the errors in the code editor so that it is valid JSX and successfully transpiles.
//Make sure you don't change any of the content -
//you only need to close tags where they are needed.
// const JSX = (
//   <div>
//     <h2>Welcome to React!</h2> <br />
//     <p>Be sure to close all tags!</p>
//     <hr />
//   </div>
// );

// React-7: Create a Stateless Functional Component
//The code editor has a function called MyComponent.
//Complete this function so it returns a single div element which contains some string of text.
// const MyComponent = function() {
//   // change code below this line
//     return (
//       <div>Hello World!</div>
//     );
//   // change code above this line
// }

// React-8: Create a React Component
//MyComponent is defined in the code editor using class syntax.
//Finish writing the render method so it returns a div element that contains an h1 with the text Hello React!.
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     // change code below this line
//     return(
//       <div>
//         <h1>Hello React!</h1>
//       </div>
//     );
//     // change code above this line
//   }
// };

// React-9: Create a Component with Composition
//In the code editor, there is a simple functional component called
//ChildComponent and a React component called ParentComponent.
//Compose the two together by rendering the ChildComponent within the ParentComponent.
//Make sure to close the ChildComponent tag with a forward slash.
// const ChildComponent = () => {
//   return (
//     <div>
//       <p>I am the child</p>
//     </div>
//   );
// };
//
// class ParentComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>I am the parent</h1>
//         { /* change code below this line */ }
//         <ChildComponent />
//         { /* change code above this line */ }
//       </div>
//     );
//   }
// };

// React-10: Use React to Render Nested Components
//There are two functional components defined in the code editor, called TypesOfFruit and Fruits.
//Take the TypesOfFruit component and compose it, or nest it, within the Fruits component.
//Then take the Fruits component and nest it within the TypesOfFood component.
// const TypesOfFruit = () => {
//   return (
//     <div>
//       <h2>Fruits:</h2>
//       <ul>
//         <li>Apples</li>
//         <li>Blueberries</li>
//         <li>Strawberries</li>
//         <li>Bananas</li>
//       </ul>
//     </div>
//   );
// };
//
// const Fruits = () => {
//   return (
//     <div>
//       { /* change code below this line */ }
//       <TypesOfFruit />
//       { /* change code above this line */ }
//     </div>
//   );
// };
//
// class TypesOfFood extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Types of Food:</h1>
//         { /* change code below this line */ }
//         <Fruits />
//         { /* change code above this line */ }
//       </div>
//     );
//   }
// };

// React - 11: Compose React Components
//Nest two components inside of Fruits — first NonCitrus, and then Citrus. Both of these components are provided for you in the background. Next, nest the Fruits class component into the TypesOfFood component, below the h1 header and above Vegetables.
//The result should be a series of nested components, which uses two different component types.
// class Fruits extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h2>Fruits:</h2>
//         { /* change code below this line */ }
//           <NonCitrus />
//           <Citrus />
//          { /* change code above this line */ }
//       </div>
//     );
//   }
// };
//
// class TypesOfFood extends React.Component {
//   constructor(props) {
//      super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Types of Food:</h1>
//         { /* change code below this line */ }
//         <Fruits />
//         { /* change code above this line */ }
//         <Vegetables />
//       </div>
//     );
//   }
// };

// React-12: Render a Class Component to the DOM
//oth the Fruits and Vegetables components are defined for you behind the scenes.
//Render both components as children of the TypesOfFood component, then render TypesOfFood to the DOM.
//There is a div with id='challenge-node' available for you to use
// class TypesOfFood extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Types of Food:</h1>
//         {/* change code below this line */}
//         <Fruits />
//         <Vegetables />
//         {/* change code above this line */}
//       </div>
//     );
//   }
// };
// // change code below this line
// ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));

// React - 13: Write a React Component from Scratch
//Define a class MyComponent that extends React.Component.
//Its render method should return a div that contains an h1 tag with the text:
//My First React Component! in it. Use this text exactly, the case and punctuation matter.
//Make sure to call the constructor for your component, too.
// Render this component to the DOM using ReactDOM.render().
 // There is a div with id='challenge-node' available for you to use
 // class MyComponent extends React.Component {
 //   constructor(props){
 //     super(props)
 //   }
 //   render(){
 //     return (
 //       <div>
 //          <h1>My First React Component!</h1>
 //        </div>
 //      );
 //   }
 // };
 //
 // ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));

 // React - 14: Pass Props to a Stateless Functional Component
 //There are Calendar and CurrentDate components in the code editor.
 // When rendering CurrentDate from the Calendar component, pass in a property of date assigned to the current date from JavaScript's Date object.
 //Then access this prop in the CurrentDate component, showing its value within the p tags.
 // Note that for prop values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance date={Date()}.
//  const CurrentDate = (props) => {
//   return (
//     <div>
//       { /* change code below this line */ }
//       <p>The current date is: {props.date} </p>
//       { /* change code above this line */ }
//     </div>
//   );
// };
// class Calendar extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h3>What date is it?</h3>
//         { /* change code below this line */ }
//         <CurrentDate date={Date()} />
//         { /* change code above this line */ }
//       </div>
//     );
//   }
// };

// React - 15: Pass an Array as Props
//There are List and ToDo components in the code editor.
//When rendering each List from the ToDo component,
//pass in a tasks property assigned to an array of to-do tasks, for example ["walk dog", "workout"].
//Then access this tasks array in the List component, showing its value within the p element.
//Use join(", ") to display the props.tasksarray in the p element as a comma separated list.
//Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks.
// const List= (props) => {
//   { /* change code below this line */ }
//   return <p>{props.tasks.join(', ')}</p>
//   { /* change code above this line */ }
// };
//
// class ToDo extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>To Do Lists</h1>
//         <h2>Today</h2>
//         { /* change code below this line */ }
//         <List tasks={["Study", "Walk", "Research"]}/>
//         <h2>Tomorrow</h2>
//         <List tasks={["Read", "Code", "Walk-out"]}/>
//         { /* change code above this line */ }
//       </div>
//     );
//   }
// };

// React - 16: Use Default Props
//The code editor shows a ShoppingCart component.
//Define default props on this component which specify a prop items with a value of 0.
// const ShoppingCart = (props) => {
//   return (
//     <div>
//       <h1>Shopping Cart Component</h1>
//     </div>
//   )
// };
// // change code below this line
// ShoppingCart.defaultProps = { items: 0 };

// React - 17: Override Default Props
//The ShoppingCart component now renders a child component Items. This Items component has a default prop quantity set to the integer 0.
//Override the default prop by passing in a value of 10 for quantity.
// const Items = (props) => {
//   return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
// }
//
// Items.defaultProps = {
//   quantity: 0
// }
//
// class ShoppingCart extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     { /* change code below this line */ }
//     return <Items quantity={10} />
//     { /* change code above this line */ }
//   }
// };

// React - 18: Use PropTypes to Define the Props You Expect
// Define propTypes for the Items component to require quantity as a prop and verify that it is of type number.
// const Items = (props) => {
//   return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
// };
//
// // change code below this line
// Items.propTypes = {
//   quantity: PropTypes.number.isRequired
// };
// // change code above this line
//
// Items.defaultProps = {
//   quantity: 0
// };
//
// class ShoppingCart extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <Items />
//   }
// };

// React - 19: Access Props Using this.props
// Render an instance of the ReturnTempPassword component in
// the parent component ResetPassword. Here, give ReturnTempPassword a prop of tempPassword and assign it a value of a string that is at least 8 characters long.
// Within the child, ReturnTempPassword, access the tempPassword prop within the strong tags to make sure the user sees the temporary password.
// class ReturnTempPassword extends React.Component {
//   constructor(props) {
//     super(props);
//
//   }
//   render() {
//     return (
//         <div>
//             { /* change code below this line */ }
//             <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
//             { /* change code above this line */ }
//         </div>
//     );
//   }
// };
//
// class ResetPassword extends React.Component {
//   constructor(props) {
//     super(props);
//
//   }
//   render() {
//     return (
//         <div>
//           <h2>Reset Password</h2>
//           <h3>We've generated a new temporary password for you.</h3>
//           <h3>Please reset this password from your account settings ASAP.</h3>
//           { /* change code below this line */ }
//             <ReturnTempPassword tempPassword="Chisombili" />
//           { /* change code above this line */ }
//         </div>
//     );
//   }
// };
// React - 20: Review Using Props with Stateless Functional Components
//The code editor has a CampSite component that renders a Camper component as a child.
//Define the Camper component and assign it default props of { name: 'CamperBot' }.
//Inside the Camper component, render any code that you want, but make sure to have one p
//element that includes only the name value that is passed in as a prop.
//Finally, define propTypes on the Camper component to require name to be provided as a prop and verify that it is of type string.
// class CampSite extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <Camper/>
//       </div>
//     );
//   }
// };
// // change code below this line
// const Camper = (props) => {
//   return <p>{props.name}</p>
// };
//
// Camper.defaultProps = {
//   name: 'CamperBot'
// };
//
//  Camper.propTypes = {
//   name: PropTypes.string.isRequired
// };

// React - 21: Create a Stateful Component
// There is a component in the code editor that is trying to render a
// name property from its state. However, there is no state defined.
// Initialize the component with state in the constructor and assign your name to a property of name.
// class StatefulComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     // initialize state here
//     this.state = {
//     name: 'John Smith'
// }
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//       </div>
//     );
//   }
// };

// React - 22: Render State in the User Interface
// In the code editor, MyComponent is already stateful.
// Define an h1 tag in the component's render method which
//renders the value of name from the component's state.
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'freeCodeCamp'
//     }
//   }
//   render() {
//     return (
//       <div>
//         { /* change code below this line */ }
//         <h1>{this.state.name}</h1>
//         { /* change code above this line */ }
//       </div>
//     );
//   }
// };

// React - 23: Render State in the User Interface Another Way
//In the MyComponent render method, define a const called name
// and set it equal to the name value in the component's state.
// Because you can write JavaScript directly in this part of the code,
// you don't have to enclose this reference in curly braces.
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'freeCodeCamp'
//     }
//   }
//   render() {
//     // change code below this line
//  const name = this.state.name;
//     // change code above this line
//     return (
//       <div>
//         { /* change code below this line */ }
//         <h1>{ name }</h1>
//         { /* change code above this line */ }
//       </div>
//     );
//   }
// };

// React - 24: Set State with this.setState
// There is a button element in the code editor
// which has an onClick() handler. This handler is triggered
// when the button receives a click event in the browser, and
// runs the handleClick method defined on MyComponent. Within the
// handleClick method, update the component state using this.setState().
// Set the name property in state to equal the string React Rocks!.
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Initial State'
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     // change code below this line
//     this.setState({
//       name: 'React Rocks!'
//     })
//     // change code above this line
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Click Me</button>
//         <h1>{this.state.name}</h1>
//       </div>
//     );
//   }
// };

// React - 25: Bind 'this' to a Class Method
// The code editor has a component with a state that keeps track of an item count. It also has a method which allows you to increment this item count. However, the method doesn't work because it's using the this keyword that is undefined. Fix it by explicitly binding this to the addItem() method in the component's constructor.
//
// Next, add a click handler to the button element in the render method. It should trigger the addItem() method when the button receives a click event. Remember that the method you pass to the onClick handler needs curly braces because it should be interpreted directly as JavaScript.
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       itemCount: 0
//     };
//     // change code below this line
//     this.addItem = this.addItem.bind(this);
//     // change code above this line
//   }
//   addItem() {
//     this.setState({
//       itemCount: this.state.itemCount + 1
//     });
//   }
//   render() {
//     return (
//       <div>
//         { /* change code below this line */ }
//         <button onClick={this.addItem }>Click Me</button>
//         { /* change code above this line */ }
//         <h1>Current Item Count: {this.state.itemCount}</h1>
//       </div>
//     );
//   }
// };

// React - 26: Use State to Toggle an Element
// MyComponent has a visibility property which is initialized to false.
// The render method returns one view if the value of visibility is true,
// and a different view if it is false.
// Currently, there is no way of updating the visibility property in the component's state.
// The value should toggle back and forth between true and false.
// There is a click handler on the button which triggers a class method called toggleVisibility().
// Pass a function to setState to define this method so that the state of visibility toggles
// to the opposite value when the method is called. If visibility is false, the method sets it to true,
// and vice versa.
// Finally, click the button to see the conditional rendering of the component based on its state.
// Hint: Don't forget to bind the this keyword to the method in the constructor!

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visibility: false
//     };
//
// this.toggleVisibility = this.toggleVisibility.bind(this);
// }
// toggleVisibility(){
//
//     this.setState(state => ({
//       visibility: !state.visibility
//     }));
//   }
// render() {
//     if (this.state.visibility) {
//       return (
//         <div>
//           <button onClick={this.toggleVisibility}>Click Me</button>
//           <h1>Now you see me!</h1>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <button onClick={this.toggleVisibility}>Click Me</button>
//         </div>
//       );
//     }
//   }
// };

// React - 27: Write a Simple Counter
// The Counter component keeps track of a count value in state.
// There are two buttons which call methods increment() and decrement().
// Write these methods so the counter value is incremented or decremented
// by 1 when the appropriate button is clicked. Also, create a reset() method
// so when the reset button is clicked, the count is set to 0.
// Note: Make sure you don't modify the classNames of the buttons.
// Also, remember to add the necessary bindings for the newly-created methods in the constructor.

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//     // change code below this line
//  this.increment = this.increment.bind(this);
//  this.decrement = this.decrement.bind(this);
//  this.reset = this.reset.bind(this);
//     // change code above this line
//   }
//   // change code below this line
// increment(){
//   let counter = this.state.count;
//   counter = counter + 1;
//   this.setState({
//     count: counter
//   });
// }
//
// decrement(){
//   let counter = this.state.count;
//   counter = counter - 1;
//   this.setState({
//     count: counter
//   });
// }
//
// reset(){
//   this.setState({
//     count: 0
//   });
// }
//   // change code above this line
//   render() {
//     return (
//       <div>
//         <button className='inc' onClick={this.increment}>Increment!</button>
//         <button className='dec' onClick={this.decrement}>Decrement!</button>
//         <button className='reset' onClick={this.reset}>Reset</button>
//         <h1>Current Count: {this.state.count}</h1>
//       </div>
//     );
//   }
// };

// React - 28: Create a Controlled Input
// class ControlledInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: ''
//     };
//     // change code below this line
// this.handleChange = this.handleChange.bind(this);
//     // change code above this line
//   }
//   // change code below this line
// handleChange(event){
//   let nam = event.target.name;
//   let val = event.target.value;
//   this.setState({[nam]: val});
// }
//   // change code above this line
//   render() {
//     return (
//       <div>
//         { /* change code below this line */}
//         <input
//         value={this.state.input}
//         onChange={this.handleChange}
//         name="input"/>
//         { /* change code above this line */}
//         <h4>Controlled Input:</h4>
//         <p>{this.state.input}</p>
//       </div>
//     );
//   }
// };

// React - 29: Create a Controlled Form
// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: '',
//       submit: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       input: event.target.value
//     });
//   }
//   handleSubmit(event) {
//     // change code below this line
//  event.preventDefault(event);
//  this.setState({ submit: this.state.input});
//     // change code above this line
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           { /* change code below this line */ }
//           <input value={this.state.input} onChange={this.handleChange}/>
//           { /* change code above this line */ }
//           <button type='submit'>Submit!</button>
//         </form>
//         { /* change code below this line */ }
//         <h1>{this.state.submit}
//         </h1>
//         { /* change code above this line */ }
//       </div>
//     );
//   }
// };

// React - 30: Pass State as Props to Child Components
// The MyApp component is stateful and renders a Navbar component
// as a child. Pass the name property in its state down to the child
// component, then show the name in the h1 tag that's part of the
// Navbar render method.

// class MyApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'CamperBot'
//     }
//   }
//   render() {
//     return (
//        <div>
//          <Navbar userName={this.state.name} />
//        </div>
//     );
//   }
// };
//
// class Navbar extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     let userName;
//     return (
//     <div>
//       <h1>Hello, my name is: {this.props.userName} </h1>
//     </div>
//     );
//   }
// };

// React -31: Pass a Callback as Props
// class MyApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: ''
//     }
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       inputValue: event.target.value
//     });
//   }
//   render() {
//     return (
//        <div>
//         { /* change code below this line */ }
//         <GetInput
//               input={this.props.inputValue}
//               handleChange={this.handleChange} />
//         <RenderInput input={this.state.inputValue} />
//         { /* change code above this line */ }
//        </div>
//     );
//   }
// };
//
// class GetInput extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h3>Get Input:</h3>
//         <input
//           value={this.props.input}
//           onChange={this.props.handleChange}/>
//       </div>
//     );
//   }
// };
//
// class RenderInput extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h3>Input Render:</h3>
//         <p>{this.props.input}</p>
//       </div>
//     );
//   }
// };

// React - 32: Use the Lifecycle Method componentWillMount
// The componentWillMount() method is called before the
// render() method when a component is being mounted to the DOM.
// Log something to the console within componentWillMount() -
// you may want to have your browser console open to see the output.

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   componentWillMount() {
//     // change code below this line
//     console.log("Component Has Mounted");
//     // change code above this line
//   }
//   render() {
//     return <div />
//   }
// };

// React - 33: Use the Lifecycle Method componentDidMount
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeUsers: null
//     };
//   }
//   componentDidMount() {
//     setTimeout( () => {
//       this.setState({
//         activeUsers: 1273
//       });
//     }, 2500);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Active Users: {this.state.activeUsers}</h1>
//       </div>
//     );
//   }
// };

// React - 34: Add Event Listeners
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: ''
//     };
//     this.handleEnter = this.handleEnter.bind(this);
//     this.handleKeyPress = this.handleKeyPress.bind(this);
//   }
//   // change code below this line
//   componentDidMount() {
//     document.addEventListener("keydown", this.handleKeyPress);
//   }
//   componentWillUnmount() {
//     document.removeEventListener("keydown", this.handleKeyPress);
//   }
//   // change code above this line
//   handleEnter() {
//     this.setState({
//       message: this.state.message + 'You pressed the enter key! '
//     });
//   }
//   handleKeyPress(event) {
//     if (event.keyCode === 13) {
//       this.handleEnter();
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.message}</h1>
//       </div>
//     );
//   }
// };

// React - 35: Optimize Re-Renders with shouldComponentUpdate
// The shouldComponentUpdate() method is added in a component called OnlyEvens.
// Currently, this method returns true so OnlyEvens re-renders every time it
// receives new props. Modify the method so OnlyEvens updates only if the
// value of its new props is even. Click the Add button and watch the order of
// events in your browser's console as the lifecycle hooks are triggered.

// class OnlyEvens extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('Should I update?');
//      // change code below this line
//      if(nextProps.value % 2 === 0) return true;
//      // change code above this line
//   }
//   componentDidUpdate() {
//     console.log('Component re-rendered.');
//   }
//   render() {
//     return <h1>{this.props.value}</h1>
//   }
// };
// class Controller extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 0
//     };
//     this.addValue = this.addValue.bind(this);
//   }
//   addValue() {
//     this.setState({
//       value: this.state.value + 1
//     });
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.addValue}>Add</button>
//         <OnlyEvens value={this.state.value}/>
//       </div>
//     );
//   }
// };

// React -36: Introducing Inline Styles
// Add a style attribute to the div in the
// code editor to give the text a color of red and font size of 72px.
// Note that you can optionally set the font size to be a number,
// omitting the units "px", or write it as "72px".

// class Colorful extends React.Component {
//   render() {
//     return (
//       <div style={{color: "red", fontSize: 72}}>Big Red</div>
//     );
//   }
// };

// React - 37: Add Inline Styles in React
// Uncomment the styles constant and declare an object with three style properties and their values.
// Give the div a color of "purple", a font-size of 40, and a border of "2px solid purple".
// Then set the style attribute equal to the styles constant.
//
// const styles = {
//   color: "purple",
//   fontSize: 40,
//   border: "2px solid purple"
// }
// // change code above this line
// class Colorful extends React.Component {
//   render() {
//     // change code below this line
//     return (
//       <div style={styles}>Style Me!</div>
//     );
//     // change code above this line
//   }
// };

//React - 38:  Use Advanced JavaScript in React Render Method
// In the code provided, the render method has an array that contains
// 20 phrases to represent the answers found in the classic 1980's Magic Eight Ball toy.
// The button click event is bound to the ask method, so each time the button is clicked
// a random number will be generated and stored as the randomIndex in state. On line 52,
// delete the string "change me!" and reassign the answer const so your code randomly
// accesses a different index of the possibleAnswers array each time the component updates.
// Finally, insert the answer const inside the p tags.

// const inputStyle = {
//   width: 235,
//   margin: 5
// }
//
// class MagicEightBall extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userInput: '',
//       randomIndex: ''
//     }
//     this.ask = this.ask.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   ask() {
//     if (this.state.userInput) {
//       this.setState({
//         randomIndex: Math.floor(Math.random() * 20),
//         userInput: ''
//       });
//       console.log(this.state.randomIndex);
//     }
//   }
//   handleChange(event) {
//     this.setState({
//       userInput: event.target.value
//     });
//   }
//   render() {
//     const possibleAnswers = [
//       'It is certain',
//       'It is decidedly so',
//       'Without a doubt',
//       'Yes, definitely',
//       'You may rely on it',
//       'As I see it, yes',
//       'Outlook good',
//       'Yes',
//       'Signs point to yes',
//       'Reply hazy try again',
//       'Ask again later',
//       'Better not tell you now',
//       'Cannot predict now',
//       'Concentrate and ask again',
//       'Don\'t count on it',
//       'My reply is no',
//       'My sources say no',
//       'Most likely',
//       'Outlook not so good',
//       'Very doubtful'
//     ];
//     const answer =  possibleAnswers[this.state.randomIndex];// << change code here
//
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.userInput}
//           onChange={this.handleChange}
//           style={inputStyle} /><br />
//         <button onClick={this.ask}>
//           Ask the Magic Eight Ball!
//         </button><br />
//         <h3>Answer:</h3>
//         <p>
//           { /* change code below this line */ }
//   {answer}
//           { /* change code above this line */ }
//         </p>
//       </div>
//     );
//   }
// };

// React - 39: Render with an If-Else Condition
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: true
//     }
//     this.toggleDisplay = this.toggleDisplay.bind(this);
//   }
//   toggleDisplay() {
//     this.setState({
//       display: !this.state.display
//     });
//   }
//   render() {
//     // change code below this line
//       if(this.state.display == false){
//         return (
//           <div>
//             <button onClick={this.toggleDisplay}>Toggle Display</button>
//           </div>
//         )
//       } else {
//         return (
//            <div>
//              <button onClick={this.toggleDisplay}>Toggle Display</button>
//              <h1>Displayed!</h1>
//            </div>
//         );
//       }
//   }
// };


// React - 40: Use && for a More Concise Conditional
// Solve the previous example again, so the h1 only renders if display is true,
// but use the && logical operator instead of an if/else statement.
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: true
//     }
//     this.toggleDisplay = this.toggleDisplay.bind(this);
//   }
//   toggleDisplay() {
//     this.setState(state => ({
//       display: !state.display
//     }));
//   }
//   render() {
//     // change code below this line
//     return (
//        <div>
//          <button onClick={this.toggleDisplay}>Toggle Display</button>
//           {this.state.display && <h1>Displayed!</h1>}
//        </div>
//     );
//   }
// };

// React - 41: Use a Ternary Expression for Conditional Rendering
// const inputStyle = {
//   width: 235,
//   margin: 5
// }
// class CheckUserAge extends React.Component {
//   constructor(props) {
//     super(props);
//     // change code below this line
//     this.state = {
//       input: '',
//       userAge: ''
//     }
//     // change code above this line
//     this.submit = this.submit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(e) {
//     this.setState({
//       input: e.target.value,
//       userAge: ''
//     });
//   }
//   submit() {
//     this.setState(state => ({
//       userAge: state.input
//     }));
//   }
//   render() {
//     const buttonOne = <button onClick={this.submit}>Submit</button>;
//     const buttonTwo = <button>You May Enter</button>;
//     const buttonThree = <button>You Shall Not Pass</button>;
//     return (
//       <div>
//         <h3>Enter Your Age to Continue</h3>
//         <input
//           style={inputStyle}
//           type="number"
//           value={this.state.input}
//           onChange={this.handleChange} /><br />
//         {
//           /* change code here */
//           this.state.userAge === '' ? buttonOne : (this.state.userAge < 18 ? buttonThree : buttonTwo)
//         }
//       </div>
//     );
//   }
// };

// React - 42: Render Conditionally from Props
// class Results extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <h1>
//       {this.props.fiftyFifty ? "You Win!" : "You Lose!"}
//       </h1>
//     )
//   };
// };
// class GameOfChance extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 1
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   }
//   render() {
//     const expression = Math.random() >= .5;
//     console.log(expression);
//     return (
//       <div>
//         <button onClick={this.handleClick}>Play Again</button>
//         { /* change code below this line */ }
//           <Results fiftyFifty={expression}/>
//         { /* change code above this line */ }
//         <p>{'Turn: ' + this.state.counter}</p>
//       </div>
//     );
//   }
// };

// React - 43: Change Inline CSS Conditionally Based on Component State
// class GateKeeper extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     this.setState({ input: event.target.value })
//   }
//   render() {
//     let inputStyle = {
//       border: '1px solid black'
//     };
//     // change code below this line
//   if(this.state.input.length > 15) {
//     inputStyle.border = '3px solid red';
//     }
//
//     // change code above this line
//     return (
//       <div>
//         <h3>Don't Type Too Much:</h3>
//         <input
//           type="text"
//           style={inputStyle}
//           value={this.state.input}
//           onChange={this.handleChange} />
//       </div>
//     );
//   }
// };

// React - 44: Use Array.map() to Dynamically Render Elements
// const textAreaStyles = {
//   width: 235,
//   margin: 5
// };
// class MyToDoList extends React.Component {
//   constructor(props) {
//     super(props);
//     // change code below this line
//   this.state = {
//     userInput: '',
//     toDoList: []
//   }
//     // change code above this line
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleSubmit() {
//     const itemsArray = this.state.userInput.split(',');
//     this.setState({
//       toDoList: itemsArray
//     });
//   }
//   handleChange(e) {
//     this.setState({
//       userInput: e.target.value
//     });
//   }
//   render() {
//     const items = this.state.toDoList.map(item => <li>{item}</li>);
//     return (
//       <div>
//         <textarea
//           onChange={this.handleChange}
//           value={this.state.userInput}
//           style={textAreaStyles}
//           placeholder="Separate Items With Commas" />
//         <br />
//         <button onClick={this.handleSubmit}>Create List</button>
//         <h1>My "To Do" List:</h1>
//         <ul>
//           {items}
//         </ul>
//       </div>
//     );
//   }
// };

// React - 45: Give Sibling Elements a Unique Key Attribute
// const frontEndFrameworks = [
//   'React',
//   'Angular',
//   'Ember',
//   'Knockout',
//   'Backbone',
//   'Vue'
// ];
//
// function Frameworks() {
//   const renderFrameworks = frontEndFrameworks.map((item, index) => <li key={index}>{item}</li>);
//
//   return (
//     <div>
//       <h1>Popular Front End JavaScript Frameworks</h1>
//       <ul>
//         {renderFrameworks}
//       </ul>
//     </div>
//   );
// };

// React - 46: Use Array.filter() to Dynamically Filter an Array
// In the code editor, MyComponent's state is initialized with an array of users.
// Some users are online and some aren't. Filter the array so you see only the users who are online.
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [
//         {
//           username: 'Jeff',
//           online: true
//         },
//         {
//           username: 'Alan',
//           online: false
//         },
//         {
//           username: 'Mary',
//           online: true
//         },
//         {
//           username: 'Jim',
//           online: false
//         },
//         {
//           username: 'Sara',
//           online: true
//         },
//         {
//           username: 'Laura',
//           online: true
//         }
//       ]
//     }
//   }
//   render() {
//     const usersOnline = this.state.users.filter(user => user.online); // change code here
//     const renderOnline = usersOnline.map((item, index) => <li key={index}>{item.username}</li> );
//     return (
//        <div>
//          <h1>Current Online Users:</h1>
//          <ul>
//            {renderOnline}
//          </ul>
//        </div>
//     );
//   }
// };

// React - 47: Render React on the Server with renderToString
// The renderToString() method is provided on ReactDOMServer, which is available here as a global object.
// The method takes one argument which is a React element. Use this to render App to a string.
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};
// change code below this line
ReactDOMServer.renderToString(<App />);
