import React, { useState } from "react";
import TodoForm from "../TodoForm";
import Todo from "../Todo";
import TodoSearch from "../TodoSearch";
import TodoSort from "../TodoSort";
import EditModal from "../EditModal";
import DeleteModal from "../DeleteModal";
import classes from "./style.module.scss";
import { useTodoContext } from "../../Context";

function TodoList() {
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("Priority (all)");

  const {
    todos,
    sortTodo,
    removeTodo,
    confirmRemoveTodo,
    confirmEditTodo,
    updateTodo,
    removedTodo,
    editTodo,
    addTodo,
  } = useTodoContext();

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <div className={classes.joblist}>
        <h1>Job List</h1>
        <div className={classes.todoarea}>
          <TodoSearch setSearchText={setSearchText} searchText={searchText} />
          <TodoSort setSortType={setSortType} sortType={sortType} />
        </div>
        <div className={classes.todocontent}>
          <div className={classes.todotable}>
            <div>
              <span>Name</span>
              <span>Priority</span>
            </div>
            <div>Action</div>
          </div>
          {todos
            .filter(
              (todo) =>
                todo.name.toLowerCase().includes(searchText.toLowerCase()) ||
                todo.priority.toLowerCase().includes(searchText.toLowerCase())
            )
            .sort((a, b) => sortTodo(a, b, sortType))
            .map((todo, i) => (
              <Todo
                todo={todo}
                key={i}
                removeTodo={confirmRemoveTodo}
                updateTodo={confirmEditTodo}
              />
            ))}
          {todos.length < 1 && (
            <div className={classes.notfound}>Not Found any Data</div>
          )}
        </div>
      </div>

      {removedTodo && (
        <DeleteModal
          onClose={() => confirmRemoveTodo(undefined)}
          title={"Are you sure you want to delete it?"}
          onApprove={() => removeTodo(removedTodo)}
        ></DeleteModal>
      )}

      {editTodo && (
        <EditModal
          editTodo={editTodo}
          onClose={() => confirmEditTodo(undefined)}
          onApprove={updateTodo}
        ></EditModal>
      )}
    </>
  );
}

export default TodoList;
