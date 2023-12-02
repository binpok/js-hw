const users = [
  {
    id: 1,
    name: "Taras",
    age: 30,
    movies: [],
  },
  {
    id: 2,
    name: "Kate",
    age: 45,
    movies: ["Titanic", "Avatar"],
  },
];

const getUserData = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((item) => item.id === id);
      if (user) {
        resolve(user);
      } else {
        reject("404 not found");
      }
    }, 1000);
  });
};

getUserData(2)
  .then((user) => {
    console.log(user);
  })
  .catch((e) => console.error(e));
