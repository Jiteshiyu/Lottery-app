// Generate a lottery ticket of size n with random numbers
function genTicket(n) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr;
}

// Calculate the sum of an array
function sum(arr) {
  return arr.reduce((sum, el) => sum + el, 0);
}

// Export functions for use in other modules
export { genTicket, sum };
