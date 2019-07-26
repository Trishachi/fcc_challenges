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
