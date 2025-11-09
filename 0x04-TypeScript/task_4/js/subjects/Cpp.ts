/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging: Add new property to Teacher interface
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // Define the Cpp class extending Subject
  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      // If teacher not defined or lacks experience
      if (!this.teacher || !this.teacher.experienceTeachingC) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
