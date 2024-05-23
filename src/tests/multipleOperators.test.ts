import { describe, it, expect } from 'vitest';
import { handleDigitClick, handleOperatorClick } from './../util/CalculatorLogic';

// Helper functions to mock state setters
const createStateSetter = <T>(initialValue: T): [(() => T), (newValue: T) => void] => {
  let state = initialValue;
  const setState = (newValue: T) => {
    state = newValue;
  };
  return [(() => state), setState];
};

describe('Calculator Logic - Multiple Operators', () => {
  it('should handle multiple operators correctly', () => {
    const [getValue1, setValue1] = createStateSetter<string | null>('2');
    const [getValue2, setValue2] = createStateSetter<string | null>(null);
    const [getOperator, setOperator] = createStateSetter<string | null>(null);

    // First operation: 2 + 3
    handleDigitClick('3', 2, getValue1(), setValue1, getValue2(), setValue2);
    handleOperatorClick('+', getValue1(), getValue2(), getOperator(), setValue1, setValue2, setOperator);
    handleOperatorClick('+', getValue1(), getValue2(), getOperator(), setValue1, setValue2, setOperator);

    expect(getValue1()).toBe('5');  // 2 + 3 = 5
    expect(getValue2()).toBeNull();
    expect(getOperator()).toBe('+');
  });
});
