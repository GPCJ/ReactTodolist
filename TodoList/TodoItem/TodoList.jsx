import { useState } from 'react';
import '../../src/TodoList.css';

function TodoList({ items, 완료여부 }) {
  const [todo, setTodos] = useState(items);
  // 이제 Todo 추가 반영까지는 했는데 Todo리스트 개별 항목 디자인이 없는 상태, 삭제 기능도 없는 상태
  return items.map((item, index) => {
    return (
      <div className="todo-card">
        <input type="checkbox" />
        <span>{item.text}</span>
      </div>
    );
  });
}

export default TodoList;
