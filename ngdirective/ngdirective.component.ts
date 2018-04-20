import { Component} from '@angular/core';

@Component({
  selector: 'app-ngdirective',
  templateUrl: './ngdirective.component.html',
  styleUrls: ['./ngdirective.component.css']
})
export class NgdirectiveComponent {
  employees: any[];
  constructor(){
    this.employees=[
     {code: 'emp1o1',name:'Murali',gender:'Male',annualSalary:4500,dateOfBirth:'21/3/1997'},
    {code: 'emp1o2',name:'shiva',gender:'Male',annualSalary:4300,dateOfBirth:'11/6/1999'},
     {code: 'emp1o3',name:'kumar',gender:'Male',annualSalary:8500,dateOfBirth:'9/8/1987'},
     {code: 'emp1o4',name:'nani',gender:'Male',annualSalary:9500,dateOfBirth:'7/3/2003'},
     ];
  }
  getEmployees(): void {
    this.employees=[
    {code: 'emp1o1',name:'Murali',gender:'Male',annualSalary:4500,dateOfBirth:'21/3/1997'},
    {code: 'emp1o2',name:'shiva',gender:'Male',annualSalary:4300,dateOfBirth:'11/6/1999'},
     {code: 'emp1o3',name:'kumar',gender:'Male',annualSalary:8500,dateOfBirth:'9/8/1987'},
     {code: 'emp1o4',name:'nani',gender:'Male',annualSalary:9500,dateOfBirth:'7/3/2003'},
     {code: 'emp1o5',name:'chinni',gender:'FeMale',annualSalary:9500,dateOfBirth:'8/5/2004'},
     ];
  }
  trackByEmpCode(index: number, employee:any) : string{
    return employee.code;
  }
}