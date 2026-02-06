import { useState } from 'react';
import './App.css';
import '../Header/Header';
import TodoHeader from '../Header/Header';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoItem/TodoItem';
import TodoStats from '../Stats/TodoStats';
import TodoEmptyState from '../TodoList/EmptyState/TodoEmptySate';

function App() {
  // Todo리스트 상태
  const [todos, setTodos] = useState([]);

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
      <TodoStats items={todos} />
      <TodoList items={todos} onToggleTodo={toggleTodo} delItems={deleteTodo} />
      <TodoEmptyState items={todos} />
    </div>
  );
}

export default App;
