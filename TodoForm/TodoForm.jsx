import { useState } from 'react';

function TodoForm({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (inputTodo) => {
    inputTodo.preventDefault();
    try {
      if (!input.trim()) throw new Error('내용을 입력해주세요');

      onAdd(input);
      setInput(''); // 입력창 초기화
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    // trim으로 인해서 아무 값을 입력하지 않으면 false가 됨
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할일 입력"
        className="input-todo"
      />
    </form>
  );
}

export default TodoForm;
