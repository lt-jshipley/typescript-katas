// Note this is the code file.

export function mathIt(operator: 'add' | 'subtract' | 'multiply' | 'divide', firstValue: number, secondValue: number): number {
  switch(operator) {
    case 'add': 
      return firstValue + secondValue;
    break;
    case 'subtract': 
      return firstValue - secondValue;
    break;
    case 'multiply': 
      return firstValue * secondValue;
    break;
    case 'divide': 
      return firstValue / secondValue;
    break;
  }
}