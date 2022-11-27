import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";

const Todo = ({ todo, toggleComplete }) => {
  return (
    <>
      <li className={todo.completed ? "liCompleted" : "list-item"}>
        <div className='list-content'>
          <input
            type='checkbox'
            className='checkbox'
            checked={todo.completed ? "checked" : ""}
            onChange={() => toggleComplete(todo)}
          />
          <p
            className={todo.completed ? "textCompleted" : ""}
            onClick={() => toggleComplete(todo)}>
            {todo.text}
          </p>
        </div>
        <button className='button'>
          <RiDeleteBinFill className='icon' />
        </button>
      </li>
    </>
  );
};

export default Todo;
