//Task 1

function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}

let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web development"
};

console.log("Taks1" + " " + propsCount(mentor));

//Task 1

let student = {
  name: "John Doe",
  age: 25,
  course: "Web Development",
  duration: 6,
  enrolled: true
};

function showProps(obj) {
  let properties = Object.keys(obj);
  let values = Object.values(obj);
  console.log("Properties:", properties);
  console.log("Values:", values);
}

showProps("Task2" + " " + student);

//Task 3

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    return `${this.surname} ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(middleName) {
    return `${this.surname} ${this.name} ${middleName}`;
  }

  showCourse() {
    const currentYear = new Date().getFullYear();
    const course = currentYear - this.year;
    return course >= 1 && course <= 6 ? course : "Graduated";
  }
}

const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); // Current course: 6

//Task 4

class Worker {
  #experience;

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this.#experience = 1.2;
  }

  showSalary() {
    const salary = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary: ${salary}`);
    return salary;
  }

  showSalaryWithExperience() {
    const salaryWithExp = this.dayRate * this.workingDays * this.#experience;
    console.log(`${this.fullName} salary with experience: ${salaryWithExp}`);
    return salaryWithExp;
  }

  get experience() {
    return this.#experience;
  }

  set experience(value) {
    this.#experience = value;
  }
}

// Creating worker instances
const worker1 = new Worker("John Smith", 20, 23);
const worker2 = new Worker("Jane Doe", 25, 21);
const worker3 = new Worker("Jack Brown", 22, 25);

// Show salaries without experience
worker1.showSalary();
worker2.showSalary();
worker3.showSalary();

// Show salaries with initial experience
worker1.showSalaryWithExperience();
worker2.showSalaryWithExperience();
worker3.showSalaryWithExperience();

// Set new experience value and show updated salaries
worker1.experience = 1.5;
worker2.experience = 1.5;
worker3.experience = 1.5;

console.log("\nUpdated salaries with new experience:");
worker1.showSalaryWithExperience();
worker2.showSalaryWithExperience();
worker3.showSalaryWithExperience();

// Sorting workers by salary with experience
const workers = [worker1, worker2, worker3];
workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());

console.log("\nSorted workers by salary with experience:");
workers.forEach(worker => {
  console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
});

// Dynamic sorting for any number of workers
function sortWorkersBySalary(workers) {
  return workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
}

// Example usage with dynamic sorting
const worker4 = new Worker("Emily White", 30, 20);
const worker5 = new Worker("Chris Green", 18, 22);

const allWorkers = [worker1, worker2, worker3, worker4, worker5];
const sortedWorkers = sortWorkersBySalary(allWorkers);

console.log("\nDynamically sorted workers by salary with experience:");
sortedWorkers.forEach(worker => {
  console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
});

//Task 5

class GeometricFigure {
  getArea() {
    return 0;
  }

  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  getArea() {
    return 0.5 * this.base * this.height;
  }
}

class Square extends GeometricFigure {
  constructor(side) {
    super();
    this.side = side;
  }

  getArea() {
    return this.side * this.side;
  }
}

class Circle extends GeometricFigure {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

function handleFigures(figures) {
  return figures.reduce((totalArea, figure) => {
    if (figure instanceof GeometricFigure) {
      console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
      return totalArea + figure.getArea();
    }
    return totalArea;
  }, 0);
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(`Total area: ${handleFigures(figures)}`);