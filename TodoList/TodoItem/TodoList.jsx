import { useState } from 'react';

function TodoList({ items, onToggleTodo, delItems }) {
  // const handleCheck = (todoId) => {
  //   onToggleTodo(todoId);
  // };

  return items.map((item) => {
    return (
      <div className="todo-card" key={item.id}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onToggleTodo(item.id)}
        />
        <span>{item.text}</span>
        <button type="button" onClick={() => delItems(item.id)}>
          삭제
        </button>
      </div>
    );
  });
}

export default TodoList;
