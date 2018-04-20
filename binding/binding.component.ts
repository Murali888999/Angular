import { Component} from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  columnSpan: number = 2;
  firstName: string ='Murali';
  lastName: string ="Mohan";
  gender: string="Male";
  age: number=20;
  showDetails : boolean = false;
  toggleDetails(): void{
    this.showDetails=!this.showDetails;
  }
}
