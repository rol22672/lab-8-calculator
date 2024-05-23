import React from 'react';
import styles from './calculator.module.css';

export interface InputProps {
  value1: string | null;
  operator: string | null;
  value2: string | null;
}

const Input: React.FC<InputProps> = ({ value1, operator, value2 }) => {
  return (
    <div id="input" className={styles.input}>
      {value1} {operator} {value2}
    </div>
  );
};

export default Input;
