import './CSS/Todo.css';
import {useState, useRef, useEffect} from 'react';
import TodoItems from './TodoItems.jsx'

let count = 1;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    setTodos([...todos, {id:count++, text:inputRef.current.value, display:""}])
    inputRef.current.value = "";
    localStorage.setItem("todosCount", count)
  }

/* This gets the data saved from the last session (using localStorage.getItem(objectName)) 
**It uses JSON.parse() to convert the object back to its original form
**It uses setTodos(value) to reassign value to the variables on page reload using an empty array; []; which is the useEffect dependency
*/

  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todosCount");
  }, [])



  /* This saves the data of the present session on the local storage (using localStorage.setItem(objectName, object)) to enable it to be recovered readily in a subsequent session. it stores the data as strings thus the usage of JSON.stringfy() 
  **setTimeout(()=>{funtion to be executed}, duration) is used to give the time of expiration for the transporting of the object to localstorage.
  **it does this when the dependency; [todos], of the use effect is satisfied.
  **The dependency of the useEffect states that the functions will be executed only if there is an object named todos in the application*/
  useEffect(() => {
    setTimeout (() => {
      localStorage.setItem('todos', JSON.stringify(todos))
      console.log(todos)
    }, 100)

  }, [todos])

    return (
    <div className="todo">
      <div className="todo-header">TO-DO APP</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" id="" placeholder="Add Your Task" className="todoInput"/>
        <button onClick={()=>{add()}} className="todoAddButton" >ADD</button>
      </div>
      <div className="todoList">
        {todos.map((item, index)=>{
          return <TodoItems key={index} setTodos={setTodos} id={item.id} display={item.display} text={item.text}/> 
        })}
      </div>
    </div>
  )
}

export default Todo