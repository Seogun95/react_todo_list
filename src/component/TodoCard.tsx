import React, { useState } from 'react';
import styles from 'App.module.css';

interface TodoProps {
  title: string;
  body: string;
  btnfn: (e: React.MouseEvent<HTMLElement>) => void;
  deleteBtn: (e: React.MouseEvent<HTMLElement>) => void;
  btnText: string;
}

function TodoCard({ title, body, btnfn, btnText, deleteBtn }: TodoProps) {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{body}</h4>
      <button onClick={btnfn}>{btnText}</button>
      <button onClick={deleteBtn}>삭제</button>
    </div>
  );
}

export default TodoCard;
