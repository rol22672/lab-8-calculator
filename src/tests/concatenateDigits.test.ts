import { describe, it, expect } from 'vitest';
import { handleDigitClick } from './../util/CalculatorLogic';

// Helper functions to mock state setters
const createStateSetter = <T>(initialValue: T): [() => T, (newValue: T) => void] => {
  let state = initialValue;
  const setState = (newValue: T) => {
    state = newValue;
  };
  return [(() => state), setState];
};

describe('Calculator Logic - Concatenate Digits', () => {
  it('should concatenate digits correctly', () => {
    const [getValue1, setValue1] = createStateSetter<string | null>('123');
    const [getValue2, setValue2] = createStateSetter<string | null>(null);

    handleDigitClick('4', 1, getValue1(), setValue1, getValue2(), setValue2);
    expect(getValue1()).toBe('1234');
  });
});
