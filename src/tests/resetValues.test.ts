import { describe, it, expect } from 'vitest';
import { handleReset } from './../util/CalculatorLogic';

// Helper functions to mock state setters
const createStateSetter = <T>(initialValue: T): [(() => T), (newValue: T) => void] => {
  let state = initialValue;
  const setState = (newValue: T) => {
    state = newValue;
  };
  return [(() => state), setState];
};

describe('Calculator Logic - Reset Values', () => {
  it('should reset all values correctly', () => {
    const [getValue1, setValue1] = createStateSetter<string | null>('123');
    const [getValue2, setValue2] = createStateSetter<string | null>('456');
    const [getOperator, setOperator] = createStateSetter<string | null>('+');
    const [getOutput, setOutput] = createStateSetter<string | null>('579');

    handleReset(setValue1, setValue2, setOperator, setOutput);
    expect(getValue1()).toBeNull();
    expect(getValue2()).toBeNull();
    expect(getOperator()).toBeNull();
    expect(getOutput()).toBeNull();
  });
});
