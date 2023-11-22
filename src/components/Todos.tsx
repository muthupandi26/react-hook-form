import React from "react";
import { useSelector } from "react-redux";

function Todos() {
  const todos = useSelector((state: any) => state.todos);
  console.log(todos, "todos");

  return (
    <>
      Todos
      {todos.map((data: any) => {
        return <p>{data.text}</p>;
      })}
    </>
  );
}

export default Todos;
