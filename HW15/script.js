"Use strict";

// Work 1

class Human {
    static getType() {
      return `I'm Humen`;
    }
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    getName() {
      return this.name;
    }
    getAge() {
      return this.age;
    }
  }
  
  class Tester extends Human {
    constructor(name, age) {
      super(name, age);
      this.job = "Tester";
    }
    static getJob() {
      this.job = "Tester";
      return this.job;
    }
  }
  
  class Programmer extends Human {
    constructor(name, age) {
      super(name, age);
      this.job = "Programmer";
    }
    static getJob() {
      this.job = "Programmer";
      return this.job;
    }
  }
  
  class ITCompany {
    createWorker(name, age, position) {
      if (position == "Programmer") {
        return new Programmer(name, age);
      }
      if (position == "Tester") {
        return new Tester(name, age);
      }
    }
  }
  
  const dev = Tester.getJob();
  console.log(dev);
  
  const user = new ITCompany();
  const programmer = user.createWorker("Volodymyr", 28, "Programmer");
  console.log(programmer);
  
  const user2 = new Programmer("Volodymyr", 28);
  user2.getAge();

// Work 2


const obj = {
    a: '1',
    b: '2',
    c: '3',
    e: '4',
    o: '5',
  }
  let vowels = "forward"; 
  let vowelsArr = Array.from(vowels)
  
  for (const key in obj) {
    for (let i = 0; i < vowelsArr.length; i++) {
      if (key == vowelsArr[i]) {
        Object.freeze(obj)
      }
    }
  }
