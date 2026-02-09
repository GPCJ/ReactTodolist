import { useState } from 'react';
import { useRef } from 'react';

function TodoInput({ onAdd }) {
  const [input, setInput] = useState('');
  const [isError, setIsError] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('현재 입력값:', input);

    inputRef.current?.focus();
    try {
      // 입력 값이 공백이면 isError는 true가 됨
      if (!input.trim()) {
        setIsError(true);
        throw new Error('내용을 입력해주세요');
      }

      onAdd(input);
      setInput(''); // 입력창 초기화
    } catch (error) {
      inputRef.current?.focus();
      console.error(error.message);
    }
  };

  return (
    // trim으로 인해서 아무 값을 입력하지 않으면 false가 됨
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={input}
        // 글자를 치기 시작하면
        onChange={(e) => {
          setInput(e.target.value);
          // 이전에 공백을 submit해서 에러 상태였어도 값을 입력 중이면 Error상태를 false로 바꿈
          if (isError) setIsError(false);
        }}
        // 에러 메시지를 placeholder에 표시
        placeholder={isError ? '내용을 입력하고 추가해주세요!' : '할일 입력'}
        // 에러 상태 일 때 기존 class에 error class를 추가
        className={isError ? 'input-todo error' : 'input-todo'}
      />
      <button type="submit" onClick={handleSubmit}>
        추가
      </button>
    </form>
  );
}

export default TodoInput;
