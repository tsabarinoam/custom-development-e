import React from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCalculator } from '../../context/CalculatorContext';
import { Trash2Icon } from 'lucide-react';

interface CalculatorHistoryProps {
  className?: string;
}

export function CalculatorHistory({ className = '' }: CalculatorHistoryProps) {
  const { state, clearHistory } = useCalculator();
  const { history } = state;

  if (history.length === 0) {
    return (
      <div className={`p-4 text-center text-muted-foreground ${className}`}>
        No calculation history yet.
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <div className="flex justify-between items-center mb-2 px-2">
        <h3 className="text-sm font-medium">History</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearHistory}
          className="h-8 px-2"
        >
          <Trash2Icon className="h-4 w-4" />
          <span className="ml-1">Clear</span>
        </Button>
      </div>
      <ScrollArea className="h-48 rounded-md border">
        <div className="p-4">
          {history.map((entry, index) => (
            <div 
              key={index} 
              className="py-2 border-b border-border last:border-0"
            >
              <div className="text-sm">{entry}</div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}