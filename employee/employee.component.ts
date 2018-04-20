import { Component} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  firstName: string ='Murali';
  lastName: string ="Mohan";
  gender: string="Male";
  age: number=20;
}
