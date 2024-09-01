function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];  
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {

    if (this.excluded === true || !this.marks) {  
        return;
    }    
    this.marks.push(...marksToAdd);  
}

Student.prototype.getAverage = function () {

  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  const summ = this.marks.reduce((acc, mark) => acc + mark, 0); 
    return summ / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
    
const student1 = new Student('Александр', 'мужской', 20);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
const student2 = new Student('Мария', 'женский', 22);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)