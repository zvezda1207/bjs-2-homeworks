function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
 
  for (let i = 0; i < arr.length; i++) {
 
    if (arr[i] > max) {
    max = arr[i];
   
    } else if (arr[i] < min) {
    min = arr[i];  
    }
 
    sum = sum + arr[i];
  }
 
  let avg = (sum / arr.length).toFixed(2);
 
  return {min: min, max: max, avg: parseFloat(avg)};
}


function summElementsWorker(...arr) {
  
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }    
 
  return sum;
}
 
 
function differenceMaxMinWorker(...arr) {
  
  if (arr.length === 0) {
    return 0;
  }
  let min = arr[0];
  let max = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
 
    if (arr[i] > max) {
    max = arr[i];
   
    } else if (arr[i] < min) {
    min = arr[i];  
    }
  }
  
  let difference = max - min;
  
  return difference;
}
 
 
function differenceEvenOddWorker(...arr) {
  
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0; 
  let sumOddElement = 0;
 
  for (let i = 0; i < arr.length; i++) {
 
    if (arr[i] % 2 === 0) {
    sumEvenElement += arr[i];
   
    } else if (arr[i] % 2 !== 0) {
    sumOddElement += arr[i];  
    }
  }
 
  let difference = sumEvenElement - sumOddElement;
   
  return difference;
}
 
 
function averageEvenElementsWorker(...arr) {
  
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
 
  for (let i = 0; i < arr.length; i++) {
 
    if (arr[i] % 2 === 0) {
    sumEvenElement += arr[i];
    countEvenElement =+ 1;
    } 
  }
  
  let result = sumEvenElement / countEvenElement;
 
  return result;
}
 
 
function makeWork (arrOfArr, func) {
  let maxWorkerResult = arrOfArr[0];
 
  for (let i = 0; i < arrOfArr.length; i++) {
  
    const result = func(...arrOfArr[i]);  
  
    if (result > maxWorkerResult) {
    maxWorkerResult = result;
    }
  }
 
  return maxWorkerResult;
}
