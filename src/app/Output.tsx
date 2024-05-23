import React from 'react';
import styles from './calculator.module.css';

export interface OutputProps {
  output: string | null;
}

const Output: React.FC<OutputProps> = ({ output }) => {
  return (
    <div id="output" className={styles.output}>
      {output}
    </div>
  );
};

export default Output;
