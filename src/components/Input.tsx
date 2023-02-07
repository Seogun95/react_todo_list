import React, { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import styles from '../style/Input.module.css';

interface Userprops {
  id: number;
  text: string;
  body: string;
  isdone: boolean;
}

interface InputProps {
  setTodoTitle: (e: Userprops[]) => void;
  todoTitle: Userprops[];
}

const Input = ({ setTodoTitle, todoTitle }: InputProps) => {
  const [todoInput, setTodoInput] = useState('');
  const [textInput, setTextInput] = useState('');

  const inputTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setTodoInput(value);
  };

  const textTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setTextInput(value);
  };

  const submitBtnHandler = () => {
    if (todoInput === '') {
      alert('할 일은 필수 사항 입니다.');
      return;
    } else {
      const obj = {
        id: Date.now(),
        text: todoInput,
        body: textInput,
        isdone: false,
      };

      setTodoTitle([...todoTitle, obj]);
      setTodoInput('');
      setTextInput('');
    }
  };

  return (
    <>
      <div className={styles.todo__input__container}>
        <label htmlFor={'todoInput'}>
          <span>* </span>할 일
        </label>
        <input
          id={'todoInput'}
          className={styles.todo__input}
          value={todoInput}
          onChange={inputTodo}
          placeholder={'할 일을 작성해주세요'}
        />
      </div>
      <div className={styles.todo__input__container}>
        <label htmlFor={'textInput'}>
          <span>* </span>자세히
        </label>
        <input
          id={'textInput'}
          className={styles.todo__input}
          value={textInput}
          onChange={textTodo}
          placeholder={'할 일을 보충할 말을 작성해주세요'}
        />
      </div>
      <button className={styles.todo__submit} onClick={submitBtnHandler}>
        <HiPlus />
      </button>
    </>
  );
};

export default Input;
