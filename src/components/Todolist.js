import React,{useState} from 'react';
import Todoform from './Todoform';

function Todolist() {
    const [todos, seTodos] = useState([]);
  return (
    <div>
      <h1>What's the plan for today?</h1>
      <Todoform/>
    </div>
  );
}

export default Todolist;
