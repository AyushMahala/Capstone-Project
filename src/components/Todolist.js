import React,{useState} from 'react';
import Todo from './Todo';
import Todoform from './Todoform';

function Todolist() {
    const [todos, setTodos] = useState([]);
    const addToDo = (todo)=>{
      if(!todo.text || /^\s*$/.test(todo.text)){
        return
      }
      const newTodos = [todo, ...todos];
      setTodos(newTodos);
      console.log(newTodos)
    }
    const completeToDo = (id)=>{
        let updatedTodos = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos);
    }
  return (
    <div>
      <h1>What's the plan for today?</h1>
      <Todoform onSubmit={addToDo}/>
      <Todo todos={todos} completeToDo={completeToDo}/>
    </div>
  );
}

export default Todolist;
