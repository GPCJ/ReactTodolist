import { useState } from 'react';
import './App.css';
import '../Header/Header';
import TodoHeader from '../Header/Header';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoItem/TodoItem';

function App() {
  const [todo, setTodos] = useState([
    { id: 1, text: '리액트 공부하기', completed: false },
    { id: 2, text: '점심 먹기', completed: true },
    { id: 3, text: '운동하기', completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos((prev) => [...prev, newTodo]);
  };

  // const toggleTodo = (id) => {
  //   setTodos(prev => )
  // }

  return (
    <div className="todo-container">
      <TodoHeader />
      <TodoForm onAdd={addTodo} />
      <TodoList items={todo} />
    </div>
  );
}

// // 입력 컴포넌트
// function TodoInput({ todo, setTodo }) {
//   return (
//     <>
//       <input value={todo} onChange={(e) => setTodo(e.target.value)} />
//     </>
//   );
// }

// // 리스트화 컴포넌트
// function TodoList({ todo }) {
//   const items = [todo];
//   return (
//     <>
//       <ul>
//         {items.map((item, index) => {
//           return <li key={index}>{item}</li>;
//         })}
//       </ul>
//     </>
//   );
// }

export default App;
