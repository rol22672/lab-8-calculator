"use client";

import React, { useState } from 'react';
import styles from './calculator.module.css';
import {
  handleDigitClick,
  handleOperatorClick,
  handleEqualsClick,
  handleReset,
  handleDecimalClick
} from './../util/CalculatorLogic';
import Input from './Input';
import Output from './Output';
import Buttons from './Buttons';

const Calculator: React.FC = () => {
  const [value1, setValue1] = useState<string | null>(null);
  const [value2, setValue2] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [output, setOutput] = useState<string | null>(null);

  const handleClick = (label: string | number) => {
    if (label === 'AC') {
      handleReset(setValue1, setValue2, setOperator, setOutput);
    } else if (label === '=') {
      const result = handleEqualsClick(value1, value2, operator) || "";
      setOutput(result);
    } else if (label === '.') {
      handleDecimalClick(value1 === null || operator === null ? 1 : 2, value1, setValue1, value2, setValue2);
    } else if (typeof label === 'number' || label === '0') {
      handleDigitClick(label.toString(), value1 === null || operator === null ? 1 : 2, value1, setValue1, value2, setValue2);
    } else {
      if (value1 !== null && value2 !== null && operator) {
        const result = handleEqualsClick(value1, value2, operator) || "";
        setOutput(result);
        setValue1(result);
        setValue2(null);
        setOperator(label);
      } else {
        handleOperatorClick(label, value1, value2, operator, setValue1, setValue2, setOperator);
      }
    }
  };

  return (
    <form className={styles.form}>
      <main>
        <div id="screen" className={styles.screen}>
          <Input value1={value1} operator={operator} value2={value2} />
          <Output output={output} />
        </div>
        <Buttons handleClick={handleClick} />
      </main>
    </form>
  );
};

export default Calculator;
