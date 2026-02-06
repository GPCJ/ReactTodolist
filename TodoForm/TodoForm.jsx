import { useState } from 'react';

function TodoForm({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // submit은 페이지 새로고침 되어버리면 아직 localStorage 설정 안되 있어
    onAdd(input);
    setInput(''); // 입력창 초기화
  };

  return (
    // onSubmit 즉 submit이 이루어 지면 handleSubmit함수를 실행
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </form>
  );
}

export default TodoForm;

// addTodo함수를 부모 컴포넌트에서 onAdd라는 파라미터명으로 받아왔음
/* addTodo함수가 실행되면 text라는 파라미터명으로 들어온 값이 newTodo라는 객체에 text라는 자리에 들어가야함
그런데 여기서 text가 들어갈 자리가 객체 안에 있기 때문에 text 파라미터는 파라미터 값으로 key와 value를 받아와야함 
(key는 text, value는 To내용 이런식으로 받아야 할 것 같음)*/

// 일단 입력 받는 컴포넌트(TodoForm 컴포넌트)에 useState로 입력 받은 값에 대한 상태 관리가 필요함
// 그래야 초기값이 ''(공백)인 useState가 새로운 값이 들어옴을 감지 가능함
// hook(useState)이 없으면 컴포넌트는 한번 return을 반환하고 끝나버림 하지만 hook을 추가하면 상태 변화를 감지해서 상태 변화를 적용한 return을 반환함

// 자식 컴포넌트에 onAdd가 파라미터로 들어옴 ->
