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

  // 체크박스를 클릭하면 toggleTodo함수가 실행되고 map메서드가 Todo목록을 돌면서 체크한 Todo에 해당 하는 id를 가진 Todo에 완료여부를 반전한다(Not 연산한다) - map이 Todo목록을 순회하다가 사용자가 체크한 Todo를 만나면 해당 Todo의 완료 여부 반전
  // 이 함수는 리스트 표시 하는 곳에 써야함
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
      <TodoList items={todo} 완료여부={toggleTodo} />
    </div>
  );
}

export default App;
