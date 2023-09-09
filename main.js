// Task 1

const filterRange = (arr, from, to) => {
    return arr.filter((num) => num >= from && num <= to);
  };
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const filteredArray = filterRange(arr, 3, 7);
  console.log(filteredArray); 
  
  // Task 2
  
  const arr2 = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
  
  const sortArr2 = (arr2) => {
    arr2.sort((a, b) => a - b);
  };
  
  sortArr2(2);
  
  console.log(arr2); 
  
  // Task 3
  
  const arr3 = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
  
  const sortArr3 = (arr3) => {
    arr3.sort((a, b) => a.length - b.length);
  };
  
  sortArr3(arr3);
  
  console.log(arr3);
  
  // Task 4
  
  const arr4 = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 },
    { name: "Taras", age: 25 },
    { name: "Kate", age: 74 },
    { name: "Chris", age: 14 },
    { name: "Alan", age: 5 },
    { name: "Boris", age: 55 },
    { name: "Elizabeth", age: 48 },
  ];
  
  const averageAge = (arr4) => {
    let totalAge = 0;
    let count = 0;
  
    for (const user of arr4) {
      if (user.age > 17 && user.age < 55) {
        totalAge += user.age;
        count++;
      }
    }
  
    if (count === 0) {
      return 0; 
    }
  
    const average = totalAge / count;
  
    return average;
  };
  
  const result = averageAge(arr4);
  console.log(result); 
  
  // Task 5
  
  const arr5 = [
    { name: "John", age: 25 },
    { name: "John", age: 5 },
    { name: "John", age: 2 },
    { name: "John", age: 45 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 },
    { name: "Mary", age: 2 },
    { name: "Taras", age: 25 },
    { name: "Taras", age: 19 },
    { name: "Kate", age: 74 },
    { name: "Chris", age: 14 },
    { name: "Alan", age: 5 },
    { name: "Alan", age: 32 },
    { name: "Boris", age: 55 },
    { name: "Elizabeth", age: 48 },
    { name: "Elizabeth", age: 8 },
  ];
  
  const sortUsers = (arr5) => {
    arr5.sort((a, b) => {
      if (a.name === b.name) {
        return a.age - b.age;
      }
      return a.name.localeCompare(b.name);
    });
  };
  
  sortUsers(arr5);
  
  console.log(arr5);
  
  // Task 6
  
  const arr6 = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 },
    { name: "Taras", age: 25 },
    { name: "Kate", age: 74 },
    { name: "Chris", age: 14 },
    { name: "Alan", age: 5 },
    { name: "Boris", age: 55 },
    { name: "Elizabeth", age: 48 },
  ];
  
  const minMaxAge = (arr6) => {
    if (arr6.length === 0) {
      return { min: null, max: null };
    }
  
    return arr6.reduce(
      (acc, curr) => {
        if (curr.age < acc.min) {
          acc.min = curr.age;
        }
        if (curr.age > acc.max) {
          acc.max = curr.age;
        }
        return acc;
      },
      { min: Infinity, max: -Infinity }
    );
  };
  
  const result6 = minMaxAge(arr6);
  console.log(result6);
  
  // Task 7
  
  const strings = [
    "HELLO",
    "World",
    "JS",
    "Js",
    "HI",
    "Hello",
    "HTML",
    "CSS",
    "js",
  ];
  
  const unique = (arr7) => {
    const uniqueSet = new Set(arr7);
    const uniqueArr = Array.from(uniqueSet);
    return uniqueArr;
  };
  
  const uniqueArr = unique(strings);
  console.log(uniqueArr.join(', '));
  
  
  
  
  
  
  