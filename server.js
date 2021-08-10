const fs = require('fs');

const sumNumbers = (a, b) => {
    return a + b;
}
fs.writeFileSync('hello.txt', 'Hello from nodeJS');