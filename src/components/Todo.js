import React,{useState} from 'react';
import Todoform from './Todoform';
import {AiFillCloseCircle} from 'react-icons/ai'
import {TiEdit} from 'react-icons/ti'

function Todo({todos,completeToDo,removeToDo,updateToDo}) {
    const [edit, setEdit] = useState({
        id:null,
        value: ''
    })

    const submitUpdate = value =>{
        updateToDo(edit.id,value)
        setEdit ({    
            id :null,
            value : ''
        })
    }
    if(edit.id){
        return <Todoform edit = {edit} onSubmit={submitUpdate}/>
    }
  return todos.map((todo,index)=>(
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row '} key={index}>
        <div key={todo.id} onClick={()=> completeToDo(todo.id)}>
       {todo.text}
        </div>
        <div className='icons'>
            <AiFillCloseCircle onClick={()=> removeToDo(todo.id)} className='delete-icon'/>
            <TiEdit onClick={()=> setEdit({id:todo.id,value: todo.text})} className='edit-icon'/>
        </div>
    </div>
  ))
}


export default Todo;
