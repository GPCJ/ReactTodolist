import { useState, useRef, useEffect } from 'react';

function TodoList({ items, onToggleTodo, delItems, onUpdate }) {
  const [editText, setEditText] = useState(items.text); // 이제 Todo항목을 표시하는 컴포넌트에서도 입력이 필요해졌으니 입력 중인 값을 저장하기 위한 상태 관리
  const [editTextId, setEditTextId] = useState(''); // Todo 렌더링 시에 수정하려고 했던 Todo의 ID가 맞는지 확인용
  const [isEditing, setIsEditing] = useState(false); // 수정 하는 중인지 상태 관리
  const inputRef = useRef(null);

  const handleToggleEdit = (todo) => {
    onUpdate(todo.id, editText);
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (e, todo) => {
    console.log(e, todo);
    if (e.key === 'Enter') {
      handleToggleEdit(todo);
    } else if (e.key === 'Escape') {
      setIsEditing(false);
    } else {
      return;
    }
  };

  return items.map((item) => {
    return (
      <div className="todo-info" key={item.id}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onToggleTodo(item.id)}
        />
        {/* // 수정 모드 ON/OFF에 따라 내용만 표시할지 입력을 받을지 정함 */}
        {isEditing && item.id === editTextId ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            ref={inputRef}
            onKeyDown={(e) => handleKeyDown(e, item)}
            autoFocus
          />
        ) : (
          <span
            onClick={() => {
              setIsEditing(true);
              setEditTextId(item.id);
              setEditText(item.text);
            }}
          >
            {item.text}
          </span>
        )}

        <button type="button" onClick={() => delItems(item.id)}>
          삭제
        </button>
      </div>
    );
  });
}

export default TodoList;
