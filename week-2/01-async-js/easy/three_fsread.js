const fs = require('fs');

function expensiveOperation(iterations) {
  for (let i = 0; i < iterations; i++) {

  }
  console.log('Expensive operation completed');
}

fs.readFile('./easy/1-counter.md', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log('File contents:', data);
});
console.log('Starting Expensive operation');
expensiveOperation(1000000000);

console.log(
  'This message is logged after initiating file read and expensive operation'
);
