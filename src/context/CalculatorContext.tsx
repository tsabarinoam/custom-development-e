import React, { createContext, useContext, useState, ReactNode } from 'react';
import * as calculatorUtils from '../utils/calculator';

// Define the calculator state type
interface CalculatorState {
  display: string;
  currentValue: string;
  previousValue: string | null;
  operation: string | null;
  memory: number;
  history: string[];
  isDegreeMode: boolean;
  isScientificMode: boolean;
  error: string | null;
}

// Define the calculator context type
interface CalculatorContextType {
  state: CalculatorState;
  appendDigit: (digit: string) => void;
  appendDecimal: () => void;
  setOperation: (op: string) => void;
  calculate: () => void;
  clear: () => void;
  clearEntry: () => void;
  toggleSign: () => void;
  percentage: () => void;
  scientificOperation: (op: string) => void;
  memoryAdd: () => void;
  memorySubtract: () => void;
  memoryRecall: () => void;
  memoryClear: () => void;
  toggleDegreeMode: () => void;
  toggleScientificMode: () => void;
  clearHistory: () => void;
}

// Create the calculator context
const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

// Initial state for the calculator
const initialState: CalculatorState = {
  display: '0',
  currentValue: '0',
  previousValue: null,
  operation: null,
  memory: 0,
  history: [],
  isDegreeMode: true,
  isScientificMode: false,
  error: null,
};

