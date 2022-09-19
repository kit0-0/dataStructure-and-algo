let n = parseInt(prompt('positive number: '));
let m = true;
if (n === 1) {
  console.log('not prime');
} else if (n > 1) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      m = false;
      break;
    }
  }
  if (m) {
    console.log('isprime');
  } else {
    console.log('is notprime');
  }
}
