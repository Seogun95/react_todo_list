import React from 'react';
import styles from '../style/TodoCard.module.css';
import { FiTrash2 } from 'react-icons/fi';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import { Userprops } from './Input';

export type TodoProps = {
  todoTitle: Userprops[];
  setTodoTitle: (e: Userprops[]) => void;
  setTodoDone: (e: Userprops[]) => void;
  todoDone: Userprops[];
  text: string;
  body: string;
  id: number;
  isdone: boolean;
};

const TodoCard = ({
  text,
  body,
  id,
  todoTitle,
  setTodoTitle,
  setTodoDone,
  todoDone,
  isdone,
}: TodoProps) => {
  const moveToDone = (id: number) => {
    let deleteTodo = todoTitle.filter((_, i) => todoTitle[i].id !== id);
    let addToDone = todoTitle.filter((_, i) => todoTitle[i].id === id);
    addToDone[0].isdone = true;
    setTodoTitle(deleteTodo);
    setTodoDone([...todoDone, ...addToDone]);
  };

  const deleteTodo = (id: number) => {
    let deleteList = todoTitle.filter((_, i) => todoTitle[i].id !== id);
    setTodoTitle(deleteList);
  };

  return (
    <div
      className={styles.todo__cardBox}
      style={{ border: isdone ? '3px solid #9ed260' : '3px solid #fe645c' }}
    >
      <div style={{ padding: '2rem' }}>
        <p className={styles.todo__title}>{text}</p>
        <p className={styles.todo__desc}>{body}</p>
      </div>
      <div className={styles.todo__cardBox__button_box}>
        <button
          style={{ backgroundColor: isdone ? '#fe645c' : '#ffc332' }}
          onClick={() => moveToDone(id)}
        >
          {isdone ? <RiArrowGoBackLine /> : <FaCheck />}
        </button>
        <button style={{ backgroundColor: '#ff493f' }} onClick={() => deleteTodo(id)}>
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
