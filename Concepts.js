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

//If we were to change the example above and only wanted to show text if the user was logged in(ifLoggedIn is true), this would be a great use case for the &&(and) operator.

//If the first value(operand) in the conditional is true, the && operator displays the second operand. Otherwise it returns the first operand. And since it is falsy(is a value automatically converted to the boolean false by JavaScript), it is not rendered by JSX:

import React from "react";

function App() {
    const isLoggedIn = true;
    //If true: Welcome back!, if false: nothing
    return<div>{isLoggedIn && "Welcome back!"}</div>;
}
// export default App;

//Let's say that we want the reserve of what we're doing now: to only say "Who are you?" if isLoggedIn is false. if it's true, we won't show anything.

//For this logic, we can use || (or) operator. It essentially works opposite to the && operator. If the first operand is true, the first(falsy) operand is returned. If the first operand is false, the 2nd operand is returned.

import React from "react";

function App() {
    const LoggedIn = true;
        //If true: nothing, if false: Who are you?
        return <div>{isLoggedIn || "Who are you?"}</div>
    }
// export default App;

//4.Three Array Methods:
// .map(), .filter(), .reduce()

// We can insert any valid expressions, including variables that contain primitive values(strings, numbers, booleans, and so on) as well as object properties that contain primitive values.

import React from "react";

function App() {
    const name = "Reed";
    const bio = {
        age : 28,
        isEnglishSpeaker: true
    };
    return (
        <>
        <h1>{name}</h1>
        <h2>I am {bio.age} years old</h2>
        <p>Speaks English: {bio.isEnglishSpeaker}</p>
        </>
    )
}
// export default App;

// What if we have an array and we want to iterate over that array to show each array element within an individual JSX element?

// For this, we can use the .map() method. It allows us to transform each element in our array in the way we specify with the inner function.

// Note that it is especially concise when used in combination with an arrow function.

import React from "react";

function App() {
    const programmers = ["Tejas, Yash, Saurabh"];
    return (
        <ul>
            {programmers.map(programmer =><li>{programmer}</li>)}
        </ul>
    );
}
// export default App;

// There are other falvours of the .map() method tha perform related tasks and are important to know because they can be chanined in combination with one another.

// Why? Because .map(), like many array methods, returns a shallow copy of the array that it has iterated

// .filter(), as its name indicates, allows us to filter certain elements out of our array.For example, if we wanted to remove all names of programmers that started with "J", we could do so with .filter():

import React from "react";

function App() {
    const programmers = ["Tejas", "Yash", "Saurabh"];
    return (
        <ul>
            {/*Return Tejas*/}
            {programmers
            .filter(programmer => !programmer.startsWith("J"))
            .map(programmer => <li>{programmer}</li>)}
        </ul>
        );
    }
// export default App;

// It's important to understand that both .map() and .filter() are just different variations of the .reduce() array method, which is capable of transforming array values into virtually any data type, even non-array values.
// Here's .reduce() performimg the same operation as our .filter() method above:
import React from "react";
  
  function App() {
    const programmers = ["Tejas", "Shubham", "Mahekar"];

    return (
        <ul>
            {/* Returns Tejas*/}
            {programmers
            .reduce((acc, programmer) =>{
                if (!programmer.startsWith("T")) {
                    return acc.concat(programmer);
                } else{
                    return acc;
                }
            }, [])
            .map((programmer) =>(
                <li>{programmer}</li>
            ))}
        </ul>
    );
  }

// 5.Object Tricks: Property Shorthand, Destructuring, Spread Operator


