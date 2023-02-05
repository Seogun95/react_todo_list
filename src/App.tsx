import React, { useState } from 'react';
import './App.css';

function App() {
  //useState는 값을 정하기 위해 만드는 것이다.
  const [todoInput, setTodoInput] = useState('');
  const [textInput, setTextInput] = useState('');
  //todo title
  const [todoTitle, setTodoTitle] = useState([{ id: 1, text: '밖에 나가서 해물찜 먹기', body: '노래방 가기', isdone: false }]);
  //done state
  const [todoDone, setTodoDone] = useState([{ id: 0, text: '짜장면 먹기', body: '한결님 사랑해요', isdone: true }]);

  const inputTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event; // event.target.value 와 같은 새로운 신문법이다.
    setTodoInput(value);
  };

  const textTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setTextInput(value);
  };

  //TODO: TS에서 제출 버튼 눌렀을때, 빈값 출력 버그 수정!!!
  const submitBtnHandler = () => {
    if (todoInput === '' || textInput === '') {
      return;
    } else {
      const obj = {
        id: todoTitle.length + 1,
        text: todoInput,
        body: textInput,
        isdone: false,
      };
      // 배열안에서 스프레드로 이전에 있던 값 todoTitle에 새로운 값 obj를 추가한다.
      // 그리고 state값이 변경 되면서 새로운 주소값을 할당받아 리렌더링이 일어난다. 이것이 불변셩
      setTodoTitle([...todoTitle, obj]);
      setTodoInput('');
      setTextInput('');
    }
  };

  // 완료 버튼: 할일 ➜ 완료한 일로 이동
  const moveToDone = (id: number) => {
    let deleteTodo = todoTitle.filter((_, i) => todoTitle[i].id !== id);
    let addToDone = todoTitle.filter((_, i) => todoTitle[i].id === id); //할일 ➜ 완료한 일로 이동
    addToDone[0].isdone = true;
    setTodoTitle(deleteTodo);
    setTodoDone([...todoDone, ...addToDone]);
  };

  // 취소 버튼: 완료한일 ➜ 할일로 이동
  const moveToTodo = (id: number) => {
    let deleteDone = todoDone.filter((_, i) => todoDone[i].id !== id);
    let addTodoDone = todoDone.filter((_, i) => todoDone[i].id === id);
    addTodoDone[0].isdone = false;
    setTodoDone(deleteDone);
    setTodoTitle([...todoTitle, ...addTodoDone]);
  };

  // 삭제 버튼: 할일 삭제 버튼
  const deleteTodo = (id: number) => {
    // filter는 새배열을 만들어 배열을 반환 했기 때문에 구조분해 할당 할 필요 없다. (이전에 있던 배열을 버림)
    let deleteList = todoTitle.filter((_, i) => todoTitle[i].id !== id);
    setTodoTitle(deleteList);
  };

  // 삭제 버튼: 완료한 일 삭제 버튼
  const deleteDoneside = (id: number) => {
    let deleteDoneList = todoDone.filter((_, i) => todoDone[i].id !== id);
    setTodoDone(deleteDoneList);
  };

  return (
    <div className="App">
      <input value={todoInput} onChange={inputTodo} />
      <input value={textInput} onChange={textTodo} />
      <button onClick={submitBtnHandler}>제출</button>
      <div>
        <h1>할 일</h1>
        {/*map 함수를 사용하여 바인딩을 한다*/}
        {/*map사용할때는 반드시 Key값이 들어가야한다.*/}
        {todoTitle.map((a, i) => {
          return (
            <div key={i}>
              <h3>{a.text}</h3>
              <h4>{a.body}</h4>
              <button onClick={() => moveToDone(a.id)}>{a.isdone ? '취소' : '완료'}</button>
              <button onClick={() => deleteTodo(a.id)}>삭제</button>
            </div>
          );
        })}
      </div>
      <div>
        <h1>완료 한 일</h1>
        {todoDone.map((a, i) => {
          return (
            <div key={i}>
              <h3>{a.text}</h3>
              <h4>{a.body}</h4>
              <button onClick={() => moveToTodo(a.id)}>{a.isdone ? '취소' : '완료'}</button>
              <button onClick={() => deleteDoneside(a.id)}>삭제</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
