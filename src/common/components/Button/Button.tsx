import React from 'react';
import './Button.css';

interface Props {
  children: string | number;
  disabled: boolean;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, disabled, onClick }) => {
  return (
    <button className='button' onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
