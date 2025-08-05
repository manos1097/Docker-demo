const functions = require('./functions');

test('shows usrname', () => {
    const username = 'Manos';
    const result = functions.greet(username);
    expect(result).toBe(`Hello ${username}`);
});