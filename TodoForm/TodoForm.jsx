import { useState } from 'react';

function TodoForm({ onAdd }) {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(input);
    setInput(''); // 입력창 초기화
  };

  return (
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

// 왜 handleSubmit함수가 안쓰일까?
