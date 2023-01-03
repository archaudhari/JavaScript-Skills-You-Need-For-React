//1.Function Declarations and Arrow Functions

//The Basis of any React application is the component. In React, components are defined with both JavaScript Function and Classes.
//But unlike JavaScript function, React components return JSX elements that are used to structure our application interface.

//JavaScript function : returns any valid JavaScript type

function javascriptFunction() {
    return "Hello World";
}

//React function component : returns JSX
function ReactComponent(props) {
    return <h1>{props.content}</h1>
}
//Function declaration syntax 
function MyComponent(props) {
    return <div>{props.content}</div>;
}
//Arrow function syntax
const MyComponent = (props) => {
    return<div>{props.content}</div>;
}
//Arrow function syntax (shorthand)
const MyComponent = props => <div>{props.content}</div>;

/*
In the last example we are using several shorthands that arrow function allow:

1.No paranthesis around a single parameter
2.Implicit return (as compared to using the "return" keyword)
3.No curly braces for function body
*/

//Due to the JavaScript behavior of hoisting, you can use multiple function components made with function declarations in a single file in whichever order you like.
//Function components made with arrow functions, however, cannot be ordered whichever way you like. Because JavaScript varibles are hoisted, arrow function components must be declared before they used:
function App() {
   return (
    <>
    {/*Valid! FunctionDeclaration is hoisted */}
    <FunctionDeclaration />
    {/*Invalid! ArrowFunction is NOT hoisted. Therefore, it must be declared before it is used */}
    <ArrowFunction />
    </>
   )}
   function FunctionDeclaration() {
    return <div>Hello React!</div>;
   }
   function ArrowFunction() {
    return <div>Hello React, again!</div>;
   }
//Another small difference in using the function declaration syntax is that you can immediately export a component from a file using export default or export before the function is declared. You can only use the export keyword before arrow function(default exports must be placed on a line below the component.)

//Function declaration syntax can be immediately exported with export default or export.
export default function App() {
    return <div>Hello React</div>
}
//Arrow function syntax must use export only
export const App = () => {
    return <div>Hello React</div>
}

//2.Template Literals

//Instead of having to use the + operator, we can connect strings by putting a JS expression(such as variable) within a speacial ${} syntax:

/*
Concatenating strings prior to ES6.
Notice the awkward space after the word Hello?
*/
function sayHello(text) {
    return 'Hello ' + text + '!';
}
sayHello('React'); //Hello React!

/*
Concatenating strings using template literals.
See how much more readable and predictable this code is?
*/
function sayHelloAgain(text) {
    return `Hello again, $(text)!`;
}
sayHelloAgain("React"); //Hello again, React!

//We can even include conditional logic using the ternary operator, which is perfect for condtionally adding or removing a class style rule to given JSX element:

/*
Go to react.new and paste this code in to see it work!
*/
import React from "react";

function App() {
    const [isRedColor, setRedColor] = React.useState(false);
    const toggleColor = () => setRedColor((prev) => !prev);
    return (
        <button 
        onClick={toggleColor}
        style={{
            background: isRedColor ? "red" : "black",
            color: "white"
        }}
        >
        Button is{isRedColor ? "red": "not red"}
    </button>
    );
}
// export default App;

//In short, template literals are great for React whenever we need to dynamically create strings. For example, when we use string values that can change in our head or body elements in our site:

import React from "react";
import Head from "./Head";

function Layout(props) {
    const title = `${props.title} | Ajay Chaudhari`;
    return (
        <>
        <Head>
            <title>{title}</title>
        </Head>
        <main>
            {props.children}
        </main>
        </>
    )
}

//3.Short Conditionals: &&, ||, Ternary Operator

//Considering that React is just JavaScript, it is very easy to conditionally show(or hide) JSX elements using simple if statement and sometimes switch statements.

import React from "react";

function App() {
    const isLoggedIn = true;
    if (isLoggedIn) {
        //Shows : Welcome back!
        return <div>Welcome back!</div>;
    }
    return<div>Who are you?</div>;
}
// export default App;

// Ternary Operator functions exactly the same as an if-statement, but it is shorter, it is an expression(not a statement), can be inserted within JSX:
import React from "react";

function App() {
    const isLoggedIn = true;
    //Shows: Welcome back!
    return isLoggedIn ? <div>Welcome back!</div>: <div>Who are you?</div>
}
// export default App;
