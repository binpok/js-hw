// Task 1

const calculate = (a, b, c) => {
    const discriminant = b * b - 4 * a * c;
  
    if (discriminant > 0) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return { x1, x2 };
    } else if (discriminant === 0) {
      const x1 = -b / (2 * a);
      return { x1, x2: null };
    } else {
      return { x1: null, x2: null };
    }
  };
  
  const roots = calculate(1, 5, 6);
  console.log(roots); // { x1: -2, x2: -3 }
  
  //Task 2
  
  const factorial = (num) => {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  };
  
  const result = factorial(5);
  console.log(result); // 120
  
  
  // Task 3
    
  const calculate3 = (callback, ...args) => {
    if (args.length < 2) {
      throw new Error('At least two arguments are required for calculation.');
    }
  
    let result = args[0];
  
    for (let i = 1; i < args.length; i++) {
      result = callback(result, args[i]);
    }
  
    return result;
  };
  
  const addition = (a, b) => a + b;
  const subtraction = (a, b) => a - b;
  const multiplication = (a, b) => a * b;
  const division = (a, b) => a / b;
  
  const result1 = calculate3(addition, 1, 1, 1, 1);
  console.log(result1); // 4
  
  const result2 = calculate3(subtraction, 20, 10, 5);
  console.log(result2); // 5
  
  const result3 = calculate3(multiplication, 2, 10, 2);
  console.log(result3); // 40
  
  const result4 = calculate3(division, 20, 10, 2);
  console.log(result4); // 1
  
  //Task 4
  
  const fib = (n) => {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [1];
    }
  
    const sequence = [1, 1];
  
    for (let i = 2; i < n; i++) {
      const nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }
  
    return sequence;
  };
  
  const result5 = fib(5);
  console.log(result.join(' ')); 
  
  
  