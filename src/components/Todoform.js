import React,{useState} from 'react';

function Todoform(props) {
    const  [input,setInput] = useState('fellow');

    const handleChange = e =>{
      setInput(e.target.value);
    }

    const handleSubmit = (e)=>{
    e.preventDefault();

    props.onSubmit({
      id:Math.floor(Math.random()*10000),
      text:input
    });
    setInput('');
    };


  return (
    <form  className="todo-form" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder='Add a todo' value={input} name="text" className='todo-input' />
        <button  className='todo-button'>Add Todo</button>
    </form> 
  );
}

export default Todoform;