/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging: Add Java experience to Teacher
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // Java class extending Subject
  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingJava) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
