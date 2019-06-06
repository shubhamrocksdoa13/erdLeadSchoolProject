import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { studentsService} from './students.service';
// import { Ng2TableModule } from 'ng2-table/ng2-table';
import { StudentsRoutingModule } from './students-router.module';
import { StudentsComponent } from './students.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StudentsRoutingModule
  ],
  providers:[studentsService],
  declarations: [StudentsComponent, AddComponent]
})
export class StudentsModule { }
