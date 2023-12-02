// Random Resolve
const randomResolve = () => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  const delaySeconds = Math.floor(Math.random() * 5) + 1;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber % 2 === 0) {
        resolve('🥳 Yasss');
      } else {
        reject('🫠🫡 ok');
      }
    }, delaySeconds * 1000);
  });
};

// Promise API
const createPromiseArr = (n) => {
  const promises = Array.from({ length: n }, (_, index) => randomResolve());
  return Promise.all(promises);
};

// Async/Await
const printResponse = async (n) => {
  try {
    const responses = await createPromiseArr(n);
    console.log(responses);
  } catch (error) {
    console.error(error);
  }
};

// Casino (optional)
const casino = async (stakes) => {
  const promises = stakes.map((stake) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 3);
        const result = {
          value: randomNumber,
          color: randomNumber % 2 === 0 ? 'red' : 'black',
        };
        if (stake === 'red' && result.color === 'red') resolve('💵');
        else if (stake === 'black' && result.color === 'black') resolve('💵');
        else if (stake === 'even' && result.value % 2 === 0) resolve('💵');
        else if (stake === 'odd' && result.value % 2 !== 0) resolve('💵');
        else if (stake == result.value) resolve('💵');
        else reject('🫣');
      }, Math.floor(Math.random() * 5) + 1 * 1000);
    });
  });

  try {
    await Promise.all(promises);
  } catch (error) {
    console.log(error);
  }
};

// Example Usage
printResponse(3); // Async/Await example with 3 promises
casino(['red', 'even', 1]); // Casino example with stakes
