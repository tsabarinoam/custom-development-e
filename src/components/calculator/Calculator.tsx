import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { CalculatorDisplay } from './CalculatorDisplay';
import { CalculatorKeypad } from './CalculatorKeypad';
import { CalculatorHistory } from './CalculatorHistory';
import { useCalculator } from '../../context/CalculatorContext';

interface CalculatorProps {
  className?: string;
}

export function Calculator({ className = '' }: CalculatorProps) {
  const { toggleScientificMode, state } = useCalculator();
  const { isScientificMode } = state;

  return (
    <Card className={`w-full max-w-md mx-auto shadow-lg ${className}`}>
      <CardContent className="p-4">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Scientific Calculator</h2>
          <div className="flex items-center space-x-2">
            <Switch 
              id="scientific-mode" 
              checked={isScientificMode}
              onCheckedChange={toggleScientificMode}
            />
            <Label htmlFor="scientific-mode">Scientific</Label>
          </div>
        </div>

        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="calculator" className="space-y-4">
            <CalculatorDisplay />
            <CalculatorKeypad />
          </TabsContent>
          
          <TabsContent value="history">
            <CalculatorHistory />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}