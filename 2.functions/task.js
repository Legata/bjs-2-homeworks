function getArrayParams(...arr) {
  let min = Infinity; 
  let max = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }if(arr[i] < min){
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) { 
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity; 
  let max = 0;
  let sub = 0;
  for (let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }if(arr[i] < min){
      min = arr[i];
    }
    sub = max - min;
  }
  return sub;
}

function differenceEvenOddWorker(...arr) { 
  let sumEvenElement = 0;
  let sumOddElement = 0;
  comp = 0;
  for (let i = 0; i < arr.length; i++){
    if((arr[i]) % 2  === 0){
      sumEvenElement += arr[i];
    }else{
      sumOddElement += arr[i];
    }
    comp = sumEvenElement - sumOddElement;
  }
  return comp;
}

function averageEvenElementsWorker(...arr) {
let sumEvenElement = 0;
let countEvenElement = 0;
let avg;
if (arr){
  avg = 0;
}
for (let i = 0; i < arr.length; i++){
  if((arr[i]) % 2  === 0){
    sumEvenElement += arr[i];
    countEvenElement += 1;
  }
   avg = sumEvenElement / countEvenElement;
  }
  return avg;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++){
    let max = func(...arrOfArr[i]);
    if (maxWorkerResult < max){
    maxWorkerResult = max;
    }
  } 
  return maxWorkerResult;
}