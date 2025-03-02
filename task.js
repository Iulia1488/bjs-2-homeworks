function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if(this.hasOwnProperty("marks")) {
        this.marks = [...this.marks, ...marks];
      }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  this.marks.forEach(item => sum += item);
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}