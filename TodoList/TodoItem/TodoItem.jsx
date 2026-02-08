import { useState } from 'react';

function TodoList({ items, onToggleTodo, delItems, onUpdate }) {
  const [editText, setEditText] = useState(''); // 이제 Todo항목을 표시하는 컴포넌트에서도 입력이 필요해졌으니 입력 중인 값을 저장하기 위한 상태 관리
  const [isEditing, setIsEditing] = useState(false); // 수정 하는 중인지 상태 관리
  // 현재 수정 모드 ON/OFF 상태가 Todo 항목 개별로 관리 되고 있지 않아서 하나만 수정하려고 해도 모든 항목이 수정모드로 진입 해버리는 문제 있음
  // 현재 문제점 : 한번에 모든 Todo의 수정모드가 켜지고 꺼지는 문제, 클릭한 항목의 수정창에 포커스가 되지 않는 문제(autoFocus가 문제 같음)
  // 그래도 현재, 수정한 항목에 대해서는 그 항목만 수정 사항이 잘 수정되고는 있음

  const handleToggleEdit = (todo) => {
    console.log('보낼 데이터:' + todo.id, editText);
    onUpdate(todo.id, editText);
    setIsEditing(!isEditing);
  };

  // const handleKeyDown = (e) => {
  //   if (e.key === 'Enter') {
  //     handleToggleEdit();
  //   } else if ((e.key = 'Escape')) {
  //     setIsEditing(false);
  //     setEditText(items.text);
  //   }
  // };

  return items.map((item) => {
    return (
      <div className="todo-info" key={item.id}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onToggleTodo(item.id)}
        />
        {/* // 수정 모드 ON/OFF에 따라 내용만 표시할지 입력을 받을지 정함 */}
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleToggleEdit(item)}
            // onKeyDown={handleKeyDown}
            autoFocus
            // 입력창 밖을 클릭 시 취소
            // onBlur={() => setIsEditing(false)}
          />
        ) : (
          <span onClick={() => setIsEditing(true)}>{item.text}</span>
        )}

        <button type="button" onClick={() => delItems(item.id)}>
          삭제
        </button>
      </div>
    );
  });
}

export default TodoList;
