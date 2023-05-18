function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Олег", "мужской", 18);
let student2 = new Student("Анна", "женский", 17);
let student3 = new Student("Петр", "мужской", 20);
let student4 = new Student("Ольга", "женский", 19);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks !== undefined) {
    this.marks.push(...marks);  
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  if (this.marks === undefined || this.marks.length === 0){
    return 0;
  }
  for (let i = 0; i < this.marks.length; i++){
    sum += this.marks[i];
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}