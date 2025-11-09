/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    // Setter method for assigning a teacher
    setTeacher(teacher:Teacher) {
      this.teacher = teacher;
    }
  }
}
