// Task 1

function getDaysInYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 366; 
  } else {
    return 365; 
  }
}

console.log(getDaysInYear(2021)); // 365
console.log(getDaysInYear(2020)); // 366

// Task 2

function getDayNumber(dateString) {
  const date = new Date(dateString);
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const timeDifference = date - startOfYear;
  const dayNumber = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

  return dayNumber;
}

console.log(getDayNumber("2023-01-12")); // 12
console.log(getDayNumber("2023-02-26")); // 57


// Task 3

function getQuarters(dateString) {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; 

  if (month >= 1 && month <= 3) {
    return "I quarter";
  } else if (month >= 4 && month <= 6) {
    return "II quarter";
  } else if (month >= 7 && month <= 9) {
    return "III quarter";
  } else if (month >= 10 && month <= 12) {
    return "IV quarter";
  } else {
    return "Invalid date"; 
  }
}

console.log(getQuarters("2023-02-26")); // I quarter
