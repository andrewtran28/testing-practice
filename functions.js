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

export { capitalize, reverseString, calculator };