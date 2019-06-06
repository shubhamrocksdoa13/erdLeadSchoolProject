import { Component, OnInit } from '@angular/core';
import { studentsService } from '../students.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addName:string;
  addDate:Date;
  schoolValue:string;
  schoolSelect:string;
  classSelect:string;
  divisionSelect:string;
  status: { // 1 - Active, 2 - Inactive
    options?: number;
  } = {};
  statusValue:string;
  student:{
    addName:string,
    addDate:Date,
    schoolSelect:string,
    classSelect:string,
    divisionSelect:string,
    status:string,
  }
  constructor(
    private _studentsService: studentsService
  ) {
    this.status = {
      options: 1,
    };
   }

  ngOnInit() {
  }

  addStudent(){
    if(this.status.options === 1){
        this.statusValue = "Active";
    }
    if(this.status.options === 2){
      this.statusValue ="InActive";
    }
    this._studentsService.addStudent(this.addName,
      this.addDate,
      this.schoolSelect,
      this.classSelect,
      this.divisionSelect,
      this.statusValue);

      this.getRegisterdData();
  }

  getRegisterdData(){
    let data = this._studentsService.getTotalUsers();
    console.log(data);  
    // this.user = data;
    // console.log(data.registers.length);
  } 



}
