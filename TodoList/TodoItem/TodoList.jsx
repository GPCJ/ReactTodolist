import { useState } from 'react';
import '../../src/TodoList.css';

function TodoList({ items, onToggleTodo }) {
  const handleCheck = (todoId) => {
    onToggleTodo(todoId);
  };

  return items.map((item) => {
    return (
      <div className="todo-card">
        <input
          type="checkbox"
          // 처음에는 부모 컴포넌트 데이터 대로 체크 상태를 표시하다가 onChange되면 TodoList컴포넌트 내에서 변경된 checked 상태로 렌더링 되어야함
          // 아하 이 문제는 자식 컴포넌트에서 체크 값이 바뀌면 바로 부모 컴포넌트로 가서 바뀐 상태로 렌더링 하고 해야겠네
          // 그런데 그 바뀌 값이 표시 되는 코드가 자식 컴포넌트에 있으니까 자식 컴포넌트도 상태 관리를 안예 안하면 안됨...
          // handleCheck함수에 파라미터 2개 받아서 하는 현재 컴포넌트 상태 관리에 쓰고 하나는 부모 컴포넌트에 반환해서 Todo 테이터 변경해야하는데...
          // handleCheck는 사용자지정 함수라서 파라미터 제한이 없는데 아까 전에 시도하던, setIsCompleted로 ckecked값 받아오던 것이랑 햇갈림
          // 다 만들고 보니 자식 컴포넌트에게 상태 관리를 할 필요가 없었음... 그냥 부모 컴포넌트에게 값만 반환하면 렌더링 진행되고 자식 컴포넌트가 반환한 값을 따로 처리해서 다시 상속해주면 그걸 받고 자식 컴포넌트가 다시 그걸로 박스 체크 여부를 렌더링.
          checked={item.completed}
          onChange={(e) => handleCheck(item.id)}
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
// onToggleTodo(id) 이런 형식으로 전달이 되어야함
// 부모 컴포넌트에서 함수를 받아왔기 때문에 구지 여기서 체크박스 변경 여부에 따라 실제 todo값을 변동할 필요가 없음
// 그래서 그냥 checked로 해당 Todo가 원래 체크 상태였는지(완료 상태였는지) 표시하고, onChange로 체크 상태가 변경된 요소를 함수에 태워서 부모 컴포넌트로 보냄,

// 자식 컴포넌트에서 부모 컴포넌트로

// 동작 순서
// setIsCompleted(checked)함수 호출, onToggleTodo(todoId)함수 호출 -> onToggleTodo(todoId)로 인해 부모 컴포넌트에서 해당 ID의 completed값을 반전하고 자식 컴보넌트인 본 컴포넌트에게 렌더링된(반전된) completed값을 상속해줌
// 이로 인해 input태그에 부모컴포넌트로 인해 반전된 checked값이 적용됨
