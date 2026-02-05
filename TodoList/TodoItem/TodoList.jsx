import { useState } from 'react';

function TodoList({ items, 완료여부 }) {
  const [todo, setTodos] = useState(items);
  // TodoForm에서 새로 Todo가 추가되면, App에서 그 상태 변화를 감지하고 그걸 TodoList에게 알려줘서(App에 특정 변수가 변하면 TodoList에서도 알 수 있는 방법이 있나?)
  return items.map((item, index) => {
    return (
      <div>
        <input type="checkbox" />
        <span>{item.text}</span>
      </div>
    );
  });
}

export default TodoList;
