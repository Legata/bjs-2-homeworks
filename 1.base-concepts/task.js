"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-4*a*c;
  if (d > 0){
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  }else if (d === 0){
    arr.push(-b/(2*a));
    
  }else {
    return arr;
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)){
    return false;
  }
  percent = percent / 100 / 12;
  let priceBody = amount - contribution;
  let payment = priceBody * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  let totalPayment = Number((payment * countMonths). toFixed (2));
  return totalPayment;
}