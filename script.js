var passedCount = document.querySelector("#pass .count");
var failedCount = document.querySelector("#fail .count");

function secret(n) {
  return n;
}

function getPrimes(max) {
  var notPrime = [];
  var primes = [];
  for (var i = 2; i < max; i++) {
    if (!notPrime[i]) {
      primes.push(i);
      for (var j = i*2; j < max; j += i) {
        notPrime[j] = true;
      }
    }
  }
  return primes;
}
function checkAdditive(num) {
  num = Math.abs(Number(num));
  var primes = getPrimes(num);
  var passed = 0;
  var failed = 0;
  for (var i = 0; i < primes.length; i++) {
    for (var j = i+1; j < primes.length; j++) {
      if (secret(primes[i] + primes[j]) == secret(primes[i]) + secret(primes[j])) {
        passed++;
      } else {
        failed++;
      }
    }
  }
  passedCount.innerHTML = passed;
  failedCount.innerHTML = failed;
}