# Scientific Calculator

A powerful scientific calculator built with React, TypeScript, and Tailwind CSS. This calculator provides a comprehensive set of mathematical functions, memory operations, and calculation history tracking.

## Features

### Basic Operations
- Addition, subtraction, multiplication, and division
- Percentage calculations
- Sign toggling
- Clear and clear entry functions

### Scientific Functions
- Trigonometric functions (sin, cos, tan)
- Inverse trigonometric functions (asin, acos, atan)
- Logarithmic functions (log, ln)
- Exponential functions (exp, power)
- Square root and cube root
- Constants (π, e)

### Memory Operations
- Memory add (M+)
- Memory subtract (M-)
- Memory recall (MR)
- Memory clear (MC)

### Additional Features
- Calculation history tracking
- Degree/Radian mode switching
- Scientific mode toggle
- Error handling for invalid operations
- Responsive design for all screen sizes

## Technical Implementation

### Architecture
The calculator is built using a modular component architecture with React Context for state management. The main components include:

- **Calculator**: The main container component
- **CalculatorDisplay**: Displays the current value and operation mode
- **CalculatorKeypad**: Contains all calculator buttons and handles user input
- **CalculatorHistory**: Shows the history of calculations

### State Management
The calculator state is managed using React Context, which includes:

- Current and previous values
- Current operation
- Display value
- Memory value
- Calculation history
- Mode settings (scientific, degree/radian)
- Error state

### Mathematical Operations
All mathematical operations are implemented in a separate utility module, ensuring accuracy and proper error handling for edge cases like division by zero or invalid logarithm inputs.

## Usage

1. Basic Mode: Perform standard arithmetic operations
2. Scientific Mode: Access advanced mathematical functions
3. History Tab: View and clear calculation history
4. Memory Functions: Store and recall values from memory

## Development

This calculator is built with:

- React 19
- TypeScript
- Tailwind CSS
- Radix UI Components

## License

This project is licensed under the MIT License.