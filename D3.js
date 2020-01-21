//NOTES

//D3.js, or D3, stands for Data Driven Documents.
//D3 is a JavaScript library to create dynamic and interactive data visualizations in the browser.
//It's built to work with common web standards, namely HTML, CSS, and Scalable Vector Graphics (SVG)

//D3 Methods - select(), append(), text(), selectAll(), enter(), data(), style()
//The select() method selects one element from the document
//The append() method takes an argument for the element you want to add to the document.
//It appends an HTML node to a selected item, and returns a handle to that nod
// The text() method either sets the text of the selected node, or gets the current text. can take a string or a callback function as an arguement
//The data() method is used on a selection of DOM elements to attach the data to those elements.
//The enter() method creates a new element in the document for each piece of data in the data set.

//CODES
//Data Visualization with D3 -1: Add Document Elements with D3
//Use the select method to select the body tag in the document.
//Then append an h1 tag to it, and add the text "Learning D3" into the h1 element.
// <body>
//   <script>
//     // Add your code below this line
//     d3.select("body").append("h1").text("Learning D3");
//     </script>
// </body>

// Data Visualization with D3 -2: Select a Group of Elements with D3
// Select all of the li tags in the document, and change their text to
// "list item" by chaining the .text() method.
// <body>
//   <ul>
//     <li>Example</li>
//     <li>Example</li>
//     <li>Example</li>
//   </ul>
//   <script>
//     // Add your code below this line
//     d3.selectAll("li").text("list item");
//   </script>
// </body>

// Data Visualization with D3-3: Work with Data in D3
// Select the body node, then select all h2 elements.
// Have D3 create and append an h2 tag for each item in the dataset array.
// The text in the h2 should say "New Title".
// Your code should use the data() and enter() methods.
{
  /* <body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9]; d3.select("body")
    .selectAll("h2") .data(dataset) .enter() .append("h2") .text("New Title");
  </script>
</body>; */
}

// Data Visualization with D3 - 4: Work with Dynamic Data in D3
// Change the text() method so that each h2 element displays the
// corresponding value from the dataset array with a single space and "USD".
// For example, the first heading should be "12 USD".
// <body>
//   <script>
//     const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
//     d3.select("body").selectAll("h2")
//       .data(dataset)
//       .enter()
//       .append("h2")
//       .text((d) => d + "USD");
//   </script>
// </body>

// Data Visualization with D3 - 5: Add Inline Styling to Elements
//Add the style() method to the code in the editor to make all the
//displayed text have a font-family of verdana.
// <body>
//   <script>
//     const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
//     d3.select("body").selectAll("h2")
//       .data(dataset)
//       .enter()
//       .append("h2")
//       .text((d) => (d + " USD"))
//       // Add your code below this line
//       .style("font-family", "verdana");
//   </script>
// </body>
