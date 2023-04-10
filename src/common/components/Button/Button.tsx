import React from 'react';
import './Button.css';

type buttonType = 'success' | 'fail';

interface Props {
  children: string | number;
  disabled: boolean;
  type: buttonType;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, disabled, type, onClick }) => {
  const className = type === 'fail' ? 'button button-fail' : 'button';
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
