import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className='App'>
      <h1>TODO LIST</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          let todoValue = e.target['todo'].value;
          setTodoList((prev) => {
            return [...prev, todoValue];
          });
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
          return (
            <div>
              <ul key={index}>
                {value}
                <button
                  onClick={() => {
                    const tempList = todoList.filter((_, idx) => idx !== index);
                    setTodoList(tempList);
                  }}
                >
                  DELE
                </button>
                <button
                  onClick={() => {
                    let tempList = todoList;
                    tempList[index] = 'update';
                    setTodoList(tempList);
                  }}
                >
                  Update
                </button>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