// Calculator provider component
export function CalculatorProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CalculatorState>(initialState);

  // Helper function to update display and current value
  const updateDisplay = (value: string) => {
    setState(prevState => ({
      ...prevState,
      display: value,
      currentValue: value,
      error: null,
    }));
  };

  // Helper function to add to history
  const addToHistory = (entry: string) => {
    setState(prevState => ({
      ...prevState,
      history: [...prevState.history, entry],
    }));
  };

  // Helper function to handle errors
  const handleError = (errorMessage: string) => {
    setState(prevState => ({
      ...prevState,
      display: 'Error',
      error: errorMessage,
    }));
  };

  // Append a digit to the current value
  const appendDigit = (digit: string) => {
    setState(prevState => {
      // If there's an error, start fresh
      if (prevState.error) {
        return {
          ...prevState,
          display: digit,
          currentValue: digit,
          error: null,
        };
      }

      // If current value is '0', replace it with the digit
      if (prevState.currentValue === '0') {
        return {
          ...prevState,
          display: digit,
          currentValue: digit,
        };
      }

      // Otherwise append the digit
      const newValue = prevState.currentValue + digit;
      return {
        ...prevState,
        display: newValue,
        currentValue: newValue,
      };
    });
  };

  // Append a decimal point to the current value
  const appendDecimal = () => {
    setState(prevState => {
      // If there's an error, start fresh with '0.'
      if (prevState.error) {
        return {
          ...prevState,
          display: '0.',
          currentValue: '0.',
          error: null,
        };
      }

      // If current value already has a decimal point, do nothing
      if (prevState.currentValue.includes('.')) {
        return prevState;
      }

      // Otherwise append the decimal point
      const newValue = prevState.currentValue + '.';
      return {
        ...prevState,
        display: newValue,
        currentValue: newValue,
      };
    });
  };

  // Set the operation to perform
  const setOperation = (op: string) => {
    setState(prevState => {
      // If there's an error, clear it
      if (prevState.error) {
        return {
          ...initialState,
        };
      }

      try {
        // If there's already an operation pending, calculate it first
        if (prevState.previousValue !== null && prevState.operation !== null) {
          const prev = parseFloat(prevState.previousValue);
          const current = parseFloat(prevState.currentValue);
          let result: number;

          switch (prevState.operation) {
            case '+':
              result = calculatorUtils.add(prev, current);
              break;
            case '-':
              result = calculatorUtils.subtract(prev, current);
              break;
            case '*':
              result = calculatorUtils.multiply(prev, current);
              break;
            case '/':
              result = calculatorUtils.divide(prev, current);
              break;
            default:
              result = current;
          }

          const resultStr = calculatorUtils.formatNumber(result);
          addToHistory(`${prevState.previousValue} ${prevState.operation} ${prevState.currentValue} = ${resultStr}`);

          return {
            ...prevState,
            display: resultStr,
            currentValue: resultStr,
            previousValue: resultStr,
            operation: op,
          };
        }

        // Otherwise, store the current value and operation
        return {
          ...prevState,
          previousValue: prevState.currentValue,
          operation: op,
          currentValue: '0',
          display: prevState.currentValue,
        };
      } catch (error) {
        return {
          ...prevState,
          display: 'Error',
          error: error instanceof Error ? error.message : 'Unknown error',
        };
      }
    });
  };

  // Calculate the result
  const calculate = () => {
    setState(prevState => {
      // If there's an error or no operation, do nothing
      if (prevState.error || prevState.previousValue === null || prevState.operation === null) {
        return prevState;
      }

      try {
        const prev = parseFloat(prevState.previousValue);
        const current = parseFloat(prevState.currentValue);
        let result: number;

        switch (prevState.operation) {
          case '+':
            result = calculatorUtils.add(prev, current);
            break;
          case '-':
            result = calculatorUtils.subtract(prev, current);
            break;
          case '*':
            result = calculatorUtils.multiply(prev, current);
            break;
          case '/':
            result = calculatorUtils.divide(prev, current);
            break;
          default:
            result = current;
        }

        const resultStr = calculatorUtils.formatNumber(result);
        addToHistory(`${prevState.previousValue} ${prevState.operation} ${prevState.currentValue} = ${resultStr}`);

        return {
          ...prevState,
          display: resultStr,
          currentValue: resultStr,
          previousValue: null,
          operation: null,
        };
      } catch (error) {
        return {
          ...prevState,
          display: 'Error',
          error: error instanceof Error ? error.message : 'Unknown error',
        };
      }
    });
  };

  // Clear the calculator (reset to initial state)
  const clear = () => {
    setState(initialState);
  };

  // Clear the current entry
  const clearEntry = () => {
    setState(prevState => ({
      ...prevState,
      display: '0',
      currentValue: '0',
      error: null,
    }));
  };

  // Toggle the sign of the current value
  const toggleSign = () => {
    setState(prevState => {
      if (prevState.error) {
        return prevState;
      }

      const newValue = prevState.currentValue.startsWith('-')
        ? prevState.currentValue.substring(1)
        : '-' + prevState.currentValue;

      return {
        ...prevState,
        display: newValue,
        currentValue: newValue,
      };
    });
  };

  // Calculate percentage
  const percentage = () => {
    setState(prevState => {
      if (prevState.error) {
        return prevState;
      }

      try {
        const current = parseFloat(prevState.currentValue);
        let result: number;

        if (prevState.previousValue !== null) {
          const prev = parseFloat(prevState.previousValue);
          result = calculatorUtils.percentage(prev, current);
        } else {
          result = current / 100;
        }

        const resultStr = calculatorUtils.formatNumber(result);
        return {
          ...prevState,
          display: resultStr,
          currentValue: resultStr,
        };
      } catch (error) {
        return {
          ...prevState,
          display: 'Error',
          error: error instanceof Error ? error.message : 'Unknown error',
        };
      }
    });
  };

  // Perform scientific operations
  const scientificOperation = (op: string) => {
    setState(prevState => {
      if (prevState.error) {
        return prevState;
      }

      try {
        const current = parseFloat(prevState.currentValue);
        let result: number;
        let operationText = '';

        switch (op) {
          case 'square':
            result = calculatorUtils.square(current);
            operationText = `sqr(${current})`;
            break;
          case 'sqrt':
            result = calculatorUtils.squareRoot(current);
            operationText = `√(${current})`;
            break;
          case 'cbrt':
            result = calculatorUtils.cubeRoot(current);
            operationText = `cbrt(${current})`;
            break;
          case 'reciprocal':
            result = calculatorUtils.reciprocal(current);
            operationText = `1/(${current})`;
            break;
          case 'factorial':
            result = calculatorUtils.factorial(current);
            operationText = `fact(${current})`;
            break;
          case 'sin':
            result = calculatorUtils.sin(current, prevState.isDegreeMode);
            operationText = `sin(${current}${prevState.isDegreeMode ? '°' : ' rad'})`;
            break;
          case 'cos':
            result = calculatorUtils.cos(current, prevState.isDegreeMode);
            operationText = `cos(${current}${prevState.isDegreeMode ? '°' : ' rad'})`;
            break;
          case 'tan':
            result = calculatorUtils.tan(current, prevState.isDegreeMode);
            operationText = `tan(${current}${prevState.isDegreeMode ? '°' : ' rad'})`;
            break;
          case 'asin':
            result = calculatorUtils.asin(current, prevState.isDegreeMode);
            operationText = `asin(${current})`;
            break;
          case 'acos':
            result = calculatorUtils.acos(current, prevState.isDegreeMode);
            operationText = `acos(${current})`;
            break;
          case 'atan':
            result = calculatorUtils.atan(current, prevState.isDegreeMode);
            operationText = `atan(${current})`;
            break;
          case 'log':
            result = calculatorUtils.log10(current);
            operationText = `log(${current})`;
            break;
          case 'ln':
            result = calculatorUtils.ln(current);
            operationText = `ln(${current})`;
            break;
          case 'exp':
            result = calculatorUtils.exp(current);
            operationText = `exp(${current})`;
            break;
          case 'pi':
            result = calculatorUtils.PI;
            operationText = 'π';
            break;
          case 'e':
            result = calculatorUtils.E;
            operationText = 'e';
            break;
          default:
            return prevState;
        }

        const resultStr = calculatorUtils.formatNumber(result);
        addToHistory(`${operationText} = ${resultStr}`);

        return {
          ...prevState,
          display: resultStr,
          currentValue: resultStr,
        };
      } catch (error) {
        return {
          ...prevState,
          display: 'Error',
          error: error instanceof Error ? error.message : 'Unknown error',
        };
      }
    });
  };

  // Memory functions
  const memoryAdd = () => {
    setState(prevState => {
      if (prevState.error) {
        return prevState;
      }

      const current = parseFloat(prevState.currentValue);
      return {
        ...prevState,
        memory: prevState.memory + current,
      };
    });
  };

  const memorySubtract = () => {
    setState(prevState => {
      if (prevState.error) {
        return prevState;
      }

      const current = parseFloat(prevState.currentValue);
      return {
        ...prevState,
        memory: prevState.memory - current,
      };
    });
  };

  const memoryRecall = () => {
    setState(prevState => {
      const memoryStr = calculatorUtils.formatNumber(prevState.memory);
      return {
        ...prevState,
        display: memoryStr,
        currentValue: memoryStr,
        error: null,
      };
    });
  };

  const memoryClear = () => {
    setState(prevState => ({
      ...prevState,
      memory: 0,
    }));
  };

  // Toggle between degree and radian mode
  const toggleDegreeMode = () => {
    setState(prevState => ({
      ...prevState,
      isDegreeMode: !prevState.isDegreeMode,
    }));
  };

  // Toggle between basic and scientific mode
  const toggleScientificMode = () => {
    setState(prevState => ({
      ...prevState,
      isScientificMode: !prevState.isScientificMode,
    }));
  };

  // Clear history
  const clearHistory = () => {
    setState(prevState => ({
      ...prevState,
      history: [],
    }));
  };

  // Create the context value
  const contextValue: CalculatorContextType = {
    state,
    appendDigit,
    appendDecimal,
    setOperation,
    calculate,
    clear,
    clearEntry,
    toggleSign,
    percentage,
    scientificOperation,
    memoryAdd,
    memorySubtract,
    memoryRecall,
    memoryClear,
    toggleDegreeMode,
    toggleScientificMode,
    clearHistory,
  };

  return (
    <CalculatorContext.Provider value={contextValue}>
      {children}
    </CalculatorContext.Provider>
  );
}

// Custom hook to use the calculator context
export function useCalculator() {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
}