import React,{useState} from 'react';
import Todoform from './Todoform';
import {AiFillCloseCircle} from 'react-icons/ai'
import {TiEdit} from 'react-icons/ti'

function Todo({todos,completeToDo}) {
    const [edit, setEdit] = useState({
        id:"null",
        value: ''
    })
  return todos.map((todo,index)=>(
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row '} key={index}>
        <div key={todo.id} onClick={()=> completeToDo(todo.id)}>
       {todo.text}
        </div>
        <div className='icons'>
            <AiFillCloseCircle/>
            <TiEdit />
        </div>
    </div>
  ))
}


export default Todo;
