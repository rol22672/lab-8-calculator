import { describe, it, expect } from 'vitest';
import { handleDigitClick, handleEqualsClick } from './../util/CalculatorLogic';

// Helper functions to mock state setters
const createStateSetter = <T>(initialValue: T): [(() => T), (newValue: T) => void] => {
  let state = initialValue;
  const setState = (newValue: T) => {
    state = newValue;
  };
  return [(() => state), setState];
};

describe('Calculator Logic - Modulo Operator', () => {
  it('should handle modulo operation correctly', () => {
    const [getValue1, setValue1] = createStateSetter<string | null>('10');
    const [getValue2, setValue2] = createStateSetter<string | null>(null);
    const [getOperator, setOperator] = createStateSetter<string | null>('%');

    handleDigitClick('3', 2, getValue1(), setValue1, getValue2(), setValue2);
    const result = handleEqualsClick(getValue1(), getValue2(), getOperator());
    
    expect(result).toBe('1');  // 10 % 3 = 1
  });
});
