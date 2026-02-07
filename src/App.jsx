import { useState } from 'react';
import './App.css';
import '../Header/Header';
import TodoHeader from '../Header/Header';
import TodoInput from '../TodoForm/TodoInput';
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
      <TodoInput onAdd={addTodo} />
      {/* Todo리스트에 아무 Todo가 없다면 진행률과 Todo 요소를 표시하지 않고 빈 Todo 알림 컴포넌트를 렌더링 */}
      {todos.length === 0 ? (
        <TodoEmptyState />
      ) : (
        <>
          <TodoStats items={todos} />
          <TodoList
            items={todos}
            onToggleTodo={toggleTodo}
            delItems={deleteTodo}
          />
        </>
      )}
    </div>
  );
}

export default App;
