import React, { useState, useEffect } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Todo from "./Todo";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [todos, setTodo] = useState([]);

  //Create todo

  //Read todo list
  useEffect(() => {
    const myQuery = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(myQuery, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodo(todosArray);
    });
    return () => unsubscribe();
  }, []);

  //Update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  //Delete todo in firebase

  return (
    <div className='bg'>
      <div className='app'>
        <h3 className='title'>Todo App</h3>
        <form className='form'>
          <input type='text' placeholder='Add Todo' className='input' />
          <button type='submit' className='button'>
            <BsFillPlusCircleFill className='icon' />
          </button>
        </form>
        <ul className='list'>
          {todos.map((todo, index) => (
            <Todo todo={todo} key={index} toggleComplete={toggleComplete} />
          ))}
        </ul>
        <p className='remind'>You have 2 todos</p>
        <ul className='done'></ul>
      </div>
    </div>
  );
}

export default App;
