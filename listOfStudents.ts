export class student {
    id: number;
    name: string;
    dob: Date;
    school: string;
    stuClass: string;
    division:string;
    status: string;
  
    constructor(id: number, name: string, dob: Date, school:string, stuClass: string, division: string, status: string) {
      this.id = id;
      this.name = name;
      this.dob = dob;
      this.school = school;
      this.stuClass = stuClass;
      this.division = division;
      this.status = status;
    }
  }
  