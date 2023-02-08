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

    const updateToDo = (todoId,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
          }
          setTodos(prev => prev.map(item =>(item.id == todoId ? newValue : item)))
    }

    const removeToDo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id );
        setTodos(removeArr);
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
      <Todo todos={todos} completeToDo={completeToDo} removeToDo={removeToDo} updateToDo={updateToDo}/>
    </div>
  );
}

export default Todolist;
