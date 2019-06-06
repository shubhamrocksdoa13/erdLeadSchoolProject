import { Component, OnInit } from '@angular/core';
import { studentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
   public active='viewStudents';
   public studentsList:[{}];
  constructor(
    private _studentsService: studentsService
  ) { }

  ngOnInit() {
    this.getRegisterdData();
  }
  nav(x){
    if(x === 'viewStudents'){
      this.active = 'viewStudents';
    }
    if(x === 'addStudents'){
      this.active = 'addStudents';
    }
  }
  getRegisterdData(){
    let data = this._studentsService.getTotalUsers();
    console.log(data);  
    this.studentsList = data.students;
    console.log(this.studentsList);
    
    
    // this.user = data;
    // console.log(data.registers.length);
  }
  editFun(x){
    console.log(x);
    
    // for(let i=0; i<= this.studentsList.length; i++){
      
    //   if(i <= this.studentsList.length){
    //    if(this.studentsList[i].id === x){

    //    }
        
    //   }
    // }
  }
 



}
