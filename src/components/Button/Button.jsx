import React from 'react';
import s from './Button.module.css';
import clsx from 'clsx'; // clsx is a utility for combining class names

const StyledButton = ({ children, onClick, className }) => {
  return (
    <div className={clsx(s.styledButton, className)} onClick={onClick}>
      {children}
    </div>
  );
};

export default StyledButton;