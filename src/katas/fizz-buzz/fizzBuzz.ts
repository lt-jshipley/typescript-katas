export function performKata(): void {
  for(let i = 0; i < 15; i++) {
    console.log(`${ i } = ${ fizzBuzz(i) }`);
  }
}

export function fizzBuzz(value: number): string | number {
  return value;
}