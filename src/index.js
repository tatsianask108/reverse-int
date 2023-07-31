module.exports = function reverse (n) {
  newS = String(Math.abs(n));
   return  +(newS.split('').reverse().join(''));
}
