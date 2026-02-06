import { useState } from 'react';

function TodoForm({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // submit은 페이지 새로고침 되어버리면 아직 localStorage 설정 안되 있어
    onAdd(input);
    setInput(''); // 입력창 초기화
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할일 입력"
      />
    </form>
  );
}

export default TodoForm;
