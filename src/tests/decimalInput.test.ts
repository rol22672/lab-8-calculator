import { describe, it, expect } from 'vitest';
import { handleDigitClick, handleDecimalClick } from './../util/CalculatorLogic';

// Helper functions to mock state setters
const createStateSetter = <T>(initialValue: T): [(() => T), (newValue: T) => void] => {
  let state = initialValue;
  const setState = (newValue: T) => {
    state = newValue;
  };
  return [(() => state), setState];
};

describe('Calculator Logic - Decimal Input', () => {
  it('should handle decimal input correctly', () => {
    const [getValue1, setValue1] = createStateSetter<string | null>('123');
    const [getValue2, setValue2] = createStateSetter<string | null>(null);

    handleDecimalClick(1, getValue1(), setValue1, getValue2(), setValue2);
    expect(getValue1()).toBe('123.');

    handleDigitClick('4', 1, getValue1(), setValue1, getValue2(), setValue2);
    expect(getValue1()).toBe('123.4');
  });
});
