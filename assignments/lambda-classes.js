// CODE here for your Lambda Classes
class Person {
  constructor(value) {
    this.name = value.name;
    this.age = value.age;
    this.location = value.age;
    this.gender = value.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location} `;
  }
}

class Instructor extends Person {
  constructor(value) {
    super(value);
    this.specialty = value.specialty;
    this.favLanguage = value.favLanguage;
    this.catchPhrase = value.catchPhrase;
  }
  demo(subject) {
    return ` 'Today we are learning about ${subject}' `;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}'`;
  }
}
class Student extends Person {
  constructor(value) {
    super(value);
    this.previousBackground = value.previousBackground;
    this.className = value.className;
    this.favSubjects = value.favSubjects;
  }
  listsSubjects() {
    let favSub = this.favSubjects.forEach(element => {
      return element;
    });
    return favSub;
  }
  PRAssignment(student, subject) {
    return `${student.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(student, subject) {
    return `${student.name}  has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(value) {
    super(value);
    this.gradClassName = value.gradClassName;
    this.favInstructor = value.favInstructor;
  }
  standUp(channel) {
    return `${
      value.name
    } announces to ${channel}, @channel standy  times!​​​​​`;
  }
  debugsCode(student, subject) {
    return `${value.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const anu = new Person({
  name: "Anu",
  location: "Yaba",
  age: 44,
  gender: "male"
});

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});
const chinedu = new ProjectManager({
  name: "Chinedu",
  location: "MaryLand",
  age: 27,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Fullstack",
  catchPhrase: `No truth is certain until it works out`,
  gradClassName: "WEBEU12",
  favInstructor: "Gabe"
});

const john = new Student({
  name: "John",
  location: "Doe",
  age: 17,
  gender: "male",
  previousBackground: "Work at Chelsea Football Club",
  className: "CS132",
  favSubjects: ["Array", "Function", "Class"]
});

console.log(fred.demo("Java"));
console.log(fred.grade({ name: "John" }, "HTML"));
console.log(fred.specialty);

console.log(john.name);
console.log(john.listsSubjects());
console.log(john.PRAssignment("Array"));
console.log(john.sprintChallenge("Array"));

console.log(chinedu.name);
console.log(chinedu.favInstructor);
console.log(chinedu.standUp("chinedu_channel"));
console.log(chinedu.debugsCode({ name: "Yusuf" }, "Prototypes"));

console.log(anu.name);
console.log(anu.speak());
