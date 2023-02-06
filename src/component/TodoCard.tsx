import React, { useState } from 'react';
import styles from '../App.module.css';
import { FiTrash2 } from 'react-icons/fi';

interface TodoProps {
  title: string;
  body: string;
  btnfn: (e: React.MouseEvent<HTMLElement>) => void;
  deleteBtn: (e: React.MouseEvent<HTMLElement>) => void;
  btnText: JSX.Element;
  bgcolor: string;
}

function TodoCard({ title, body, btnfn, btnText, deleteBtn, bgcolor }: TodoProps) {
  return (
    <div className={styles.todo__cardBox}>
      <div style={{ padding: '2rem' }}>
        <p className={styles.todo__title}>{title}</p>
        <p className={styles.todo__desc}>{body}</p>
      </div>
      <div className={styles.todo__cardBox__button_box}>
        <button style={{ backgroundColor: bgcolor }} onClick={btnfn}>
          {btnText}
        </button>
        <button style={{ backgroundColor: '#fe645c' }} onClick={deleteBtn}>
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
