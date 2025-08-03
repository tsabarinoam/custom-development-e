import React from 'react';
import { useCalculator } from '../../context/CalculatorContext';

interface CalculatorDisplayProps {
  className?: string;
}

export function CalculatorDisplay({ className = '' }: CalculatorDisplayProps) {
  const { state } = useCalculator();
  const { display, error, isDegreeMode } = state;

  return (
    <div className={`bg-card rounded-lg p-4 mb-4 ${className}`}>
      <div className="flex justify-between items-center mb-1">
        <div className="text-sm text-muted-foreground">
          {isDegreeMode ? 'DEG' : 'RAD'}
        </div>
        {error && (
          <div className="text-sm text-destructive">
            {error}
          </div>
        )}
      </div>
      <div className="text-right text-4xl font-mono font-semibold overflow-x-auto whitespace-nowrap">
        {display}
      </div>
    </div>
  );
}