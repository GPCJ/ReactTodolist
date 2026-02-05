import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <div className="todo-container">
      <h1>TODO</h1>
      <h2>할 일 목록</h2>
      <TodoInput onAdd={setTodo(() => {})}></TodoInput>
      <TodoList items={todo}></TodoList>
    </div>
  );
}

// 입력 컴포넌트
function TodoInput({ todo, setTodo }) {
  return (
    <>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
    </>
  );
}

// 리스트화 컴포넌트
function TodoList({ todo }) {
  const items = [todo];
  return (
    <>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
