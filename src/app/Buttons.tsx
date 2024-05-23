import React from 'react';
import styles from './calculator.module.css';

export interface ButtonsProps {
  handleClick: (label: string | number) => void;
}

const Buttons: React.FC<ButtonsProps> = ({ handleClick }) => {
  const labels = [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 'AC', 0, '.', '=', '+', '%'];

  return (
    <div id="buttons" className={styles.buttons}>
      {labels.map((label, i) => (
        <button
          type="button"
          key={i}
          onClick={() => handleClick(label)}
          className={styles.button}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
