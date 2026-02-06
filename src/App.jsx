import { useState } from 'react';
import './App.css';
import '../Header/Header';
import TodoHeader from '../Header/Header';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoItem/TodoList';

function App() {
  // Todo리스트 상태
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 공부하기', completed: false },
    { id: 2, text: '점심 먹기', completed: true },
    { id: 3, text: '운동하기', completed: false },
  ]);

  // 추가
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos((prev) => [...prev, newTodo]);
  };

  // 삭제
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // 토글
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div className="todo-container">
      <TodoHeader />
      <TodoForm onAdd={addTodo} />
      <TodoList items={todos} onToggleTodo={toggleTodo} delItems={deleteTodo} />
    </div>
  );
}

export default App;
