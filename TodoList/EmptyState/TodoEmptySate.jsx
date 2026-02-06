function TodoEmptyState({ items }) {
  if (items.length === 0) console.log('Todo를 작성해주세요!');
  return;
}

export default TodoEmptyState;
