// Task 1

const reverse = (str) => {
  
    return str.split('').reverse().join('');
  };
  
  console.log(reverse("hello")); 
  
  //Task 2
  
  const countWords = (str) => {
  
      const words = str.split(/\s+/);
  
      return words.length;
    };
    
    console.log(countWords("Hi my name is Ievgen")); 
  
    // Task 3
  
    const clearWhiteSpace = (str) => {
     
      return str.replace(/\s/g, '');
    };
    
    const result = clearWhiteSpace("  1   2   ");
    console.log(result); 
    
    //Task 4
  
    const cutStr = (str, maxLength) => {
      if (str.length <= maxLength) {
        return str; 
      } else {
        return str.slice(0, maxLength) + '...'; 
      }
    };
    
    console.log(cutStr("Hello", 5));        
    console.log(cutStr("Hello there", 5)); 