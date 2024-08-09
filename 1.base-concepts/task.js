"use strict"
function solveEquation(a, b, c) {
  let discriminant = b**2 - 4*a*c;
  let arr = [];

  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    arr.push(-b / (2*a));
  } else {
    arr.push((-b + Math.sqrt(d)) / (2*a));
    arr.push((-b - Math.sqrt(d) ) / (2*a));
  }  
  
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = percent / 100 / 12;
  let loanBody = amount - contribution;    
  let monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));    
  let totalAmount = monthlyPayment * countMonths;
    
  return parseFloat(totalAmount.toFixed(2));
}
