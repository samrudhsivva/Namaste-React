import React from "react";
import ReactDOM from "react-dom/client";

const myLuckyuNumber = 777;
const nestedHeaderElement = React.createElement("div", { className: "title" }, [
  React.createElement("h1", null, "I am H1"),
  React.createElement("h2", null, "I am H2"),
  ,
  React.createElement("h3", null, "I am H3"),
]);
const NestedHeaderElementComponent = () => (
  <div className="title">
    <h1>i am H1</h1>
    <h2>i am H2</h2>
    <h3>i am H3</h3>
    <span>Rendering NestedHeaderElementComponent2 here</span>
    <NestedHeaderElementComponent2 />
    <NestedHeaderElementComponent2></NestedHeaderElementComponent2>
    {myLuckyuNumber}
  </div>
);
const NestedHeaderElementComponent2 = () => (
  <div className="title">
    <h1>i am H1</h1>
    <h2>i am H2</h2>
    <h3>i am H3</h3>
  </div>
);
const nestedHeaderElementJSX = (
  <div className="title">
    <h1 id="heading">i am H1</h1>
    <h2>i am H1</h2>
    <h3>i am H1</h3>
    <NestedHeaderElementComponent />
  </div>
);

const HeaderComponent = () => (
  <div className="container">
    <img className="logo" src="https://namastedev.com/images/reel.png" />
    <div>
      <input className="search-box" type="text"></input>
      <button>search</button>
    </div>

    <img 
      className="user-icon"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ78ua_0Z0w9iIe1jt11k3PsoD0CsvML6B6Q&usqp=CAU"
    />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
