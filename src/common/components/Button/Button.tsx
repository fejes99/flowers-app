import React from 'react';
import './Button.css';

interface Props {
  children: string;
  disabled: boolean;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, disabled, onClick }) => (
  <button className='button' onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

export default Button;
