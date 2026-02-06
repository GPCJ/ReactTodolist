import { useState } from 'react';

function TodoList({ items, onToggleTodo, delItems }) {
  // 핸들러 함수 선언 없이 이벤트 속성에서 바로 부모 컴포넌트로 반환
  return items.map((item) => {
    return (
      <div className="todo-info" key={item.id}>
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
