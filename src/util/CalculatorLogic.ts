const MAX_LENGTH = 9;

export const handleDigitClick = (
  digit: string,
  position: 1 | 2,
  value1: string | null,
  setValue1: (value: string | null) => void,
  value2: string | null,
  setValue2: (value: string | null) => void
) => {
  if (position === 1) {
    if (value1 !== null && value1.length < MAX_LENGTH) {
      const newValue = `${value1}${digit}`;
      setValue1(newValue);
    } else if (value1 === null) {
      setValue1(digit);
    }
  } else {
    if (value2 !== null && value2.length < MAX_LENGTH) {
      const newValue = `${value2}${digit}`;
      setValue2(newValue);
    } else if (value2 === null) {
      setValue2(digit);
    }
  }
};

export const handleDecimalClick = (
  position: 1 | 2,
  value1: string | null,
  setValue1: (value: string | null) => void,
  value2: string | null,
  setValue2: (value: string | null) => void
) => {
  if (position === 1) {
    if (value1 === null) {
      setValue1('0.');
    } else if (!value1.includes('.') && value1.length < MAX_LENGTH) {
      setValue1(value1 + '.');
    }
  } else {
    if (value2 === null) {
      setValue2('0.');
    } else if (!value2.includes('.') && value2.length < MAX_LENGTH) {
      setValue2(value2 + '.');
    }
  }
};

export const handleOperatorClick = (
  op: string,
  value1: string | null,
  value2: string | null,
  operator: string | null,
  setValue1: (value: string | null) => void,
  setValue2: (value: string | null) => void,
  setOperator: (op: string | null) => void
) => {
  if (value1 !== null && value2 !== null && operator) {
    const result = handleEqualsClick(value1, value2, operator) || "";
    setValue1(result);
    setValue2(null);
    setOperator(op);
  } else if (value1 !== null) {
    setOperator(op);
  }
};

export const handleEqualsClick = (
  value1: string | null,
  value2: string | null,
  operator: string | null
) => {
  if (value1 !== null && value2 !== null && operator) {
    let result;
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Oi';
        break;
      case '%':
        result = num1 % num2;
        break;
      default:
        result = 'Error';
    }
    if (typeof result === 'number') {
      if (Number.isInteger(result)) {
        return result.toString();
      } else {
        return result.toFixed(3);
      }
    }
    return result.toString();
  }
};

export const handleReset = (
  setValue1: (value: string | null) => void,
  setValue2: (value: string | null) => void,
  setOperator: (op: string | null) => void,
  setOutput: (output: string | null) => void
) => {
  setValue1(null);
  setValue2(null);
  setOperator(null);
  setOutput(null);
};
