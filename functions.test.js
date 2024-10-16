// const capitalize = require ('./functions');
// const reverseString = require ('./functions');

import { capitalize, reverseString, calculator, caesar } from "./functions";

test('take string and capitalize first letter of string', () => {
    expect(capitalize("apple")).toBe("Apple");
});

test('take string and return it reversed.', () => {
    expect(reverseString("The string.")).toBe(".gnirts ehT");
});

test('calculator with add, subtract, multiply, and divide functionality.', () => {
    expect(calculator.add(4,7)).toEqual(11);
    expect(calculator.subtract(10,2)).toEqual(8);
    expect(calculator.subtract(4,10)).toEqual(-6);
    expect(calculator.multiply(4,12)).toEqual(48);
    expect(calculator.multiply(4,0.3)).toBeCloseTo(1.2);
    expect(calculator.divide(30,3)).toEqual(10);
    expect(calculator.divide(5,2)).toBeCloseTo(2.5);
});

test('takes a string and a shift factor and returns it with each character shifted.', () => {
    expect(caesar.cipher("Hello There!", 3)).toBe("Khoor Wkhuh!");
    expect(caesar.cipher("y", 28)).toBe("a");
    expect(caesar.cipher("123", 3)).toBe("456");
    expect(caesar.cipher("123", 203)).toBe("456");
    expect(caesar.cipher("Hello, what's 2+2? It's 4!", 3)).toBe("Khoor, zkdw'v 5+5? Lw'v 7!");
})