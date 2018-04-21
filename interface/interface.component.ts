import { Component} from '@angular/core';
import { IEmployee } from './employee';
@Component({
  selector: 'app-pipe',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {
  employees: IEmployee[];
  constructor(){
    this.employees=[
     {code: 'emp1o1',name:'Murali',gender:'Male',annualSalary:4500,dateOfBirth:'2/3/1997'},
     {code: 'emp1o2',name:'shiva',gender:'Male',annualSalary:4300,dateOfBirth:'11/6/1999'},
     {code: 'emp1o3',name:'kumar',gender:'Male',annualSalary:8500,dateOfBirth:'9/8/1987'},
     {code: 'emp1o4',name:'nani',gender:'Male',annualSalary:9500,dateOfBirth:'7/3/2003'},
     {code: 'emp1o5',name:'chinni',gender:'FeMale',annualSalary:9500,dateOfBirth:'8/5/2004'},
     ];
  }
  getTotalEmployeesCount(): number{
    return this.employees.length;
  }
  getMaleEmployeeCount(): number{
    return this.employees.filter(e => e.gender === 'Male').length;
  }
}