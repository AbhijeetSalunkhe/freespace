import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([...taskList, { value: task, isComplete: false }]);
  };

  const deleteTask = (e) => {
    setTaskList((list) => {
      return list.filter((data) => data !== e);
    });
  };

  const handleTask = (e) => {
    console.log('selectedTask', e.value);
    const tasks = taskList.map((data) => {
      console.log('data', data);
      if (data.value === e.value) {
        data.isComplete = true;
      }
      return data;
    });
    setTaskList(tasks);
  };

  return (
    <>
      <table>
        {taskList?.map((list) => (
          <tr>
            <td
              className={list?.isComplete ? 'green' : 'red'}
              key={list?.value}
              onClick={(e) => handleTask(list)}
            >
              {list?.value}
            </td>
            <td>
              {' '}
              <button onClick={(e) => deleteTask(list?.value)}>
                delete
              </button>{' '}
            </td>
          </tr>
        ))}
      </table>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Add task</label>
        <input type="text" value={task} onChange={(e) => handleInput(e)} />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
