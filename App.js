import React from "react";
import ReactDOM, { render } from "react-dom/client";

// React Element => JS Object ==(render)==> HTML Tag

const heading = React.createElement(
  "h1",
  { id: "heading" }, // Creating a React Element using Core React
  "Namaste React 🚀"
);

const JSXheading = <h1 className="title">Namaste React using JSX 🚀</h1>; // Creating a React Element using JSX

// JSX ===(Babel)===> React Element - JS Object ===(render)===> HTML tag

const Title = () => <h2 className="title">Title goes here ...</h2>;

const HeadingComponent = () => {
  return (
    <div className="container">
      <h1 className="title">Title render</h1>
      <Title />
      <Title></Title>
      {Title()}
      <Component_1 />
    </div>
  );
};
const myLuckyNumber = 777;

const Component_1 = function () {
  return (
    <>
      {Component_2}
      <i>myLuckyNumber is {myLuckyNumber}</i>
      <h2>I am component 1</h2>
    </>
  );
};
const Component_2 = (
  <>
    <h3>I am component 2</h3>
  </>
);
console.log(JSXheading);
const myRoot = document.getElementById("root");
const root = ReactDOM.createRoot(myRoot);
root.render(<HeadingComponent />);
