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
  console.log(todos);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos((prev) => [...prev, newTodo]);
  };

  // 체크박스를 클릭하면 toggleTodo함수가 실행되고 map메서드가 Todo목록을 돌면서 체크한 Todo에 해당 하는 id를 가진 Todo에 완료여부를 반전한다(Not 연산한다) - map이 Todo목록을 순회하다가 사용자가 체크한 Todo를 만나면 해당 Todo의 완료 여부 반전
  // 이 함수는 리스트 표시 하는 곳에 써야함
  // prev는 최신 Todo리스트, todo는 해당 리스트의 요소
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
      <TodoList items={todos} onToggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
