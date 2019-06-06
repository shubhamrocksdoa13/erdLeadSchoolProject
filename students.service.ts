import { Injectable } from '@angular/core';
import { student } from './listOfStudents';
import { of } from 'rxjs';

@Injectable()
export class studentsService {
  // private todos: Todo[];
  private nextId: number;

  //student = student


  constructor() {
    let students = this.getAddStudentData();
    if (students.length  === 0 ){
      this.nextId = 0;
    }
    else{
      let maxId = students[students.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  public addStudent(text1:string, text2:Date, text3:string, text4:string, text5:string, text6:string):void{
    let user = new student(this.nextId, text1, text2, text3, text4, text5, text6);
    let students = this.getAddStudentData();
    students.push(user);
    this.setLocalStoragestudent(students);
    this.nextId++;
  }

    public getAddStudentData(){
    let localStorageItem = JSON.parse(localStorage.getItem('students'));
    return localStorageItem == null ? [] : localStorageItem.students;
  }

  public getTotalUsers(){
    let totalUsers = JSON.parse(localStorage.getItem('students'));
    return totalUsers;
  }

  setLocalStoragestudent(students: student[]):void{
    localStorage.setItem('students', JSON.stringify({ students: students }));
  }


  
  
}
