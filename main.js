// Creating a base object 'university'
const university = {
    universityName: "Polytechnic",
  };
  
  // Creating a derived object 'faculty' with prototype 'university'
  const faculty = Object.create(university, {
    facultyName: {
      value: "Physics and Mathematics",
      enumerable: true,
      writable: true,
      configurable: true,
    },
    groups: {
      value: [],
      enumerable: true,
      writable: true,
      configurable: true,
    },
  });
  
  // Function to enlist students in a faculty's group
  function enlistStudent(...students) {
    if (this.groups.length < 12) {
      return this.groups.push(...students);
    }
  }
  
  // Accessing properties
  console.log(faculty.universityName); // Output: Polytechnic
  
  // Enlisting students using 'apply'
  enlistStudent.apply(faculty, ["Taras", "Angela", "Serhii"]);
  
  // ## Prototype Constructor
  
  // Constructor function for the base object 'Animal'
  function Animal(name) {
    this.name = name;
  }
  
  // Adding a method to the 'Animal' prototype
  Animal.prototype.getInfo = function () {
    return `name: ${this.name}`;
  };
  
  // Constructor function for the derived object 'Mammal'
  function Mammal(name, live) {
    Animal.call(this, name);
    this.live = live;
  }
  
  // Setting up the prototype chain for 'Mammal'
  Mammal.prototype = Object.create(Animal.prototype);
  Mammal.prototype.run = function () {
    return `${this.name} is running`;
  };
  
  // Constructor function for the derived object 'Bird'
  function Bird(name, live) {
    Animal.call(this, name);
    this.live = live; // Fix: Corrected the assignment operator from '-' to '='
  }
  
  // Setting up the prototype chain for 'Bird'
  Bird.prototype = Object.create(Animal.prototype);
  Bird.prototype.fly = function () {
    return `${this.name} is flying`;
  };
  
  // Constructor function for the derived object 'Dog'
  function Dog(name, live, breed) {
    Mammal.call(this, name, live);
    this.breed = breed;
  }
  
  // Adding a method to the 'Dog' prototype
  Dog.prototype.whoIsGoodDog = function () {
    return `woof woof`;
  };
  
  // Constructor function for the derived object 'Penguin'
  function Penguin(name, live, species) {
    Bird.call(this, name, live);
    this.species = species;
  }
  
  // Setting up the prototype chain for 'Penguin'
  Penguin.prototype = Object.create(Bird.prototype);
  Penguin.prototype.swim = function () {
    return `${this.name} is swimming`;
  };
  
  // Overriding the 'fly' method for 'Penguin'
  Penguin.prototype.fly = function () {
    return `penguin can't fly`;
  };
  
