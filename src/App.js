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
  addDoc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [todos, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  //Create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (newTodo === "") {
      alert("Please enter a todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: newTodo,
      completed: false,
    });
    setNewTodo("");
  };

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
  const deleteTodo = async (todo) => {
    await deleteDoc(doc(db, "todos", todo.id), {
      completed: false,
    });
  };

  return (
    <div className='bg'>
      <div className='app'>
        <h3 className='title'>Todo App</h3>
        <form className='form' onSubmit={createTodo}>
          <input
            type='text'
            placeholder='Add Todo'
            className='input'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button type='submit' className='button'>
            <BsFillPlusCircleFill className='icon' />
          </button>
        </form>
        <ul className='list'>
          {todos.map((todo, index) => (
            <Todo
              todo={todo}
              key={index}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length > 0 && (
          <p className='remind'>You have {todos.length} todos</p>
        )}
        <ul className='done'></ul>
      </div>
    </div>
  );
}

export default App;
