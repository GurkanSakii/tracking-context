import React from "react";
import classes from "./App.module.scss";
import TodoList from "./components/TodoList";
import TodoProvider from "./Context";

function App() {
  return (
    <div className={classes.todoapp}>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
