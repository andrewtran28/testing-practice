const capitalize = require ('./capitalize');

test('take string and capitalize first letter of string', () => {
    expect(capitalize("apple")).toBe("Apple");
});