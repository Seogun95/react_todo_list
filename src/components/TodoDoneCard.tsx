import React from 'react';
import styles from '../style/TodoCard.module.css';
import { FiTrash2 } from 'react-icons/fi';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import { TodoProps } from './TodoCard';

const TodoDoneCard = ({
  text,
  body,
  id,
  todoTitle,
  setTodoTitle,
  setTodoDone,
  todoDone,
  isdone,
}: TodoProps) => {
  const moveToTodo = (id: number) => {
    let deleteDone = todoDone.filter((_, i) => todoDone[i].id !== id);
    let addTodoDone = todoDone.filter((_, i) => todoDone[i].id === id);
    addTodoDone[0].isdone = false;
    setTodoDone(deleteDone);
    setTodoTitle([...todoTitle, ...addTodoDone]);
  };

  const deleteDoneside = (id: number) => {
    let deleteDoneList = todoDone.filter((_, i) => todoDone[i].id !== id);
    setTodoDone(deleteDoneList);
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
          onClick={() => moveToTodo(id)}
        >
          {isdone ? <RiArrowGoBackLine /> : <FaCheck />}
        </button>
        <button style={{ backgroundColor: '#ff493f' }} onClick={() => deleteDoneside(id)}>
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

export default TodoDoneCard;
