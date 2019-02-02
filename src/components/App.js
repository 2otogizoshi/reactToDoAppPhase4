import React from "react";
import ToDoItem from "./ToDoItem";
import toDoData from "./toDoData";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <ToDoItem />
        <toDoData />
      </div>
    );
  }
}
export default App;
