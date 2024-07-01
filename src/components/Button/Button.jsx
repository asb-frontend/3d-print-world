import React from 'react';
import s from './Button.module.css';

const StyledButton = ({ children, onClick }) => {
  return (
    <div className={s.styledButton} onClick={onClick}>
      {children}
    </div>
  );
};

export default StyledButton;
