import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState(['HELLO']);
  return (
    <div className='App'>
      <h1>TODO LIST</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let todoValue = e.target['todo'].value;
          let tempTodoList = todoList;
          tempTodoList.push(todoValue);
          setTodoList(tempTodoList);
        }}
      >
        <input
          type='text'
          name='todo'
          id='todo'
          required
          placeholder='Write something'
        />
        <button type='submit'>Submit</button>
      </form>
      <div className='listView'>
        {todoList.map((value, index) => {
          return <ul key={index}>{value}</ul>;
        })}
      </div>
    </div>
  );
}

export default App;
