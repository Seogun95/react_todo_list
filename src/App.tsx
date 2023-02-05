import { log } from 'console';
import React, { useState } from 'react';

import './App.css';

function App() {
  //useState는 값을 정하기 위해 만드는 것이다.
  const [todoInput, setTodoInput] = useState('');
  const [textInput, setTextInput] = useState('');
  //todo title
  const [todoTitle, setTodoTitle] = useState([{ id: 0, text: '밖에 나가서 해물찜 먹기', body: '노래방 가기', isdone: false }]);

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

  const submitBtnHandler = () => {
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
              <button>완료</button>
              <button>삭제</button>
            </div>
          );
        })}
      </div>
      <div>
        <h1>완료 한 일</h1>
        <div>
          <h3>밥 먹기</h3>
          <h4>짜장면 먹기</h4>
          <button>취소</button>
          <button>삭제</button>
        </div>
      </div>
    </div>
  );
}

export default App;
