import React, { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

const Context = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const [removedTodo, setRemovedTodo] = useState(undefined);
  const [editTodo, setEditTodo] = useState(undefined);

  const priorities = [
    {
      id: 1,
      name: "Urgent",
    },
    {
      id: 2,
      name: "Regular",
    },
    {
      id: 3,
      name: "Trivial",
    },
  ];

  useEffect(() => {
    const retriveProducts = JSON.parse(localStorage.getItem("todos"));
    if (retriveProducts) setTodos(retriveProducts);
  }, []);

  useEffect(() => {
    if (todos?.length) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (todo) => {
    if (
      !todo.name ||
      !todo.name.trim() ||
      /^[a-zA-Z0-9]{,255}$/.test(todo.name)
    ) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todo) => {
    setTodos((prev) => {
      return prev.map((t) => {
        if (t.id === todo.id) {
          return todo;
        }
        return t;
      });
    });
  };

  const confirmEditTodo = (todo) => {
    setEditTodo(todo);
  };

  const confirmRemoveTodo = (todo) => {
    setRemovedTodo(todo);
  };

  const removeTodo = (todo) => {
    const removedArr = [...todos].filter((t) => t.id !== todo.id);
    setTodos(removedArr);
    setRemovedTodo(undefined);
  };

  const sortTodo = (a, b, sortType) => {
    if (sortType === "Name") return a.name.localeCompare(b.name);
    return (
      priorities.filter((p) => p.name === a.priority)[0].id -
      priorities.filter((p) => p.name === b.priority)[0].id
    );
  };

  const contextValue = {
    todos,
    priorities,
    removedTodo,
    editTodo,
    addTodo,
    updateTodo,
    confirmEditTodo,
    confirmRemoveTodo,
    removeTodo,
    sortTodo,
    
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default Context;
