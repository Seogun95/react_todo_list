import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { FcApproval, FcClock } from 'react-icons/fc';
import styles from './style/App.module.css';
import Input from './components/Input';
import TodoCard from './components/TodoCard';
import TodoDoneCard from './components/TodoDoneCard';
import './style/reset.css';

function App() {
  const [todoTitle, setTodoTitle] = useState([
    { id: 0, text: 'React 완강 목표', body: '노마드코더 마스터클래스 2월 30일까지', isdone: false },
  ]);

  const [todoDone, setTodoDone] = useState([
    {
      id: 1,
      text: 'React 입문 완강',
      body: '스파르타 코딩클럽 React 입문 2월 4일까지',
      isdone: true,
    },
  ]);

  return (
    <div className={styles.todo__layout}>
      <div className={styles.todo__container}>
        <h1>
          TODO LIST <FaPencilAlt />
        </h1>
        <Input setTodoTitle={setTodoTitle} todoTitle={todoTitle} />
      </div>
      <div className={styles.todo__box__continaer}>
        <div className={styles.todo__box}>
          <h4>
            <FcClock />
            안했다!
          </h4>
          {todoTitle.map((a, i) => {
            return (
              <TodoCard
                key={i}
                todoTitle={todoTitle}
                setTodoTitle={setTodoTitle}
                setTodoDone={setTodoDone}
                todoDone={todoDone}
                text={a.text}
                body={a.body}
                id={a.id}
                isdone={a.isdone}
              />
            );
          })}
        </div>
        <div className={styles.todo__box}>
          <h4>
            <FcApproval />
            다했다!
          </h4>
          {todoDone.map((a, i) => {
            return (
              <TodoDoneCard
                key={i}
                todoTitle={todoTitle}
                setTodoTitle={setTodoTitle}
                setTodoDone={setTodoDone}
                todoDone={todoDone}
                text={a.text}
                body={a.body}
                id={a.id}
                isdone={a.isdone}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
