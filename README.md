# 실행 방법

- npm install
- npm run dev

# 컴포넌트 구조

- App : 메인 컴포넌트
  - TodoHeader : 페이지 제목, 소제목 컴포넌트
  - TodoInput : Todo 입력 컴포넌트
  - TodoList : Todo 리스트 컴포넌트
  - TodoStats : Todo 진행률 컴포넌트
  - TodoEmptyState : Todo가 없을 때 보여주는 컴포넌트

# 상태 설명

- App : 입력된 모든 Todo들을 총괄
- TodoInput : 새로운 Todo 입력 상태 관리
  - 입력 중인 텍스트 상태
  - 추가하려는 Todo의 빈 값 여부에 대한 error 상태
    - 빈 값일 경우 입력창을 하이라이트하여 사용자에게 알림

# 불변성 업데이트 예시

- 새로운 Todo 추가 함수
  ```javascript
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos((prev) => [...prev, newTodo]);
  };
  ```
  push 메서드 등으로 기존 배열에 추가하는 것이 아니라, 얕은 복사 방식을 활용해 새로운 배열을 생성하여 상태를 업데이트
