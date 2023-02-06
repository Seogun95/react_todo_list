import React, { useState } from 'react';
import TodoCard from './component/TodoCard';
import { HiPlus } from 'react-icons/hi';
import { FaPencilAlt, FaCheck } from 'react-icons/fa';
import { FcApproval, FcClock } from 'react-icons/fc';
import { RiArrowGoBackLine } from 'react-icons/ri';
import style from './App.module.css';
import './reset.css';

function App() {
  //useState는 값을 정하기 위해 만드는 것이다.
  const [todoInput, setTodoInput] = useState('');
  const [textInput, setTextInput] = useState('');
  //todo title
  const [todoTitle, setTodoTitle] = useState([
    { id: 0, text: 'React 완강 목표', body: '노마드코더 마스터클래스 2월 30일까지', isdone: false },
  ]);
  //done state
  const [todoDone, setTodoDone] = useState([
    {
      id: 1,
      text: 'React 입문 완강',
      body: '스파르타 코딩클럽 React 입문 2월 4일까지',
      isdone: true,
    },
  ]);

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
        id: Date.now(),
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
    <div className={style.todo__layout}>
      <div className={style.todo__container}>
        <h1>
          TODO LIST <FaPencilAlt />
        </h1>
        <div className={style.todo__input__container}>
          <label htmlFor={'todoInput'}>
            <span>* </span>할일
          </label>
          <input
            id={'todoInput'}
            className={style.todo__input}
            value={todoInput}
            onChange={inputTodo}
            placeholder={'할일을 작성해주세요'}
          />
        </div>
        <div className={style.todo__input__container}>
          <label htmlFor={'textInput'}>
            <span>* </span>자세히
          </label>
          <input
            id={'textInput'}
            className={style.todo__input}
            value={textInput}
            onChange={textTodo}
            placeholder={'할일을 보충할 말을 작성해주세요'}
          />
        </div>
        <button className={style.todo__submit} onClick={submitBtnHandler}>
          <HiPlus />
        </button>
      </div>
      <div className={style.todo__box__continaer}>
        <div className={style.todo__box}>
          <h4>
            <FcClock />
            안했다!
          </h4>
          {/*map 함수를 사용하여 바인딩을 한다*/}
          {/*map사용할때는 반드시 Key값이 들어가야한다.*/}
          {todoTitle.map((a, i) => {
            /*key는 고유 식별자 이기 때문에 prop으로 넘길 필요 없다.*/
            return (
              <TodoCard
                key={i}
                title={a.text}
                body={a.body}
                btnfn={() => moveToDone(a.id)}
                btnText={a.isdone ? <RiArrowGoBackLine /> : <FaCheck />}
                bgcolor={a.isdone ? '#fe645c' : '#ffc332'}
                borderColor={a.isdone ? '3px solid #9ed260' : '3px solid #fe645c'}
                deleteBtn={() => deleteTodo(a.id)}
              />
            );
          })}
        </div>
        <div className={style.todo__box}>
          <h4>
            <FcApproval />
            다했다!
          </h4>
          {todoDone.map((a, i) => {
            return (
              <TodoCard
                key={i}
                title={a.text}
                body={a.body}
                btnfn={() => moveToTodo(a.id)}
                btnText={a.isdone ? <RiArrowGoBackLine /> : <FaCheck />}
                bgcolor={a.isdone ? '#fe645c' : '#ffc332'}
                borderColor={a.isdone ? '3px solid #9ed260' : '3px solid #fe645c'}
                deleteBtn={() => deleteDoneside(a.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
