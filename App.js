const heading = React.createElement("h1", { id: "heading" }, "hey from React");
console.log(heading);
const domRoot = document.getElementById("root-react");
const root = ReactDOM.createRoot(domRoot);

const parentElement = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "0" }, [
    React.createElement("h1", { id: "h1", key: "0" }, "I am H1 TAG"),
    React.createElement("h2", { id: "h2", key: "1" }, "I am H2 TAG"),
  ]),
  React.createElement("div", { id: "child2", key: "1" }, [
    React.createElement("h1", { id: "h1", key: "0" }, "I am H1 TAG"),
    React.createElement("h2", { id: "h2", key: "1" }, "I am H2 TAG"),
  ]),
]);

root.render(parentElement);


console.log(parentElement);



