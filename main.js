// Task 1

function pythagorean(a, b) {
  const c = Math.sqrt(a * a + b * b);
  return c;
}

const result = pythagorean(5, 12);
console.log(result); 

// Task 2

function formatMoney(num) {
  
  const isNegative = num < 0;
  const absoluteNum = Math.abs(num);
  const formattedNum = absoluteNum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  const result = (isNegative ? '-' : '+') + ' ' + formattedNum;

  return result;
}

console.log(formatMoney(1232323)); 
console.log(formatMoney(-23.2132)); 

// Task 3

function formatNumber(num) {
  const isNegative = num < 0;
  const absoluteNum = Math.abs(num);
  const formattedNum = absoluteNum.toLocaleString('en-US', {
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 3, 
  });

  const result = (isNegative ? '-' : '+') + ' ' + formattedNum;

  return result;
}

console.log(formatNumber(1232323));     
console.log(formatNumber(1223.65378));   

// Task 4

function generatePassword(n) {
  const symbols =
    '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz';

  let password = '';

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    password += symbols[randomIndex];
  }

  return password;
}

console.log(generatePassword(8)); 

// Task 5

function calc(firstNum, secondNum, precision) {
  const percentage = (secondNum * 100) / firstNum;
  const roundedPercentage = Number(percentage.toFixed(precision));
  return roundedPercentage;
}

console.log(calc(200, 50, 0));   
console.log(calc(200, 0.14, 1)); 

// Task 6

function splitNumber(num) {
  const intPart = Math.floor(num);
  const decimalPart = (num - intPart) * 100; 

  return {
    int: intPart,
    decimal: decimalPart
  };
}

console.log(splitNumber(2));      
console.log(splitNumber(2.34));  

// Task 7

function isPrime(n) {
  if (n <= 1) {
    return false; 
  }

  if (n <= 3) {
    return true; 
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false; 
  }

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false; 
    }
  }

  return true; 
}

console.log(isPrime(4)); // false
console.log(isPrime(5)); // true

// Task 8

function isArmstrong(n) {
  const numString = n.toString();
  const numDigits = numString.length;
  let sum = 0;

  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt(numString[i]);
    sum += Math.pow(digit, numDigits);
  }

  return sum === n;
}

console.log(isArmstrong(152));  // false
console.log(isArmstrong(4));    // true
console.log(isArmstrong(153));  // true





