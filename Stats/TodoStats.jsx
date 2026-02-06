import { useState } from 'react';

function TodoStats({ items }) {
  // 전체 Todo 수
  const totalTodo = items.length;
  // 완료한 Todo 수
  const completedTodo = items.filter((item) => item.completed === true).length;
  // 진행률(Todo가 없으면 NaN가 표시되는 문제 단락 평가로 해결)
  const percentProgress = Math.round((completedTodo / totalTodo) * 100) || 0;

  return (
    <div className="progress-info">
      <span className="progress-info__count">
        완료: {completedTodo}/{totalTodo}
      </span>
      <span className="progress-info__percent">
        ({percentProgress.toFixed(0)}%)
      </span>
    </div>
  );
}

export default TodoStats;
