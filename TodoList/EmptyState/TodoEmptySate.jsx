// alert, console.log를 사용해서 메시지를 표현해봤는데 아무래도 직관성이 떨어져 보여서 빈 Todo리스트 알림 div를 제작함
function TodoEmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">📝</div>
      <h3 className="empty-state__title">리스트가 텅 비어있어요...</h3>
      <p className="empty-state__description">새로운 목표를 작성해 보세요!</p>
    </div>
  );
}

export default TodoEmptyState;
