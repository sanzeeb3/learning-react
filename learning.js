/**
 *
 * Notes and practices only.
 * @since  1.0.0
 */

let a = 30;
console.log(a);

if( true ) {
	let b = 40;
}

console.log(b); // Undefined.

const a = 45;
	  a = 30; // Error.

let WorkingFunction = (a = 10, b) => {
	return a+b;
}

WorkingFunction( 20, 30 );	// Returns 50; 

let NotWorkingFunction = ( a= 10, b ) => {
	return a + b;
}

NotWorkingFunction( 20 ); // NAN, Since b is undefined.

// DOM:
// HTML DOM is an object model for the HTML. IT defined:
// HTML elements as object
// Properties, methods, events for all HTML elements.

document.getElementByID("intro"); 			// Find HTML element by ID.
document.getElementByTagName("intro"); 		// Tag Name.
document.getElementByClassName("intro");	// Class Name.
document.querySelectorAll("p.intro");		// CSS Selector.

// Babel is a JS compiler which translates the markup or programming languages into  JavaScript.
// ES6
// React uses Babel to convert JSX into javascript.
// Script type is text/babel.
// Javascript XML is JSX.
// JSX is neither HTML nor JavaScript.
 
const element = <h1>Hello World!</h1>	 //JSX doesnot use quote around the HTML text string.

// If an attribute is wrapped in curly braces, the value is a JavaScript expression.

// React applications are usually built around a single HTML element. E.g. in learning.html root id, often called root element or root node.
// React Compontents are javascript functions.


/**
 * Setting up a ReactJS project
 * With these steps, no need to load the js scripts and so like in learning.html. More like a chapter two.
 */

// 1. npm install -g create-react-app
// 2. create-react-app helloworld