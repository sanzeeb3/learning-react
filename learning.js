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
