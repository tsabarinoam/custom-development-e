import React from 'react';
import { Button } from '@/components/ui/button';
import { useCalculator } from '../../context/CalculatorContext';

interface CalculatorKeyProps {
  label: string;
  onClick: () => void;
  variant?: 'default' | 'secondary' | 'outline' | 'destructive' | 'ghost';
  className?: string;
}

function CalculatorKey({ label, onClick, variant = 'outline', className = '' }: CalculatorKeyProps) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={`h-14 text-lg font-medium ${className}`}
    >
      {label}
    </Button>
  );
}

interface CalculatorKeypadProps {
  className?: string;
}

export function CalculatorKeypad({ className = '' }: CalculatorKeypadProps) {
  const {
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
    state,
  } = useCalculator();

  const { isScientificMode, isDegreeMode } = state;

  return (
    <div className={`grid gap-2 ${className}`}>
      {/* Memory and Clear Row */}
      <div className="grid grid-cols-4 gap-2">
        <CalculatorKey label="MC" onClick={memoryClear} variant="ghost" />
        <CalculatorKey label="MR" onClick={memoryRecall} variant="ghost" />
        <CalculatorKey label="M+" onClick={memoryAdd} variant="ghost" />
        <CalculatorKey label="M-" onClick={memorySubtract} variant="ghost" />
      </div>

      {/* Scientific Functions (Conditional Rendering) */}
      {isScientificMode && (
        <>
          <div className="grid grid-cols-4 gap-2">
            <CalculatorKey label={isDegreeMode ? "DEG" : "RAD"} onClick={toggleDegreeMode} variant="secondary" />
            <CalculatorKey label="x²" onClick={() => scientificOperation('square')} variant="secondary" />
            <CalculatorKey label="√" onClick={() => scientificOperation('sqrt')} variant="secondary" />
            <CalculatorKey label="^" onClick={() => setOperation('^')} variant="secondary" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <CalculatorKey label="sin" onClick={() => scientificOperation('sin')} variant="secondary" />
            <CalculatorKey label="cos" onClick={() => scientificOperation('cos')} variant="secondary" />
            <CalculatorKey label="tan" onClick={() => scientificOperation('tan')} variant="secondary" />
            <CalculatorKey label="1/x" onClick={() => scientificOperation('reciprocal')} variant="secondary" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <CalculatorKey label="log" onClick={() => scientificOperation('log')} variant="secondary" />
            <CalculatorKey label="ln" onClick={() => scientificOperation('ln')} variant="secondary" />
            <CalculatorKey label="e" onClick={() => scientificOperation('e')} variant="secondary" />
            <CalculatorKey label="π" onClick={() => scientificOperation('pi')} variant="secondary" />
          </div>
        </>
      )}

      {/* Standard Keypad */}
      <div className="grid grid-cols-4 gap-2">
        <CalculatorKey label="C" onClick={clear} variant="destructive" />
        <CalculatorKey label="CE" onClick={clearEntry} variant="destructive" />
        <CalculatorKey label="±" onClick={toggleSign} variant="secondary" />
        <CalculatorKey label="÷" onClick={() => setOperation('/')} variant="secondary" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <CalculatorKey label="7" onClick={() => appendDigit('7')} />
        <CalculatorKey label="8" onClick={() => appendDigit('8')} />
        <CalculatorKey label="9" onClick={() => appendDigit('9')} />
        <CalculatorKey label="×" onClick={() => setOperation('*')} variant="secondary" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <CalculatorKey label="4" onClick={() => appendDigit('4')} />
        <CalculatorKey label="5" onClick={() => appendDigit('5')} />
        <CalculatorKey label="6" onClick={() => appendDigit('6')} />
        <CalculatorKey label="-" onClick={() => setOperation('-')} variant="secondary" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <CalculatorKey label="1" onClick={() => appendDigit('1')} />
        <CalculatorKey label="2" onClick={() => appendDigit('2')} />
        <CalculatorKey label="3" onClick={() => appendDigit('3')} />
        <CalculatorKey label="+" onClick={() => setOperation('+')} variant="secondary" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <CalculatorKey label="%" onClick={percentage} variant="secondary" />
        <CalculatorKey label="0" onClick={() => appendDigit('0')} />
        <CalculatorKey label="." onClick={appendDecimal} />
        <CalculatorKey label="=" onClick={calculate} variant="default" className="bg-primary" />
      </div>
    </div>
  );
}