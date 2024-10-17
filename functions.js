function capitalize(string) {
    if (typeof string === 'string') {
        if (string.charAt(0).match(/[a-z]/i)) {
            let capitalString = string.charAt(0).toUpperCase() + string.slice(1);
            return capitalString;
        }
    } else {
        return false;
    }

    return capitalizeString;
}

function reverseString(string) {
    let reversedStr = "";

    for (var i = string.length; i >= 0; i--) {
        reversedStr += string.charAt(i);
    }

    return reversedStr;
}

const calculator = (() => {
    const add = (a,b) => a + b;
    const subtract = (a,b) => a - b;
    const multiply = (a,b) => a * b;
    const divide = (a,b) => a / b;

    return { add, subtract, multiply, divide };
})();

const caesar = (() => {
    const cipher = (string, key) => {
        if (typeof string !== "string" || typeof key !== "number"){
            throw new Error('Invalid string or key!');
        }

        let code = "";
        for (var i = 0; i < string.length; i++) {
            const index = string.charAt(i);
            if (Number(index)) {
                code += shiftNumber(index, key);
            } else if (index.match(/[a-z]/i)) {
                code += shiftLetter(index, key);
            } else {
                code += index;
            }
        }

        return code;
    }

    const shiftLetter = (letter, key) => {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        let code = letter.toLowerCase();

        if ((alphabet.indexOf(code) + key) > 25) {
            let rollOver = (alphabet.indexOf(code) + key) % 26;
            code = alphabet.charAt(rollOver);
        } else {
            code = alphabet.charAt(alphabet.indexOf(code) + key);
        }

        if (letter.toUpperCase() === letter) {
            return code.toUpperCase();
        } else {
            return code;
        }
    };

    const shiftNumber = (num, key) => {
        const numbers = "0123456789";
        
        if ((numbers.indexOf(num) + key) > 9) {
            let rollOver = (numbers.indexOf(num) + key) % 10;
            return rollOver;
        } else {
            return numbers.indexOf(num) + key;
        }
    }

    return { cipher };
})();

function analyzeArray (array) {
    let checkArray = array.every((element) => typeof element === 'number');

    if (typeof array !== 'object' || !checkArray) {
        throw new Error('Input is not an array containing numbers');
    }

    let analyze = {
        average: "",
        min: "",
        max: "",
        length: "",
    }

    let sum = 0;

    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }

    analyze.average = sum / array.length;
    analyze.min = Math.min(...array);
    analyze.max = Math.max(...array);
    analyze.length = array.length;

    return analyze;
}

export { capitalize, reverseString, calculator, caesar, analyzeArray };