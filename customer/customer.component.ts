import { Component} from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  columnSpan: number = 2;
  firstName: string ='Murali';
  lastName: string ="Mohan";
  gender: string="Male";
  age: number=20;
}
