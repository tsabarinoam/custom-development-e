/**
 * Calculator Utility Functions
 * 
 * This module provides functions for performing calculator operations
 * including basic arithmetic and scientific calculations.
 */

// Constants
export const PI = Math.PI;
export const E = Math.E;

// Basic arithmetic operations
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

// Scientific operations
export function square(a: number): number {
  return a * a;
}

export function squareRoot(a: number): number {
  if (a < 0) {
    throw new Error("Cannot calculate square root of negative number");
  }
  return Math.sqrt(a);
}

export function cubeRoot(a: number): number {
  return Math.cbrt(a);
}

export function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

export function exp(a: number): number {
  return Math.exp(a);
}

export function log10(a: number): number {
  if (a <= 0) {
    throw new Error("Cannot calculate logarithm of non-positive number");
  }
  return Math.log10(a);
}

export function ln(a: number): number {
  if (a <= 0) {
    throw new Error("Cannot calculate natural logarithm of non-positive number");
  }
  return Math.log(a);
}

// Trigonometric functions
export function sin(angle: number, isDegrees: boolean = false): number {
  const radians = isDegrees ? (angle * Math.PI) / 180 : angle;
  return Math.sin(radians);
}

export function cos(angle: number, isDegrees: boolean = false): number {
  const radians = isDegrees ? (angle * Math.PI) / 180 : angle;
  return Math.cos(radians);
}

export function tan(angle: number, isDegrees: boolean = false): number {
  const radians = isDegrees ? (angle * Math.PI) / 180 : angle;
  // Check for undefined values (tan(90°) is undefined)
  if (isDegrees && (Math.abs(angle) % 180 === 90)) {
    throw new Error("Tangent is undefined at this angle");
  }
  return Math.tan(radians);
}

// Inverse trigonometric functions
export function asin(value: number, inDegrees: boolean = false): number {
  if (value < -1 || value > 1) {
    throw new Error("Inverse sine input must be between -1 and 1");
  }
  const radians = Math.asin(value);
  return inDegrees ? (radians * 180) / Math.PI : radians;
}

export function acos(value: number, inDegrees: boolean = false): number {
  if (value < -1 || value > 1) {
    throw new Error("Inverse cosine input must be between -1 and 1");
  }
  const radians = Math.acos(value);
  return inDegrees ? (radians * 180) / Math.PI : radians;
}

export function atan(value: number, inDegrees: boolean = false): number {
  const radians = Math.atan(value);
  return inDegrees ? (radians * 180) / Math.PI : radians;
}

// Additional functions
export function factorial(n: number): number {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("Factorial is only defined for non-negative integers");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export function percentage(value: number, percent: number): number {
  return (value * percent) / 100;
}

export function reciprocal(value: number): number {
  if (value === 0) {
    throw new Error("Cannot calculate reciprocal of zero");
  }
  return 1 / value;
}

export function absolute(value: number): number {
  return Math.abs(value);
}

// Format number for display
export function formatNumber(value: number): string {
  // Handle special cases
  if (!isFinite(value)) {
    return value === Infinity ? "∞" : "-∞";
  }
  if (isNaN(value)) {
    return "Error";
  }
  
  // Format the number
  const absValue = Math.abs(value);
  if (absValue > 1e10 || (absValue < 1e-10 && absValue > 0)) {
    // Use scientific notation for very large or very small numbers
    return value.toExponential(10);
  } else {
    // Use fixed notation with up to 10 decimal places
    return value.toFixed(10).replace(/\.?0+$/, "");
  }
}

// Parse expression and evaluate
export function evaluateExpression(expression: string): number {
  try {
    // This is a simplified version - in a real calculator, you would use a proper parser
    // eslint-disable-next-line no-new-func
    return Function(`"use strict"; return (${expression})`)();
  } catch (error) {
    throw new Error("Invalid expression");
  }
}