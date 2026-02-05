import { useState } from 'react';

function TodoForm({ onAdd }) {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(input);
    setInput('');
  };

  return (
    <form>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </form>
  );
}

export default TodoForm;
