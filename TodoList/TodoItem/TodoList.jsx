import { useState } from 'react';
import '../../src/TodoList.css';

function TodoList({ items, 완료여부 }) {
  const [todo, setTodos] = useState(items);
  // 체크를 누르면 체크 박스 상태가 setIschecked에 저장되고 (기본값은 false)-> isChecked에 저장됨
  const [isCompleted, setIsCompleted] = useState(false);
  const handleCheck = (e) => {
    setIsCompleted((isCompleted) => !e);
    완료여부(e);
  };

  return items.map((item) => {
    return (
      <div className="todo-card">
        <input
          type="checkbox"
          // 처음에는 부모 컴포넌트 데이터 대로 체크 상태를 표시하다가 onChange되면 TodoList컴포넌트 내에서 변경된 checked 상태로 렌더링 되어야함
          // 아하 이 문제는 자식 컴포넌트에서 체크 값이 바뀌면 바로 부모 컴포넌트로 가서 바뀐 상태로 렌더링 하고 해야겠네
          // 그런데 그 바뀌 값이 표시 되는 코드가 자식 컴포넌트에 있으니까 자식 컴포넌트도 상태 관리를 안예 안하면 안됨...
          checked={item.completed}
          onChange={(e) => setIsCompleted(handleCheck(!e.target.checked))}
        />
        <span>{item.text}</span>
      </div>
    );
  });
}

export default TodoList;

// 이제 Todo 추가 반영까지는 했는데 Todo리스트 개별 항목 디자인이 없는 상태, 삭제 기능도 없는 상태
// 체크박스에 체크를 하면 해당 Todo의 ID를 추적할 수 있어야 하고,  그 ID를 기반으로 app컴포넌트에서 최종적으로 해당 ID를 가진 체크박스 상태를 반전하고 렌더링
// 현재 겪고 있는 문제 : 체크를 누른 Todo 항목의 ID를 어떻게 확인하지?
// 완료여부(id) 이런 형식으로 전달이 되어야함
// 부모 컴포넌트에서 함수를 받아왔기 때문에 구지 여기서 체크박스 변경 여부에 따라 실제 todo값을 변동할 필요가 없음
// 그래서 그냥 checked로 해당 Todo가 원래 체크 상태였는지(완료 상태였는지) 표시하고, onChange로 체크 상태가 변경된 요소를 함수에 태워서 부모 컴포넌트로 보냄,

// 자식 컴포넌트에서 부모 컴포넌트로
